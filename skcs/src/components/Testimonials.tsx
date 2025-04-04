import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
          Customer Reviews
        </h2>
        <div className="flex justify-center">
          <iframe
            src=""
            width="640"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="border-2 border-gray-300 rounded-lg"
            title="Customer Reviews"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;