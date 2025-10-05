import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post("/payu", (req, res) => {
  try {
    const { name, email, phone, amount, productinfo, txnid } = req.body;

    // ✅ 1. Validate required fields
    if (!name || !email || !phone || !amount || !productinfo || !txnid) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ 2. Load keys from environment variables
    const key = process.env.PAYU_KEY; // Example: gtKFFx
    const salt = process.env.PAYU_SALT; // Example: eCwWELxi

    if (!key || !salt) {
      return res.status(500).json({ message: "Payment keys not configured" });
    }

    // ✅ 3. Generate hash (PayU requirement)
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // ✅ 4. Build params to send to frontend
    const params = {
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
    };

    // ✅ 5. Respond with PayU gateway info
    res.status(200).json({
      success: true,
      message: "Payment parameters generated successfully",
      actionUrl:
        process.env.PAYU_MODE === "test"
          ? "https://test.payu.in/_payment"
          : "https://secure.payu.in/_payment",
      params,
    });
  } catch (error) {
    console.error("❌ Payment route error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default router;
