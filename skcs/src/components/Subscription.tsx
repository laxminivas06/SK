import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faClock, faCalendarAlt, faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use

const Subscription = () => {
  const handleWhatsAppMessage = (packageType) => {
    switch (packageType) {
      case "Weekly":
        return "I'd like to subscribe to the Weekly Package for $29.99 (Tiffin) or $41.99/$59.99 (Lunch).";
      case "Monthly":
        return "I'd like to subscribe to the Monthly Package for $114.99 (Tiffin) or $165.99/$249.99 (Lunch).";
      case "Quarterly":
        return "I'd like to subscribe to the Quarterly Package for $323.99 (Tiffin) or $389.99/$599.99 (Lunch).";
      default:
        return "";
    }
  };

  const handleLearnMore = () => {
    // Replace with your internal page route
    window.location.href = "/meal-box"; // Example: Opens a page within the website
  };

  return (
    <div className="container mx-auto p-4 md:p-8 mt-10 md:mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Subscription Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Weekly Package */}
        <motion.div
          className="border p-6 md:p-10 rounded-2xl shadow-2xl bg-blue-100 hover:bg-blue-200 transition duration-300 h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Weekly Plan</h2>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUtensils} className="w-10 h-10 mr-2 text-blue-600" />
            <p className="text-gray-700 text-lg">Perfect for fresh meals from <span className="font-bold">Monday to Friday (5 days)</span>.</p>
          </div>
          <p className="text-red-600 font-semibold text-lg mb-2">Note: Weekly plan is available only for 5 days (Monday to Friday).</p>
          <ul className="list-none mb-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
              <span className="text-lg">Breakfast: $29.99 AUD</span>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-600 mr-2" />
              <span className="text-lg">Lunch (500ml): $41.99 AUD</span>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
              <span className="text-lg">Lunch (750ml): $59.99 AUD</span>
            </li>
          </ul>
          <button
            onClick={handleLearnMore}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-700 transition duration-300 text-lg"
          >
            View Items Included
          </button>
          <WhatsAppButton
            text="Checkout Weekly Package"
            message={handleWhatsAppMessage("Weekly")}
          />
        </motion.div>

        {/* Monthly Package - Highlighted as Popular */}
        <motion.div
          className="border p-6 md:p-10 rounded-2xl shadow-2xl bg-green-100 hover:bg-green-200 transition duration-300 h-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-bl-2xl flex items-center">
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <span className="font-bold text-lg">Popular</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Monthly Plan</h2>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="w-10 h-10 mr-2 text-green-600" />
            <p className="text-gray-700 text-lg">Ideal for consistent meal planning with <span className="font-bold text-green-700">20 days + 2 FREE days</span>.</p>
          </div>
          <p className="text-red-600 font-semibold text-lg mb-2">Note: Monthly plan is available only for 5 days (Monday to Friday).</p>
          <ul className="list-none mb-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mr-2" />
              <span className="text-lg">Breakfast: $114.99 AUD</span>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 mr-2" />
              <span className="text-lg">Lunch (500ml): $165.99 AUD </span>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-600 mr-2" />
              <span className="text-lg">Lunch (750ml): $249.99 AUD </span>
            </li>
          </ul>
          <button
            onClick={handleLearnMore}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-green-700 transition duration-300 text-lg"
          >
           View Items Included
          </button>
          <WhatsAppButton
            text="Checkout Monthly Package"
            message={handleWhatsAppMessage("Monthly")}
          />
        </motion.div>

        {/* Quarterly Package */}
        <motion.div
          className="border p-6 md:p-10 rounded-2xl shadow-2xl bg-yellow-100 hover:bg-yellow-200 transition duration-300 h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Quarterly Plan</h2>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faClock} className="w-10 h-10 mr-2 text-yellow-600" />
            <p className="text-gray-700 text-lg">Great for long-term savings with <span className="font-bold text-yellow-700">60 days + 5 FREE days</span>.</p>
          </div>
          <p className="text-red-600 font-semibold text-lg mb-2">Note: Quarterly plan is available only for 5 days (Monday to Friday).</p>
          <ul className="list-none mb-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
              <span className="text-lg">Breakfast: $323.99 AUD</span>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" />
              <span className="text-lg">Lunch (500ml): $389.99 AUD</span>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-600 mr-2" />
              <span className="text-lg">Lunch (750ml): $599.99 AUD</span>
            </li>
          </ul>
          <button
            onClick={handleLearnMore}
            className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-yellow-700 transition duration-300 text-lg"
          >
           View Items Included
          </button>
          <WhatsAppButton
            text="Checkout Quarterly Package"
            message={handleWhatsAppMessage("Quarterly")}
          />
        </motion.div>
      </div>

      {/* New Container for Healthy Food vs Junk Food */}
      <div className="mt-8 md:mt-12 p-4 md:p-8 bg-gray-100 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Healthy Food vs. Junk Food</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Healthy Food Section */}
          <div className="flex flex-col items-center">
            <img src="https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg" alt="Healthy Food" className="w-full h-auto mb-4 rounded-lg" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Healthy Food</h2>
            <p className="text-lg">Packed with nutrients, healthy foods support overall well-being.</p>
          </div>

          {/* Junk Food Section */}
          <div className="flex flex-col items-center">
            <img src="https://t4.ftcdn.net/jpg/03/14/36/33/360_F_314363347_jiMEfkFWHqJ9J5r3IjihtTlvyf7ECYpl.jpg" alt="Junk Food" className="w-full h-auto mb-4 rounded-lg" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Junk Food</h2>
            <p className="text-lg">High in calories and low in nutrients, junk food can lead to health issues.</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Watch and Learn</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/xk43j2A_BNU"
              title="Healthy Eating vs Junk Food"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Negatives of Junk Food */}
        <div className="mt-8 md:mt-12 p-4 md:p-8 bg-red-100 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Negatives of Junk Food</h2>
          <ul className ="list-disc list-inside mb-4">
            <li className="text-lg mb-2">Increases the risk of obesity and related diseases.</li>
            <li className="text-lg mb-2">Can lead to heart disease due to high levels of trans fats.</li>
            <li className="text-lg mb-2">Contributes to diabetes and insulin resistance.</li>
            <li className="text-lg mb-2">May cause digestive issues due to low fiber content.</li>
            <li className="text-lg mb-2">Often contains high levels of sugar, leading to energy crashes.</li>
          </ul>
        </div>

        {/* Quotes Section */}
        <div className="mt-8 md:mt-12 p-4 md:p-8 bg-gray-200 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Quotes on Healthy Eating</h2>
          <blockquote className="text-lg italic mb-2">"ఆహారం మన ఆరోగ్యానికి మూలం." (Food is the source of our health.)</blockquote>
          <blockquote className="text-lg italic mb-2">"स्वस्थ भोजन से ही स्वस्थ जीवन संभव है।" (A healthy life is possible only with healthy food.)</blockquote>
          <blockquote className="text-lg italic mb-2">"జంక్ ఫుడ్ తినడం అనేది ఆరోగ్యానికి హానికరం." (Eating junk food is harmful to health.)</blockquote>
          <blockquote className="text-lg italic mb-2">"सही आहार से ही सही जीवन संभव है।" (A proper diet leads to a proper life.)</blockquote>
        </div>

        {/* Call to Action */}
        <div className="mt-8 md:mt-12 p-4 md:p-8 bg-blue-100 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Sri Karimalesh Caterers</h2>
          <p className="text-lg mb-4">Enjoy delicious and healthy meals delivered to your doorstep.</p>
          <WhatsAppButton
            text="Subscribe Now"
            message="I'd like to subscribe to Sri Karimalesh Caterers for healthy meal options."
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;