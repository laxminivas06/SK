import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { motion } from "framer-motion";

const deals = [
  
];

const TodaysDeals = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

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
                onClick={() => openMediaModal(deal.video)}
              >
                <source src={deal.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover rounded mb-4 cursor-pointer"
                onClick={() => openMediaModal(deal.image)}
              />
            )}
            <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
            <p className="mb-2">{deal.description}</p>
            <WhatsAppButton message={deal.whatsappMessage} />
          </motion.div>
        ))}
      </div>

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