import React from 'react';

const FeedbackForm = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdrTCMN4I8xX98SNUCxvPRQsOhT7abnqRqhOwO_Z86AmcZmTQ/viewform'; // Use the direct URL

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-20">
      
      <h1 className="text-3xl font-bold mb-4">Feedback Form</h1>
      
      <div className="mb-4">
        <p>
          We appreciate your feedback! Your insights help us improve our services and better meet your needs. 
          Please click the button below to access the feedback form.
        </p>
      </div>
      
      <div className="mt-4">
        <a 
          href={googleFormUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Feedback Form
        </a>
      </div>
      
    </div>
  );
};

export default FeedbackForm;