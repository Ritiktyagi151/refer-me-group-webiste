import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/footer");
        const data = await res.json();
        setFooter(data);
      } catch (err) {
        console.error("Failed to fetch footer:", err);
      }
    };
    fetchFooter();
  }, []);

  if (!footer) return null;

  const renderList = (items) =>
    items?.map((item, idx) => (
      <li key={idx}>
        <Link
          to={item.path}
          className="group flex items-center gap-2 text-gray-200 hover:text-white transition duration-300"
        >
          <HiOutlineChevronDoubleRight className="text-indigo-400 group-hover:text-white" />
          <span className="text-sm md:text-base">{item.text}</span>
        </Link>
      </li>
    ));

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-200 border-t-4 border-orange-500">
      <div className="max-w-full mx-auto px-12 py-8 grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Logo & Description */}
        <div>
          <Link to="/">
            <img
              src={footer.logo?.src}
              alt={footer.logo?.alt}
              style={{ height: footer.logo?.size || "36px" }}
            />
          </Link>
          <p className="text-sm mt-3">{footer.description}</p>
          <div className="flex space-x-4 mt-4">
            {footer.socialLinks?.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">{renderList(footer.quickLinks)}</ul>
        </div>

        {/* Courses */}
        <div className="md:col-span-3">
          <h3 className="text-white font-semibold mb-4 text-lg">Top Courses</h3>
          <div className="grid grid-cols-3 gap-4">
            <ul className="space-y-2">
              {renderList(footer.courses?.slice(0, 7))}
            </ul>
            <ul className="space-y-2">
              {renderList(footer.courses?.slice(7, 14))}
            </ul>
            <ul className="space-y-2">
              {renderList(footer.courses?.slice(14))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-indigo-400 mt-1" />
              <span>{footer.contactInfo?.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-indigo-400" />
              <a href={`mailto:${footer.contactInfo?.email}`}>
                {footer.contactInfo?.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-indigo-400" />
              <a href={`tel:${footer.contactInfo?.phone}`}>
                {footer.contactInfo?.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-700 py-4 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-4">
        <p>{footer.copyright}</p>
        <p>
          {footer.developer?.text}{" "}
          <a
            href={footer.developer?.link}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:underline"
          >
            {footer.developer?.name}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
