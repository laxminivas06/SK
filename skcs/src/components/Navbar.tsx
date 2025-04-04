import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [cartNotification, setCartNotification] = useState("");

  // Function to update cart count & notification
  const updateCart = (action = "") => {
    const cart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
    setCartCount(cart.length);
    if (action === "add") {
      setCartNotification(`Added 1 item to cart`);
    } else if (action === "remove") {
      setCartNotification(`Removed 1 item from cart`);
    }

    setTimeout(() => setCartNotification(""), 2000);
  };

  useEffect(() => {
    updateCart();
    const handleStorageChange = () => updateCart();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleNavigation = (path: string) => {
    setIsOpen(false); // Close the mobile menu
    navigate(path); // Navigate to the selected path
  };

  return (
    <nav className="bg-white text-gray-800 fixed w-full z-50 shadow-md"> 
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://media-hosting.imagekit.io/61f2e88b983e421a/sk%20Logo.png?Expires=1838168049&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o-DNPhUXxPRLU2rcLJ8SayuJdE3oVpaQf8SxwbJ-tXsgfepayerO9M0voP0SMGwTVYWN3P3usTqIcFRLuWDnTvEKmcQuSKIh~-FuCYHtjgjKFHKOIgb-5C8Is0MXezXEInt-ClF7xTjUlolyJRuxvqJxG1HVGHuO5OXrTyBkuf7F4ayuoZhWs2HQFJZqlYAzqZBbcASJ8RXDc8wo0KpUcij9wajAjPNwb6QwCKaUqbslGHWUlhjavE2e8h3rJcpcJ1JMgT9g9Ucj89hZf6MaRq4NzYh4n8TvgtGCGt~nLXpnSVQ7NjZT42jR1wAwi45kMZvyXbiH3IVVbtMRfy2Bng__"
              alt="Sri Karimalesh Caterings Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/menu" className="hover:text-orange-500 transition">Catering</Link>
            <Link to="/meal-box" className="hover:text-orange-500 transition">Daily Box</Link>
            <Link to="/trip-packages" className="hover:text-orange-500 transition">Trip Packages</Link>
            <Link to="/subscription" className="hover:text-orange-500 transition">Subscriptions</Link>
            <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link>
            <Link to="/feedback" className="hover:text-orange-500 transition">Feedback</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="hover:text-orange-500 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button class ="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle mobile menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Slide-out Menu */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className={`fixed right-0 top-0 w-64 bg-white h-full shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="px-4 space-y-2">
              <button onClick={() => handleNavigation("/menu")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Catering
              </button>
              <button onClick={() => handleNavigation("/meal-box")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Daily Box
              </button>
              <button onClick={() => handleNavigation("/trip-packages")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Trip Packages
              </button>
              <button onClick={() => handleNavigation("/subscription")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Subscriptions
              </button>
              <button onClick={() => handleNavigation("/about")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                About Us
              </button>
              <button onClick={() => handleNavigation("/feedback")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Feedback
              </button>
              <button onClick={() => handleNavigation("/contact")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Contact Us
              </button>
              <button onClick={() => handleNavigation("/cart")} className="block px-3 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-200 w-full">
                <ShoppingCart size={20} /> <span>Cart ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cart Notification */}
        {cartNotification && (
          <div className="fixed top-16 right-4 bg-green-500 text-white text-sm px-4 py-2 rounded shadow-lg animate-fade">
            {cartNotification}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;