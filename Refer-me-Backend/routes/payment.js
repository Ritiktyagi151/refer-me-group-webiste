// routes/payment.js
import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post("/payu", (req, res) => {
  const { name, email, phone, amount, productinfo, txnid } = req.body;

  if (!name || !email || !phone || !amount || !productinfo || !txnid) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // ⚡ Test Key & Salt (use .env me)
  const key = process.env.PAYU_KEY; // e.g. gtKFFx
  const salt = process.env.PAYU_SALT; // e.g. eCwWELxi

  // ✅ Generate hash string required by PayU
  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${salt}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  // ✅ PayU test form params
  const params = {
    key,
    txnid,
    amount,
    productinfo,
    firstname: name,
    email,
    phone,
    surl: "http://localhost:5000/api/payment/success", // Local success URL (test ke liye)
    furl: "http://localhost:5000/api/payment/fail", // Local failure URL (test ke liye)
    hash,
    service_provider: "payu_paisa",
  };

  res.json({
    actionUrl: "https://secure.payu.in/_payment", // ✅ Test PayU URL
    params,
  });
});

export default router;
