import React, { useState } from 'react';
import { Users } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const packages = [
  {
    name: 'Duo',
    persons: 2,
    price: 27.99,
    color: 'orange-600',
  },
  {
    name: 'Nuclear',
    persons: 4,
    price: 53.99,
    color: 'orange-700',
    featured: true,
  },
  {
    name: 'Joint',
    persons: 6,
    price: 81.99,
    color: 'orange-800',
  },
];

const TripPackages = () => {
  const [customPersons, setCustomPersons] = useState(7); // Default to 7 persons
  const costPerPerson = 12.99; // Cost per person for custom packages

  // Calculate total cost for custom packages
  const totalCost = (customPersons * costPerPerson).toFixed(2);

  return (
    <section
      id="packages"
      className="py-20 px-4 bg-cover bg-center bg-no-repeat backdrop-blur-lg"
      style={{ backgroundImage: "url('https://images.contentstack.io/v3/assets/blt62d40591b3650da3/blt709f9d0ad6ed85ee/658ee412a2c41ff5ffdb0b2d/hero_PR1497_FamilyRoadTrip_Banner.jpg')" }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 py-3 rounded-lg ">
          Trip Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative ${
                pkg.featured ? 'transform md:-translate-y-4' : ''
              }`}
            >
              <div className="bg-white/90 rounded-2xl shadow-xl overflow-hidden">
                {pkg.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-center text-gray-600 mb-4">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{pkg.persons} Persons</span>
                    </div>
                    <div className="text-3xl font-bold text-orange-600">
                      ${pkg.price} <span className="text-base font-normal">AUD</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                       Rice
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      1 Curry
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Fry
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Chutney
                    </li>
                    
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Sambar
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Curd
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Water Bottle
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mb-4">
                    Please inform us at least 2 days in advance for any order.
                  </p>
                  <WhatsAppButton message={`Hi! I'm interested in the ${pkg.name} Package for ${pkg.persons} persons.`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package Section */}
        <div className="mt-12 max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Custom Package</h3>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              <span className="font-bold">For groups larger than 6 persons,</span>
            </p>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <label htmlFor="customPersons" className="text-gray-700">
                Number of Persons:
              </label>
              <input
                type="number"
                id="customPersons"
                value={customPersons}
                onChange={(e) => setCustomPersons(Number(e.target.value))}
                min="7"
                className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-6">
              Total: ${totalCost} <span className="text-base font-normal">AUD</span>
            </div>
            <WhatsAppButton
              message={`Hi! I'm interested in a Custom Package for ${customPersons} persons. The total cost is $${totalCost} AUD.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPackages;