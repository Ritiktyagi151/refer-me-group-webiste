import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";

const router = express.Router();

// --- Logic 1: Email bhejne ka function ---
const sendEmails = async (status, data) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 16 digit Gmail App Password
      },
    });

    // User/Customer Mail Template
    const userMail = {
      from: `"Refer Me Group" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject:
        status === "success" ? "Registration Confirmed!" : "Payment Failed",
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: ${status === "success" ? "#22c55e" : "#ef4444"};">
            Payment ${status === "success" ? "Successful" : "Failed"}
          </h2>
          <p>Hi <b>${data.firstname}</b>,</p>
          <p>${
            status === "success"
              ? "Aapka registration safal raha! Hum jald hi aapse sampark karenge."
              : "Hume khed hai ki aapka transaction fail ho gaya hai. Kripya dobara koshish karein."
          }</p>
          <hr />
          <p><b>Transaction ID:</b> ${data.txnid}</p>
          <p><b>Amount:</b> ₹${data.amount}</p>
          <p><b>Product:</b> ${data.productinfo}</p>
          <p style="margin-top: 20px;">Team Refer Me Group</p>
        </div>`,
    };

    // Owner/Admin Mail Template
    const ownerMail = {
      from: `"System Alert" <${process.env.EMAIL_USER}>`,
      to: "itjaikvik@gmail.com",
      subject: `New Payment Alert: ${status.toUpperCase()} (${data.firstname})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f9f9f9;">
          <h3>New Transaction Report</h3>
          <p><b>Name:</b> ${data.firstname}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Phone:</b> ${data.phone}</p>
          <p><b>Status:</b> ${status.toUpperCase()}</p>
          <p><b>Amount:</b> ₹${data.amount}</p>
          <p><b>Txn ID:</b> ${data.txnid}</p>
        </div>`,
    };

    await transporter.sendMail(userMail);
    await transporter.sendMail(ownerMail);
    console.log("✅ Emails trigger ho gayi hain");
  } catch (err) {
    console.error("❌ Email trigger error:", err);
  }
};

// --- Logic 2: PayU Callback Handler (Success/Fail) ---
const handlePayUCallback = async (req, res) => {
  try {
    const paymentData = req.body;
    if (!paymentData || Object.keys(paymentData).length === 0) {
      return res.redirect(
        "https://refermegroup.com/payment-status?status=error",
      );
    }

    const status = paymentData.status === "success" ? "success" : "fail";

    // Email trigger (Isse await na karein taaki redirect fast ho)
    sendEmails(status, paymentData);

    // Frontend par redirect (This solves "Cannot POST" error)
    const frontendUrl = `https://refermegroup.com/payment-status?status=${status}&name=${paymentData.firstname || "User"}`;
    return res.redirect(frontendUrl);
  } catch (error) {
    console.error("❌ Callback Handler Error:", error);
    res.redirect("https://refermegroup.com/payment-status?status=error");
  }
};

// --- Logic 3: Initiate Payment (PayU Hash Generation) ---
router.post("/payu", (req, res) => {
  try {
    const { name, email, phone, amount, productinfo, txnid } = req.body;

    if (!name || !email || !phone || !amount || !productinfo || !txnid) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      return res.status(500).json({ message: "Payment keys not configured" });
    }

    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    const params = {
      key,
      txnid,
      amount,
      productinfo,
      firstname: name,
      email,
      phone,
      surl: `https://refermegroup.com/api/payment/success`,
      furl: `https://refermegroup.com/api/payment/fail`,
      hash,
      service_provider: "payu_paisa",
    };

    res.status(200).json({
      success: true,
      actionUrl:
        process.env.PAYU_MODE === "test"
          ? "https://test.payu.in/_payment"
          : "https://secure.payu.in/_payment",
      params,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// --- Logic 4: Callback Routes Define ---
router.post("/success", handlePayUCallback);
router.post("/fail", handlePayUCallback);

export default router;
