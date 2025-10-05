// routes/payment.js
import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post("/payu", (req, res) => {
  const { name, email, phone, amount, productinfo, txnid } = req.body;

  // ✅ Validate fields
  if (!name || !email || !phone || !amount || !productinfo || !txnid) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // ✅ Use environment variables for security
  const key = process.env.PAYU_KEY; // Example: gtKFFx
  const salt = process.env.PAYU_SALT; // Example: eCwWELxi

  if (!key || !salt) {
    return res.status(500).json({ message: "Payment keys not configured" });
  }

  // ✅ Generate PayU hash
  const hashString = `${key}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${salt}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  // ✅ Build params
  const params = {
    key,
    txnid,
    amount,
    productinfo,
    firstname: name,
    email,
    phone,
    surl: "https://refermegroup.com/api/payment/success",
    furl: "https://refermegroup.com/api/payment/fail",
    hash,
    service_provider: "payu_paisa",
  };

  // ✅ Send PayU payment info
  res.json({
    actionUrl: "https://secure.payu.in/_payment", // LIVE URL (for test use https://test.payu.in/_payment)
    params,
  });
});

export default router;
