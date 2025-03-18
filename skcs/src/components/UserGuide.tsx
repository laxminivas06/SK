import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope,FaFacebook } from 'react-icons/fa'; // Importing icons from react-icons

const UserGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">User  Guide</h1>
      <p className="mb-6">
        Welcome to our website! This user guide will help you navigate and utilize the features available.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
      <ul className="list-disc list-inside mb-6">
        <li><a href="#getting-started" className="text-blue-500 hover:underline">Getting Started</a></li>
        <li><a href="#categories" className="text-blue-500 hover:underline">Categories</a></li>
        <li><a href="#catering-services" className="text-blue-500 hover:underline">Catering Services</a></li>
        <li><a href="#daily-box" className="text-blue-500 hover:underline">Daily Box</a></li>
        <li><a href="#trip-packages" className="text-blue-500 hover:underline">Trip Packages</a></li>
        <li><a href="#subscriptions" className="text-blue-500 hover:underline">Subscriptions</a></li>
        <li><a href="#contact-support" className="text-blue-500 hover:underline">Contact Support</a></li>
        <li><a href="#feedback-form" className="text-blue-500 hover:underline">Feedback Form</a></li>
      </ul>

      <h2 id="getting-started" className="text-2xl font-semibold mb-2">Getting Started</h2>
      <p className="mb-4">
        To get started, simply create an account by clicking on the "Sign Up" button on the homepage. Fill in your details and verify your email address.
      </p>

      <h2 id="categories" className="text-2xl font-semibold mb-2">Categories</h2>
      <p className="mb-4">
        From the homepage, you can view different categories of services. Click on the "View More" button to explore all available options.
      </p>

      <h2 id="catering-services" className="text-2xl font-semibold mb-2">Catering Services</h2>
      <p className="mb-4">
        In the Catering Services category, you can directly select items and add them to your cart. Once you are ready to checkout, you will see a WhatsApp checkout button. Clicking this button will redirect you to WhatsApp, where you can send your order details directly.
        <br />
        <a href="/category/catering" className="text-blue-500 hover:underline">View Catering Services</a>
      </p>

      <h2 id="daily-box" className="text-2xl font-semibold mb-2">Daily Box</h2>
      <p className="mb-4">
        The Daily Box features a variety of items that are updated every day. The items available in the Daily Box are part of the menu, and you can find the latest updates in the "Today's Deals" section.
        <br />
        <a href="/meal-box" className="text-blue-500 hover:underline">View Daily Box</a>
      </p>

      <h2 id="trip-packages" className="text-2xl font-semibold mb-2">Trip Packages</h2>
      <p className="mb-4">
        We offer three types of trip packages. You can choose any package that suits your needs. After selecting a package, simply click the WhatsApp button to proceed with your booking.
        <br />
        <a href="/trip-packages" className="text-blue-500 hover:underline">View Trip Packages</a>
      </p>

      <h2 id="subscriptions" className="text-2xl font-semibold mb-2">Subscriptions</h2>
      <p className="mb-4">
        Our subscription service allows you to receive regular deliveries. If you have any questions or need assistance, feel free to reach out via the Whats App button.
        <br />
        <a href="/subscription" className="text-blue-500 hover:underline">View Subscriptions</a>
      </p>

      <h2 id="contact-support" className="text-2xl font-semibold mb-2">Contact Support</h2>
      <p className="mb-4">
        If you have any queries or need further assistance, please contact us through the "Contact Us" page or chat with us on WhatsApp.
        <br />
        <a href="/contact" className="text-blue-500 hover:underline">Contact Us</a>
      </p>

      <h2 id="feedback-form" className="text-2xl font-semibold mb-2">Feedback Form</h2>
      <p className="mb-4">
        In the Feedback Form, you can fill out the form and it will redirect you to WhatsApp after submitting your feedback. This allows you to send your feedback directly.
        <br />
        <a href="/feedback" className="text-blue-500 hover:underline">Feedback Form</a>
      </p>
      

      <h2 id="cart-page" className="text-2xl font-semibold mb-2">Cart Page</h2>
      <p className="mb-4">
        You can view and manage your selected items in the cart. Once you are ready to proceed, you can check out from this page.
        <br />
        <a href="/cart" className="text-blue-500 hover:underline">View Cart</a>
      </p>

      <p className="mb-4">
        Thank you for using our website! We hope this guide helps you have a smooth experience.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="https://wa.me/61450056387" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          <FaWhatsapp className="text-green-500 text-2xl hover:text-green-600 transition" />
        </a>
        <a href="https://www.instagram.com/srikarimaleshcaters" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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
  );
};

export default UserGuide;