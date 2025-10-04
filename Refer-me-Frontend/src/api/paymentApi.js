import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://72.60.101.229:5000";

export const paymentApi = {
  // ✅ Create PayU payment
  createPayment: async (data) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/payment/payu`, data);
      return res.data;
    } catch (err) {
      console.error("Payment API Error:", err);
      throw err;
    }
  },
};
