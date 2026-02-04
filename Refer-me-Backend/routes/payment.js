import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

// Load env
dotenv.config({ path: path.join(process.cwd(), ".env") });

const router = express.Router();

/* ==============================
   SMTP CONFIG
================================ */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Verify SMTP once at startup
(async () => {
  try {
    await transporter.verify();
    console.log("✅ SMTP Server Verified Successfully");
  } catch (err) {
    console.error("❌ SMTP Verification Failed:", err.message);
  }
})();

/* ==============================
   EMAIL SERVICE
================================ */
const sendNotificationEmails = async (status, data) => {
  try {
    const isSuccess = status === "success";

    const customerMail = {
      from: `"Refer Me Group" <${process.env.MAIL_USER}>`,
      to: data.email,
      subject: isSuccess
        ? "Registration Confirmed – Refer Me Group"
        : "Payment Failed – Refer Me Group",
      html: `
        <div style="font-family:Arial;padding:20px;border:1px solid #ddd;border-radius:10px;max-width:600px;margin:auto">
          <h2 style="color:${isSuccess ? "#2e7d32" : "#d32f2f"}">
            ${isSuccess ? "Payment Successful" : "Payment Failed"}
          </h2>
          <p>Dear <b>${data.firstname}</b>,</p>
          <p>
            ${
              isSuccess
                ? "Your registration has been completed successfully."
                : "Your payment failed. Please try again."
            }
          </p>
          <hr/>
          <p><b>Transaction ID:</b> ${data.txnid}</p>
          <p><b>Amount:</b> ₹${data.amount}</p>
          <p>Regards,<br/><b>Refer Me Group Team</b></p>
        </div>
      `,
    };

    const adminMail = {
      from: `"Payment Alert" <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `PAYMENT ${status.toUpperCase()} | ${data.firstname}`,
      html: `
        <h3>New Payment Notification</h3>
        <p><b>Status:</b> ${status.toUpperCase()}</p>
        <p><b>Name:</b> ${data.firstname}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Txn ID:</b> ${data.txnid}</p>
        <p><b>Amount:</b> ₹${data.amount}</p>
      `,
    };

    await transporter.sendMail(customerMail);
    await transporter.sendMail(adminMail);

    console.log("✅ Emails sent to user & admin");
  } catch (error) {
    console.error("❌ Email Send Error:", error.message);
  }
};

/* ==============================
   PAYU CALLBACK HANDLER
================================ */
const handlePayUCallback = async (req, res) => {
  try {
    const paymentData = req.body;
    console.log("📥 PayU Callback Received");

    if (!paymentData || !paymentData.status) {
      return res.redirect(
        `${process.env.BASE_URL}/payment-status?status=error`,
      );
    }

    const status = paymentData.status === "success" ? "success" : "fail";

    await sendNotificationEmails(status, paymentData);

    return res.redirect(
      `${process.env.BASE_URL}/payment-status?status=${status}&name=${
        paymentData.firstname || "User"
      }`,
    );
  } catch (err) {
    console.error("❌ PayU Callback Error:", err.message);
    return res.redirect(`${process.env.BASE_URL}/payment-status?status=error`);
  }
};

/* ==============================
   PAYU HASH API
================================ */
router.post("/payu", (req, res) => {
  try {
    const { name, email, phone, amount, productinfo, txnid } = req.body;

    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      return res.status(500).json({ message: "PayU keys missing" });
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
        surl: `${process.env.BASE_URL}/api/payment/success`,
        furl: `${process.env.BASE_URL}/api/payment/fail`,
        hash,
        service_provider: "payu_paisa",
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/* ==============================
   ROUTES
================================ */
router.post("/success", handlePayUCallback);
router.post("/fail", handlePayUCallback);

export default router;
