import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const menuCategories = [
  { name: "Sweets", icon: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3g2eGx4cjFwMDJibXUwa29maGkwdXk2cWkyNWUzZ3I3dXh4dDk3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7WuKx78bJYpeY3p7IM/giphy.gif" },
  { name: "Fry Items", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741805680/sk_catering_available_12_kxjqfz.mp4" },
  { name: "Starters", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741804936/4_rbyl7o.mp4" },
  { name: "Curries", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741809696/4_jvxafg.mp4" },
  { name: "Hots", icon: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWc0eTBhZjFrM293bnA4OWgwNDgzeDR6N3doenQ1dWo4YTh6M2VxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r1uMR1y61AwDe2KsWD/giphy.gif" },
  { name: "Rotis", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741804947/5_n5bxt1.mp4" },
  { name: "Liquids", icon: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxhbjdvZ3gwZnp2azR6NnFzbXB4Z251YmY1NzQ5ODI2YWUydDE2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/REKrUbamPVUciBJKqE/giphy.gif" },
  { name: "Rice Items", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741809652/3_bvy2uz.mp4" },
  { name: "Pickles", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741810072/sk_catering_available_4123_xpjwam.mp4" },
  { name: "Snacks", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741805768/sk_catering_available_132_f0hrwg.mp4" },
  { name: "Drinks", icon: "https://res.cloudinary.com/dt3effj06/video/upload/v1741804946/6_ez1u45.mp4" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
          Our Menu Categories
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <Link key={index} to={`/category/${category.name}`} className="no-underline">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative h-48 w-full">
                  {category.icon.endsWith('.mp4') ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline // Prevent fullscreen on mobile devices
                      controls={false} // Disable controls to prevent user interaction
                      style={{ objectFit: 'cover' }} // Ensure the video covers the container
                    >
                      <source src={category.icon} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-orange-900 text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;