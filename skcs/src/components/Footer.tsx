import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook,FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">About Us</h3>
          <p className="text-gray-600">
            We specialize in Indian catering, offering authentic South Indian food with a touch of tradition. Explore our meal boxes, custom orders, and special packages!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link to="/mealbox" className="hover:text-yellow-500 transition">Daily Box</Link></li>
            <li><Link to="/subscription" className="hover:text-yellow-500 transition">Subscription</Link></li>
            <li><Link to="/trip-packages" className="hover:text-yellow-500 transition">Trip Packages</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-500 transition">Menu</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p className="text-gray-600">📍 Sydney, Australia</p>
          <p className="text-gray-600">📞 +61 450 056 387</p>
          <p className="text-gray-600">✉️ srikarimaleshcaterers@gmail.com</p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://wa.me/61450056387" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 text-2xl hover:text-green-600 transition" />
            </a>
            <a href="https://www.instagram.com/srikarimaleshcaterers/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-2xl hover:text-pink-600 transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573144006273" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-500 text-2xl hover:text-blue-600 transition" />
            </a>
             <a href="mailto:info@srikarimaleshcaterers.com" className="text-blue-500 hover:underline">
                      <FaEnvelope className="text-blue-500 text-2xl hover:text-blue-600 transition" />
                    </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-8 border-t border-gray-300 pt-4 flex flex-col items-center">
        <p>This Website was Developed by</p>
        <div className="flex flex-row space-x-4 mt-2">
          <a href="https://nivaseditz.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dt3effj06/image/upload/v1740503970/NE.svg"
              className="h-20"
              alt="Nivas Editz"
            />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-2">Tap on icon to view Website</p> {/* Added message */}
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-600 mt-4">
        &copy; {new Date().getFullYear()} Spiritual Catering. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;