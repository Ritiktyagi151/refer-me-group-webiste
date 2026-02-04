import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables specifically for this route
dotenv.config();

const router = express.Router();

/**
 * Logic 1: SMTP Email Service
 */
const sendNotificationEmails = async (status, data) => {
  try {
    // --- DEBUGGING LOGS START ---
    console.log("-------------------------------------------------");
    console.log("DEBUG: Initializing SMTP Service...");
    console.log("DEBUG: Configured Admin Email ->", "contact@refermegroup.com");
    console.log(
      "DEBUG: EMAIL_PASS from Env ->",
      process.env.EMAIL_PASS ? "FOUND" : "NOT FOUND",
    );
    if (process.env.EMAIL_PASS) {
      console.log("DEBUG: EMAIL_PASS Length ->", process.env.EMAIL_PASS.length);
      // Security check: pehle 2 character print karein confirm karne ke liye
      console.log(
        "DEBUG: EMAIL_PASS Starts with ->",
        process.env.EMAIL_PASS.substring(0, 2),
      );
    }
    console.log("-------------------------------------------------");
    // --- DEBUGGING LOGS END ---

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@refermegroup.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ SMTP Server Verified Successfully");

    const isSuccess = status === "success";

    const customerMail = {
      from: `"Refer Me Group" <contact@refermegroup.com>`,
      to: data.email,
      subject: isSuccess
        ? "Registration Confirmed! - Refer Me Group"
        : "Payment Failed Notice",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; border: 1px solid #e0e0e0; border-radius: 12px; max-width: 600px; margin: auto;">
          <h2 style="color: ${isSuccess ? "#2e7d32" : "#d32f2f"}; text-align: center;">
            Registration ${isSuccess ? "Successful" : "Failed"}
          </h2>
          <p>Dear <b>${data.firstname}</b>,</p>
          <p>${isSuccess ? "Registration successful! Our team will contact you soon." : "Payment failed. Please try again."}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
            <p><b>Transaction ID:</b> ${data.txnid}</p>
            <p><b>Amount:</b> ₹${data.amount}</p>
          </div>
          <p>Best Regards,<br><b>Refer Me Group Team</b></p>
        </div>`,
    };

    const adminMail = {
      from: `"Payment Alert" <contact@refermegroup.com>`,
      to: "contact@refermegroup.com",
      subject: `ALERT: ${status.toUpperCase()} Payment from ${data.firstname}`,
      html: `<h3>New Enrollment</h3>
             <p><b>Status:</b> ${status.toUpperCase()}</p>
             <p><b>Name:</b> ${data.firstname}</p>
             <p><b>Email:</b> ${data.email}</p>
             <p><b>Txn ID:</b> ${data.txnid}</p>`,
    };

    await transporter.sendMail(customerMail);
    await transporter.sendMail(adminMail);
    console.log("✅ Confirmation and Admin emails dispatched.");
  } catch (error) {
    console.error("❌ SMTP Service Error Log:", error.message);
  }
};

/**
 * Logic 2: PayU Callback Handlers
 */
const handlePayUCallback = async (req, res) => {
  try {
    const paymentData = req.body;
    console.log("📥 Callback received from PayU");

    if (!paymentData || Object.keys(paymentData).length === 0) {
      return res.redirect(
        `https://refermegroup.com/payment-status?status=error`,
      );
    }

    const status = paymentData.status === "success" ? "success" : "fail";

    // Trigger emails in background
    sendNotificationEmails(status, paymentData);

    const frontendUrl = `https://refermegroup.com/payment-status?status=${status}&name=${paymentData.firstname || "User"}`;
    return res.redirect(frontendUrl);
  } catch (error) {
    console.error("❌ Callback Processing Error:", error);
    res.redirect(`https://refermegroup.com/payment-status?status=error`);
  }
};

/**
 * Logic 3: Hash Generation
 */
router.post("/payu", (req, res) => {
  try {
    const { name, email, phone, amount, productinfo, txnid } = req.body;
    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      return res.status(500).json({ message: "Server Keys Missing" });
    }

    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    res.status(200).json({
      success: true,
      actionUrl:
        process.env.PAYU_MODE === "test"
          ? "https://test.payu.in/_payment"
          : "https://secure.payu.in/_payment",
      params: {
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
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/success", handlePayUCallback);
router.post("/fail", handlePayUCallback);

export default router;
