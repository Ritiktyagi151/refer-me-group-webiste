import nodemailer from "nodemailer";

const sendEmails = async (status, data) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 16 digit app password
      },
    });

    // 1. User Email Template
    const userMail = {
      from: '"Refer Me Group" <no-reply@refermegroup.com>',
      to: data.email,
      subject: status === "success" ? "Registration Confirmed!" : "Payment Failed",
      html: `<h3>Hi ${data.firstname},</h3>
             <p>${status === "success" ? "Aapka registration safal raha!" : "Hume khed hai ki aapka payment fail ho gaya."}</p>
             <p><b>Txn ID:</b> ${data.txnid}</p>
             <p><b>Amount:</b> ₹${data.amount}</p>`
    };

    // 2. Owner Email Template
    const ownerMail = {
      from: '"Payment Alert" <system@refermegroup.com>',
      to: "owner@refermegroup.com", // Owner ki email yahan dalein
      subject: `New Payment: ${status.toUpperCase()}`,
      html: `<h3>New Enrollment Alert</h3>
             <p><b>Customer Name:</b> ${data.firstname}</p>
             <p><b>Email:</b> ${data.email}</p>
             <p><b>Phone:</b> ${data.phone}</p>
             <p><b>Status:</b> ${status}</p>
             <p><b>Amount:</b> ₹${data.amount}</p>`
    };

    await transporter.sendMail(userMail);
    await transporter.sendMail(ownerMail);
  } catch (err) {
    console.error("Email Error:", err);
  }
};

export const handlePayUCallback = async (req, res) => {
  const paymentData = req.body; // PayU saara data POST request mein bhejta hai
  const status = paymentData.status === "success" ? "success" : "fail";

  // Email trigger karein
  await sendEmails(status, paymentData);

  // Browser ko frontend par redirect karein taaki "Cannot POST" error na dikhe
  const frontendUrl = `https://refermegroup.com/payment-status?status=${status}&name=${paymentData.firstname}`;
  res.redirect(frontendUrl);
};