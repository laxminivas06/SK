import React from 'react';

const FeedbackForm = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true'; // Replace with your Google Form URL

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-20">
      <h1 className="text-3xl font-bold mb-4">Feedback Form</h1>
      <iframe
        src={googleFormUrl}
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="border border-gray-300 rounded"
        title="Feedback Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FeedbackForm;