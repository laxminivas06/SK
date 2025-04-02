import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const menuCategories = [
  { name: "Breakfast", icon: "https://sukhis.com/app/uploads/2019/09/Indian-Breakfast.jpg" },
  { name: "Sweets", icon: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3g2eGx4cjFwMDJibXUwa29maGkwdXk2cWkyNWUzZ3I3dXh4dDk3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7WuKx78bJYpeY3p7IM/giphy.gif" },
  { name: "Fry Items", icon: "https://i.ytimg.com/vi/F8FsoVfo0aE/sddefault.jpg" },
  { name: "Starters", icon: "https://vishwaratnahotel.com/wp-content/uploads/2024/11/Paneer-Tikka-1024x688.webp" },
  { name: "Curries", icon: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe.jpg" },
  { name: "Hots", icon: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWc0eTBhZjFrM293bnA4OWgwNDgzeDR6N3doenQ1dWo4YTh6M2VxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r1uMR1y61AwDe2KsWD/giphy.gif" },
  { name: "Rotis", icon: "https://images.immediate.co.uk/production/volatile/sites/30/2022/07/Rotis-b815baf.jpg?resize=768,574" },
  { name: "Liquids", icon: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxhbjdvZ3gwZnp2azR6NnFzbXB4Z251YmY1NzQ5ODI2YWUydDE2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/REKrUbamPVUciBJKqE/giphy.gif" },
  { name: "Rice Items", icon: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/06/pulihora-recipe.jpg" },
  { name: "Pickles", icon: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/mango-pickle-recipe.jpg" },
  { name: "Snacks", icon: "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/sanjeev-kapoor/media/media_files/KUrC6x0ho1P7MDMV7CV1.JPG" },
  { name: "Drinks", icon: "https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg" },
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