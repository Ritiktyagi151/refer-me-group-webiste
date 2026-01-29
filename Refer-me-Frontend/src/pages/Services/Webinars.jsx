import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { webinarApi } from "../../api/webinarApi";
import { FiCalendar, FiUsers, FiClock, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import SEOManagement from "../../components/seo/SEOManagement";


const Webinars = () => {
  const navigate = useNavigate();
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        setLoading(true);
        const res = await webinarApi.getAllWebinars();
        setWebinars(res.data || []);
      } catch (err) {
        setError("Failed to load webinars.");
      } finally {
        setLoading(false);
      }
    };
    fetchWebinars();
  }, []);

  const filtered = webinars.filter(
    (w) => w?.title && w.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

  return (
    <>
      {/* SEO Management Integration */}
      <SEOManagement
        title="Professional Webinars | Refer Me Group"
        description="Join expert-led webinars to upskill, gain insights, and grow your professional career."
        keywords="professional webinars, online learning, career webinars"
        canonical="/services/webinars"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Upcoming Webinars</h1>

        {/* Search Bar */}
        <div className="mb-6 flex items-center gap-2">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search webinars..."
            className="w-full p-3 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Webinars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((webinar) => (
              <motion.div
                key={webinar._id}
                whileHover={{ y: -5 }}
                className="bg-white p-4 rounded-xl shadow cursor-pointer border border-gray-100"
                onClick={() => navigate(`/webinars/${webinar._id}`)}
              >
                <h2 className="text-xl font-semibold mb-2">{webinar.title}</h2>
                <p className="text-gray-600 mb-2">{webinar.speaker}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FiCalendar /> {new Date(webinar.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock /> {webinar.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiUsers /> {webinar.registered || 0} Registered
                  </span>
                </div>
                <p className="mt-2 text-blue-600 font-semibold">
                  ₹{webinar.price || 0}
                </p>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No webinars found matching your search.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Webinars;
