import React from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  floating?: boolean;
}

const WhatsAppButton = ({ message = "Hi! I'd like to place an order.", floating = false }: WhatsAppButtonProps) => {
  const phoneNumber = "+61450056387"; // Replace with actual phone number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (floating) {
    return (
      <>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 mt-500"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="/user-guide" // Replace with actual user guide URL
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-16 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 ml-4" // Added margin-left
          aria-label="User  Guide"
        >
          <HelpCircle className="w-6 h-6" />
        </a>
      </>
    );
  }

  return (
    <div className="inline-flex items-center gap-20"> {/* Increased gap */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 "
      >
        <MessageCircle className="w-5 h-5" />
        <span>Chat on WhatsApp</span>
      </a>
      <a
        href="/user-guide" // Replace with actual user guide URL
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        <HelpCircle className="w-5 h-5" />
        <span>User Guide</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;