import React, { useState, useEffect, useRef } from "react"; 
import { FaArrowDown } from "react-icons/fa"; 
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const quotes = [
  {
    telugu: "అన్నం పరబ్రహ్మ స్వరూపం",
    hindi: "अन्न ही परमब्रह्म का स्वरूप है",
    english: "Food is the embodiment of the divine",
  },
  {
    telugu: "స్వచ్ఛమైన ఆహారం - ఆరోగ్యకరమైన జీవితం!",
    hindi: "शुद्ध भोजन - स्वस्थ जीवन!",
    english: "Pure food leads to a healthy life!",
  },
  {
    telugu: "ఆత్మీయతతో వడ్డించే విందు",
    hindi: "प्रेम से परोसा गया भोजन",
    english: "A feast served with love",
  },
];

const backgroundImages = [
  "https://www.shutterstock.com/image-photo/andhra-special-vegetarian-tasty-meals-600nw-1811725393.jpg",
  "https://b.zmtcdn.com/data/pictures/1/20149871/c51138261fc0d0627f03a5cd27e3ac25.jpg?fit=around%7C960:500&crop=960:500;*,*",
  "https://cdn0.weddingwire.in/article/4333/3_2/960/jpg/123334-maharaja-bhog-2.jpeg",
  "https://savithrammas.com/site/image/cache/catalog/A-Guide-to-Savithrammas-Exotic-Pickles-and-Spices-1080x540.jpg",
  "https://www.shutterstock.com/image-photo/andhra-pradesh-traditional-thali-india-600nw-2172140155.jpg",
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    const backgroundTimer = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); 

    return () => {
      clearInterval(quoteTimer);
      clearInterval(backgroundTimer);
    };
  }, []);

  const handleViewMoreClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBackground]})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center justify-center h-full">
        <img
          src="https://res.cloudinary.com/dt3effj06/image/upload/v1741682845/hv_vcp39h.svg"
          alt="Sri Karimalesh Caterings Logo"
          className="w-3/4 md:w-1/2 h-auto mx-auto mb-6 mt-4" 
        />

        <div className="space-y-4">
          <p className="text-xl md:text-3xl font-semibold text-orange-300 font-serif shadow-lg">
            {quotes[currentQuote].telugu}
          </p>
          <p className="text-lg md:text-2xl italic text-yellow-300 font-sans shadow-lg">
            {quotes[currentQuote].english}
          </p>
          <p className="text-xl md:text-3xl text-orange-300 font-serif shadow-lg">
            {quotes[currentQuote].hindi}
          </p>
        </div>

        <div className="mt-10">
          <button
            onClick={handleViewMoreClick}
            className="flex items-center bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-200 transition duration-300 mb-6 transform hover:scale-105"
          >
            <span>View More</span>
            <FaArrowDown className="ml-2" />
          </button>
        </div>

        {/* New Container for Today's Deals without Animation */}
        <div className="mt-10 bg-transparent-500 p-4 rounded-lg shadow-lg">
          <span className="text-white text-2xl font-bold ">🔥 Today's Deals are live! Check them out!</span>
          <div className="mt-4">
            <Link
              to="/todays-deals" // Link to the Today's Deals page
              className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-500 transition duration-300"
            >
              Today's Deals
            </Link>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="bg-white py-10">
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-orange-900 text-white py-3">
        <div className="whitespace-nowrap animate-slide">
          <p className="text-lg font-medium">
            📢 For any services, please inform us at least <strong>3 days in advance</strong>!  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;