import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ContainerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="relative bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Catering Services Container */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Catering Services</h3>
            <p className="text-sm text-gray-600 mb-4">We provide a variety of catering services for all occasions.</p>
            <Link
              to="/menu"
              aria-label="View Catering Services"
              className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition duration-300"
            >
              View Services
            </Link>
          </div>

          {/* Daily Box Container */}
<div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 relative">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Box</h3>
  <p className="text-sm text-gray-600 mb-4">Enjoy our daily meal boxes for <strong>breakfast</strong> and <strong>lunch</strong>.</p>

 {/* Important Message */}
<div className="flex items-center justify-center bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-4">
  <span className="text-red-700 text-lg mr-2">⚠️</span>
  <p className="text-sm font-semibold">
    Our <strong>Daily Box</strong> is updated <strong>every day</strong> with customized <strong>breakfast</strong> and <strong>lunch</strong> options! 🍽️  
    Tap on <strong>Lunch</strong> or <strong>Breakfast</strong> to explore the delicious items available.  
    For our latest daily updates, tap on <strong>Today's Deals</strong>.
  </p>
</div>

<div className="space-y-2">
  <Link
    to="/meal-box"
    aria-label="View Lunch Options"
    className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 mr-4"
  >
    Lunch
  </Link>
  <Link
    to="/meal-box"
    aria-label="View Breakfast Options"
    className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300"
  >
    Breakfast
  </Link>
</div>

{/* Today's Deals Button */}
<div className="mt-8"> {/* Add margin-top for spacing */}
  <Link
    to="/todays-deals"
    aria-label="View Today's Deals"
    className="bg-red-600 text-white px-3 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300"
  >
    Today's Deals
  </Link>
</div>
</div>

         

          {/* Trip Packages Container */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Trip Packages</h3>
            <p className="text-sm text-gray-600 mb-4">Explore our exciting trip packages for a memorable experience.</p>
            <Link
              to="/trip-packages"
              aria-label="Explore Trip Packages"
              className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
            >
              Explore Packages
            </Link>
          </div>
          {/* Subscription Packages Container */}
          {/* Subscription Packages Container */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Subscription</h3>
            <p className="text-sm text-gray-600 mb-4">Discover our thrilling subscription for an unforgettable experience!</p>
            <Link
              to="/subscription"
              aria-label="Explore  Subscription"
              className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
            >
              Explore Subscriptions
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContainerPage;