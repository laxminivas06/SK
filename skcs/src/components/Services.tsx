import React from 'react';
import { Cake, Building2, Heart, Users } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const services = [
  {
    icon: <Cake className="w-12 h-12" />,
    title: 'Birthday Celebrations',
    description: 'Make your special day memorable with our catering services.',
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: 'Corporate Events',
    description: 'Professional catering solutions for your business meetings and events.',
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: 'Anniversary Parties',
    description: 'Create unforgettable wedding experiences with our authentic Telugu cuisine.',
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Private Parties',
    description: 'Customized menus for your private gatherings and celebrations.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-orange-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <WhatsAppButton message={`Hi! I'm interested in your ${service.title} service.`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;