import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";

const router = express.Router();

/**
 * Logic 1: SMTP Email Service
 * Sends confirmation to the User and an alert to contact@refermegroup.com
 */
const sendNotificationEmails = async (status, data) => {
  try {
    console.log(
      "--- Initializing SMTP Service for contact@refermegroup.com ---",
    );

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: "contact@refermegroup.com", // Your Workspace Email
        pass: process.env.EMAIL_PASS, // Your 16-digit Google App Password
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ SMTP Server Verified Successfully");

    const isSuccess = status === "success";

    // A. Email for the Registered User
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
          <p>${
            isSuccess
              ? "Thank you for registering with Refer Me Group. We have successfully received your payment. Our team will contact you soon."
              : "We noticed an issue with your payment attempt. No funds were captured. Please try the registration process again."
          }</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
            <p style="margin: 5px 0;"><b>Transaction ID:</b> ${data.txnid}</p>
            <p style="margin: 5px 0;"><b>Amount Paid:</b> ₹${data.amount}</p>
            <p style="margin: 5px 0;"><b>Plan:</b> ${data.productinfo}</p>
          </div>
          <p style="font-size: 14px; color: #666;">Best Regards,<br><b>Refer Me Group Team</b></p>
        </div>`,
    };

    // B. Email for the Admin (contact@refermegroup.com)
    const adminMail = {
      from: `"Payment Alert System" <contact@refermegroup.com>`,
      to: "contact@refermegroup.com",
      subject: `ALERT: ${status.toUpperCase()} Payment from ${data.firstname}`,
      html: `
        <div style="font-family: Arial; padding: 20px; background-color: #fff9c4; border: 1px dashed #fbc02d;">
          <h3 style="margin-top: 0;">New Enrollment Notification</h3>
          <p><b>Status:</b> ${status.toUpperCase()}</p>
          <p><b>Customer Name:</b> ${data.firstname}</p>
          <p><b>Customer Email:</b> ${data.email}</p>
          <p><b>Phone:</b> ${data.phone}</p>
          <p><b>Transaction ID:</b> ${data.txnid}</p>
          <p><b>Amount:</b> ₹${data.amount}</p>
          <p><b>Timestamp:</b> ${new Date().toLocaleString()}</p>
        </div>`,
    };

    // Dispatch Emails
    await transporter.sendMail(customerMail);
    await transporter.sendMail(adminMail);
    console.log("✅ Confirmation and Admin emails dispatched.");
  } catch (error) {
    console.error("❌ SMTP Service Error Log:", error.message);
  }
};

/**
 * Logic 2: PayU Callback Handlers
 * Receives data from PayU and redirects user to Frontend UI
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

    // Redirect user to React Frontend
    const frontendUrl = `https://refermegroup.com/payment-status?status=${status}&name=${paymentData.firstname || "User"}`;
    console.log(`🚀 Redirecting to: ${frontendUrl}`);

    return res.redirect(frontendUrl);
  } catch (error) {
    console.error("❌ Callback Processing Error:", error);
    res.redirect(`https://refermegroup.com/payment-status?status=error`);
  }
};

/**
 * Logic 3: Hash Generation for Payment Start
 */
router.post("/payu", (req, res) => {
  try {
    const { name, email, phone, amount, productinfo, txnid } = req.body;
    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      return res
        .status(500)
        .json({ message: "Server Configuration Error: Keys Missing" });
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
    console.error("❌ Hash Generation Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Setup Success and Failure routes for PayU POST response
router.post("/success", handlePayUCallback);
router.post("/fail", handlePayUCallback);

export default router;
