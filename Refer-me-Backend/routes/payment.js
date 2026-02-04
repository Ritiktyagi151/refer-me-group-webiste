import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";

const router = express.Router();

/* ==============================
   SMTP TRANSPORTER (CACHED & SAFE)
================================ */
let cachedTransporter = null;

const getTransporter = () => {
  if (cachedTransporter) return cachedTransporter;

  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    throw new Error("SMTP ENV variables missing at runtime");
  }

  cachedTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  console.log("✅ SMTP Transporter initialized once");
  return cachedTransporter;
};

/* ==============================
   SEND EMAILS
================================ */
const sendNotificationEmails = async (status, data) => {
  try {
    console.log("📧 SMTP ENV CHECK:", {
      MAIL_USER: process.env.MAIL_USER,
      MAIL_PASS: process.env.MAIL_PASS ? "LOADED" : "MISSING",
    });

    const transporter = getTransporter();
    const isSuccess = status === "success";

    const customerMail = {
      from: `"Refer Me Group" <${process.env.MAIL_USER}>`,
      to: data.email,
      subject: isSuccess
        ? "Registration Successful – Refer Me Group"
        : "Payment Failed – Refer Me Group",
      html: `
        <h2>${isSuccess ? "Payment Successful" : "Payment Failed"}</h2>
        <p>Name: ${data.firstname}</p>
        <p>Transaction ID: ${data.txnid}</p>
        <p>Amount: ₹${data.amount}</p>
      `,
    };

    const adminMail = {
      from: `"Payment Alert" <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `PAYMENT ${status.toUpperCase()}`,
      html: `
        <p>Status: ${status}</p>
        <p>Name: ${data.firstname}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Txn ID: ${data.txnid}</p>
        <p>Amount: ₹${data.amount}</p>
      `,
    };

    await transporter.sendMail(customerMail);
    await transporter.sendMail(adminMail);

    console.log("✅ Emails sent successfully");
  } catch (err) {
    console.error("❌ Email trigger error:", err.message);
  }
};

/* ==============================
   PAYU CALLBACK
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

    res.json({
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

router.post("/success", handlePayUCallback);
router.post("/fail", handlePayUCallback);

export default router;
