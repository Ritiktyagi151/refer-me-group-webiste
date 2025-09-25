import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { webinarApi } from "../../api/webinarApi";
import { paymentApi } from "../../api/paymentApi"; // ✅ use separate payment API
import { motion } from "framer-motion";

const WebinarDetail = () => {
  const { id } = useParams();
  const [webinar, setWebinar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Fetch webinar details
  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await webinarApi.getWebinarById(id);
        setWebinar(res.data);
      } catch (err) {
        console.error("Webinar fetch error:", err);
        setError("Failed to load webinar.");
      } finally {
        setLoading(false);
      }
    };
    fetchWebinar();
  }, [id]);

  // Input change handler
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Payment handler
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const txnid = `txn_${Date.now()}`;
      const res = await paymentApi.createPayment({
        ...formData,
        amount: webinar.price,
        productinfo: webinar.title,
        txnid,
      });

      console.log("Payment API Response:", res);

      const { actionUrl, params } = res || {};

      if (!actionUrl || !params) {
        setError("Invalid payment response from server.");
        return;
      }

      // Create form and submit to PayU
      const form = document.createElement("form");
      form.method = "POST";
      form.action = actionUrl;

      Object.keys(params).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = params[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error("Payment error:", err);
      setError("Payment failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error && !webinar) return <div className="p-6 text-red-600">{error}</div>;
  if (!webinar) return <div className="p-6">Webinar not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{webinar.title}</h1>
      <p className="text-gray-600 mb-4">{webinar.speaker}</p>
      <p className="mb-4">{webinar.description}</p>
      <p className="font-semibold text-blue-600 mb-6">
        Price: ₹{webinar.price}
      </p>

      {/* Registration Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Register & Pay
        </h3>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handlePayment} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name *"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email *"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone *"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company (Optional)"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition"
          >
            {submitting ? "Processing..." : "Register & Pay via PayU"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default WebinarDetail;
