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
              src="https://res.cloudinary.com/dt3effj06/image/upload/v1740503772/SK.svg"
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
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle mobile menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 text-gray-800 py-2 rounded-md shadow-md transition-all duration-300">
            <div className="px-4 space-y-2">
              <button onClick={() => handleNavigation("/menu")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Catering
              </button>
              <button onClick={() => handleNavigation("/meal-box")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Daily Box
              </button>
              <button onClick={() => handleNavigation("/trip-packages")} className="block px- 3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
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
        )}

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