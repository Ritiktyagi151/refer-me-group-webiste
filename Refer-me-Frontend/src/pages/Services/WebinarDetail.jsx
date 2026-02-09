import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { webinarApi } from "../../api/webinarApi";
import { paymentApi } from "../../api/paymentApi";
import { motion, AnimatePresence } from "framer-motion";

// Sample Country Data (Aap isme aur add kar sakte hain)
const allCountries = [
  { code: "+93", country: "Afghanistan", iso: "AF" },
  { code: "+355", country: "Albania", iso: "AL" },
  { code: "+213", country: "Algeria", iso: "DZ" },
  { code: "+376", country: "Andorra", iso: "AD" },
  { code: "+244", country: "Angola", iso: "AO" },
  { code: "+54", country: "Argentina", iso: "AR" },
  { code: "+374", country: "Armenia", iso: "AM" },
  { code: "+61", country: "Australia", iso: "AU" },
  { code: "+43", country: "Austria", iso: "AT" },
  { code: "+994", country: "Azerbaijan", iso: "AZ" },

  { code: "+973", country: "Bahrain", iso: "BH" },
  { code: "+880", country: "Bangladesh", iso: "BD" },
  { code: "+375", country: "Belarus", iso: "BY" },
  { code: "+32", country: "Belgium", iso: "BE" },
  { code: "+975", country: "Bhutan", iso: "BT" },
  { code: "+591", country: "Bolivia", iso: "BO" },
  { code: "+387", country: "Bosnia and Herzegovina", iso: "BA" },
  { code: "+55", country: "Brazil", iso: "BR" },
  { code: "+673", country: "Brunei", iso: "BN" },
  { code: "+359", country: "Bulgaria", iso: "BG" },

  { code: "+1", country: "Canada", iso: "CA" },
  { code: "+86", country: "China", iso: "CN" },
  { code: "+57", country: "Colombia", iso: "CO" },
  { code: "+385", country: "Croatia", iso: "HR" },
  { code: "+53", country: "Cuba", iso: "CU" },
  { code: "+357", country: "Cyprus", iso: "CY" },
  { code: "+420", country: "Czech Republic", iso: "CZ" },

  { code: "+45", country: "Denmark", iso: "DK" },

  { code: "+20", country: "Egypt", iso: "EG" },
  { code: "+372", country: "Estonia", iso: "EE" },

  { code: "+358", country: "Finland", iso: "FI" },
  { code: "+33", country: "France", iso: "FR" },

  { code: "+995", country: "Georgia", iso: "GE" },
  { code: "+49", country: "Germany", iso: "DE" },
  { code: "+30", country: "Greece", iso: "GR" },

  { code: "+852", country: "Hong Kong", iso: "HK" },
  { code: "+36", country: "Hungary", iso: "HU" },

  { code: "+91", country: "India", iso: "IN" },
  { code: "+62", country: "Indonesia", iso: "ID" },
  { code: "+98", country: "Iran", iso: "IR" },
  { code: "+964", country: "Iraq", iso: "IQ" },
  { code: "+353", country: "Ireland", iso: "IE" },
  { code: "+972", country: "Israel", iso: "IL" },
  { code: "+39", country: "Italy", iso: "IT" },

  { code: "+81", country: "Japan", iso: "JP" },
  { code: "+962", country: "Jordan", iso: "JO" },

  { code: "+254", country: "Kenya", iso: "KE" },
  { code: "+965", country: "Kuwait", iso: "KW" },

  { code: "+961", country: "Lebanon", iso: "LB" },
  { code: "+370", country: "Lithuania", iso: "LT" },
  { code: "+352", country: "Luxembourg", iso: "LU" },

  { code: "+60", country: "Malaysia", iso: "MY" },
  { code: "+960", country: "Maldives", iso: "MV" },
  { code: "+52", country: "Mexico", iso: "MX" },

  { code: "+977", country: "Nepal", iso: "NP" },
  { code: "+31", country: "Netherlands", iso: "NL" },
  { code: "+64", country: "New Zealand", iso: "NZ" },
  { code: "+234", country: "Nigeria", iso: "NG" },
  { code: "+47", country: "Norway", iso: "NO" },

  { code: "+968", country: "Oman", iso: "OM" },

  { code: "+92", country: "Pakistan", iso: "PK" },
  { code: "+63", country: "Philippines", iso: "PH" },
  { code: "+48", country: "Poland", iso: "PL" },
  { code: "+351", country: "Portugal", iso: "PT" },

  { code: "+974", country: "Qatar", iso: "QA" },

  { code: "+40", country: "Romania", iso: "RO" },
  { code: "+7", country: "Russia", iso: "RU" },

  { code: "+966", country: "Saudi Arabia", iso: "SA" },
  { code: "+65", country: "Singapore", iso: "SG" },
  { code: "+421", country: "Slovakia", iso: "SK" },
  { code: "+386", country: "Slovenia", iso: "SI" },
  { code: "+27", country: "South Africa", iso: "ZA" },
  { code: "+34", country: "Spain", iso: "ES" },
  { code: "+94", country: "Sri Lanka", iso: "LK" },
  { code: "+46", country: "Sweden", iso: "SE" },
  { code: "+41", country: "Switzerland", iso: "CH" },

  { code: "+886", country: "Taiwan", iso: "TW" },
  { code: "+66", country: "Thailand", iso: "TH" },
  { code: "+90", country: "Turkey", iso: "TR" },

  { code: "+971", country: "United Arab Emirates", iso: "AE" },
  { code: "+44", country: "United Kingdom", iso: "GB" },
  { code: "+1", country: "United States", iso: "US" },
  { code: "+380", country: "Ukraine", iso: "UA" },

  { code: "+84", country: "Vietnam", iso: "VN" },
];

const WebinarDetail = () => {
  const { id } = useParams();
  const [webinar, setWebinar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Country Selector States
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(allCountries[0]); // Default India

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await webinarApi.getWebinarById(id);
        setWebinar(res.data);
      } catch (err) {
        setError("Failed to load webinar details.");
      } finally {
        setLoading(false);
      }
    };
    fetchWebinar();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const filteredCountries = allCountries.filter(
    (c) =>
      c.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.code.includes(searchTerm),
  );

  const validateForm = () => {
    const { name, email, phone } = formData;
    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return false;
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setError("Please enter a valid phone number (7-15 digits).");
      return false;
    }
    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setError("");
    setSubmitting(true);

    try {
      const fullPhoneNumber = `${selectedCountry.code}${formData.phone.replace(/\D/g, "")}`;
      const txnid = `txn_${Date.now()}`;

      const res = await paymentApi.createPayment({
        ...formData,
        phone: fullPhoneNumber,
        amount: webinar.price,
        productinfo: webinar.title,
        txnid,
      });

      const { actionUrl, params } = res || {};
      if (!actionUrl || !params) throw new Error("Payment gateway error.");

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
      setError(err.message || "Payment initiation failed.");
      setSubmitting(false);
    }
  };

  if (loading)
    return <div className="p-10 text-center font-sans">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans bg-gray-50 min-h-screen">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {webinar?.title}
        </h1>
        <p className="text-xl text-blue-600 font-semibold italic">
          with {webinar?.speaker}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info Section */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Webinar Details
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {webinar?.description}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
            <p className="text-blue-100 font-medium uppercase tracking-wider text-sm mb-2">
              Registration Fee
            </p>
            <p className="text-5xl font-black">₹{webinar?.price}</p>
          </div>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Join the Session
          </h3>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm border border-red-100 font-medium">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div className="relative" ref={dropdownRef}>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="flex gap-2">
                {/* Searchable Custom Select */}
                <div className="relative w-32">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-3 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm font-bold cursor-pointer flex justify-between items-center hover:border-blue-400 transition-all"
                  >
                    <span>{selectedCountry.code}</span>
                    <span className="text-[10px]">▼</span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <input
                          type="text"
                          placeholder="Search country..."
                          className="w-full p-3 border-b border-gray-100 outline-none text-sm sticky top-0 bg-white"
                          onChange={(e) => setSearchTerm(e.target.value)}
                          autoFocus
                        />
                        <div className="max-h-60 overflow-y-auto">
                          {filteredCountries.map((c) => (
                            <div
                              key={c.iso + c.code}
                              className="p-3 hover:bg-blue-50 cursor-pointer flex justify-between items-center border-b border-gray-50"
                              onClick={() => {
                                setSelectedCountry(c);
                                setIsOpen(false);
                                setSearchTerm("");
                              }}
                            >
                              <span className="text-sm text-gray-700 font-medium">
                                {c.country}
                              </span>
                              <span className="text-sm text-blue-600 font-bold">
                                {c.code}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="12345 67890"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-4 text-white font-black rounded-2xl shadow-lg transition-all transform active:scale-95 ${submitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200"}`}
            >
              {submitting
                ? "Processing..."
                : `Register & Pay ₹${webinar?.price}`}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default WebinarDetail;
