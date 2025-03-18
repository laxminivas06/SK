import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FeedbackForm = () => {
  const events = [
    { id: 1, organizer: 'Naresh', date: '16th March 2025' },
  ];

  const [selectedEvent, setSelectedEvent] = useState(events[0].id); // Default to the first event
  const [feedback, setFeedback] = useState({
    name: '',
    contactNumber: '',
    email: '',
    rating: 0,
    review: '',
    suggestion: '',
  });

  const handleChange = (field, value) => {
    setFeedback({ ...feedback, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message to send via WhatsApp
    const message = `
      Feedback Form Submission:
      Event Organizer: ${events.find(event => event.id === selectedEvent).organizer}
      Event Date: ${events.find(event => event.id === selectedEvent).date}
      Name: ${feedback.name}
      Contact Number: ${feedback.contactNumber}
      Email: ${feedback.email}
      Rating: ${feedback.rating} Star(s)
      Review: ${feedback.review}
      Suggestions for Improvement: ${feedback.suggestion}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/61450056387?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset the feedback form
    setFeedback({
      name: '',
      contactNumber: '',
      email: '',
      rating: 0,
      review: '',
      suggestion: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-20">
      <h1 className="text-3xl font-bold mb-4">Feedback Form</h1>
      <div className="mb-4">
        <label className="block mb-1">Select Event</label>
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(Number(e.target.value))}
          className="border border-gray-300 p-2 w-full rounded"
        >
          {events.map(event => (
            <option key={event.id} value={event.id}>
              {event.organizer} - {event.date}
            </option>
          ))}
        </select>
      </div>
      <div className="border p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Event Details</h2>
        <p>Event Organizer: <strong>{events.find(event => event.id === selectedEvent).organizer}</strong></p>
        <p>Event Date: <strong>{events.find(event => event.id === selectedEvent).date}</strong></p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              value={feedback.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="contact">Contact Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              id="contact"
              value={feedback.contactNumber}
              onChange={(e) => handleChange('contactNumber', e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email (Optional)</label>
            <input
              type="email"
              id="email"
              value={feedback.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Rating <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-5 items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="flex flex-col items-center">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      onChange={() => handleChange('rating', star)}
                      className="hidden"
                      required
                    />
                    <span className={`text-2xl ${star <= feedback.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                      ★
                    </span>
                  </label>
                  <span className="text-sm text-gray-500">
                    {star === 1 ? 'Very Dissatisfied' : star === 2 ? 'Dissatisfied' : star === 3 ? 'Average' : star === 4 ? 'Satisfied' : 'Very Satisfied'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="review">Your Review <span className="text-red-500">*</span></label>
            <textarea
              id="review"
              value={feedback.review}
              onChange={(e) => handleChange('review', e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="suggestion">Suggestions for Improvement</label>
            <textarea
              id="suggestion"
              value={feedback.suggestion}
              onChange={(e) => handleChange('suggestion', e.target.value)}
              className="border border-gray-300 p-2 w-full rounded"
              rows="4"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;