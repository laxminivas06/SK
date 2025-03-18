import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const deals = [
  
  
  {
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1742269514/19_march_sk_grfpv3.png",
    title: "Breakfast 19th March 2025",
    description: "🥄 Sabudana Khichdi Lovers! Enjoy our Special Sabudana Khichdi at just $5.99 AUD! 🌿✨ Light, flavorful, and perfectly spiced for a delicious & healthy treat! 🥥🥜"
},
{
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1742269376/6_dm7oy5.png",
    title: "Lunch 19th March 2025",
    description: "🍛 Aloo Tomato Curry & White Rice! A comforting and rich combo at just $10.99 AUD! 🍅🥔 Served hot, fresh, and bursting with authentic flavors! 😍🔥"
},{
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1742178847/4_xuunhs.png",
    title: "Breakfast 18th March 2025",
    description: "🥢 Idli Lovers! Get our Special Idli (4 pieces) at an unbeatable price of $5.99 AUD! Soft, fluffy, and served fresh! 🥥🍛"
},
{
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1742178846/3_dnxi19.png",
    title: "Lunch 18th March 2025",
    description: "Special Offer! 🍛 Enjoy the delicious Bagara with Paneer Butter Masala for just Rs. 11.99! Don’t miss out! 🎉🔥"
},
  {
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1742067022/2_n6agoh.png",
    title: "Breakfast 17th March 2025",
    description: "🥢 Idli Lovers! Get our Special Idli (4 pieces) at an unbeatable price of $5.99 AUD! Soft, fluffy, and served fresh! 🥥🍛"
},
{
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1742067021/1_xqfvgg.png",
    title: "Lunch 17th March 2025",
    description: "🍛 Special Offer! Enjoy delicious Rice with Gutti Vankaya Curry for just $10.99! Don’t miss this authentic South Indian delight! 🌿✨"
},
  {
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1741831336/sk_catering_available_Document_A4_gixgin.png",
    title: "Services We Offer",
    description: "We offer a wide range of catering services for all your special occasions. 🎉🍽️",
  
  },
  {
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1741767746/Sri_Karimalesh_Catering_Comming_Soon_om4gri.png",
    title: "Ugadhi Special Offer",
    description: "Get  Special Discount on our  Catering package!",
  },
  
  {
    video: "https://res.cloudinary.com/dt3effj06/video/upload/v1741797387/SK_13_march_2025_New_a5ivkf.mp4",
    title: " Lunch 13 March 2025",
    description: "Get  Mint Coriander rice with compliment of Delicious Semiya Payasam at Just $9.99 AUD!",
  },
  {
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1741766213/1_xopbvs.png",
    title: "Breakfast (Meal Box)",
    description: " A wholesome morning meal packed with traditional flavors to start your day right. 🍽️🌅",
  },
  {
    image: "https://res.cloudinary.com/dt3effj06/image/upload/v1741766159/SK_Daily_Box_hpsxzz.png",
    title: "Lunch (Meal Box)",
    description: "A satisfying and balanced meal with a variety of delicious dishes for a perfect midday feast. 🍛🌞",
  },
];

const TodaysDeals = () => {
  const [selectedMedia, setSelectedMedia] = useState(null); // State for the selected media (image or video)

  const openMediaModal = (media) => {
    setSelectedMedia(media);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4 text-center">Today's Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map((deal, index) => (
          <motion.div
            key={index}
            className="border p-4 rounded shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {deal.video ? (
              <video
                controls
                className="w-full h-48 object-cover rounded mb-4 cursor-pointer"
                onClick={() => openMediaModal(deal.video)} // Open modal on video click
              >
                <source src={deal.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover rounded mb-4 cursor-pointer"
                onClick={() => openMediaModal(deal.image)} // Open modal on image click
              />
            )}
            <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
            <p className="mb-2">{deal.description}</p>
            <WhatsAppButton text={`Order ${deal.title}`} />
          </motion.div>
        ))}
      </div>

      {/* Modal for viewing full media (image or video) */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-3xl max-h-full overflow-auto">
            {selectedMedia.endsWith('.mp4') ? (
              <video controls className="max-w-full max-h-screen">
                <source src={selectedMedia} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia} alt="Full view" className="max-w-full max-h-screen" />
            )}
            <button
              onClick={closeMediaModal}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodaysDeals;