import { useState } from "react";

type FeaturedCategoriesProps = {
  setActiveCategory: (category: string) => void;
};

export default function FeaturedCategories({ setActiveCategory }: FeaturedCategoriesProps) {
  const categories = [
    {
      id: "growing-kits",
      name: "Growing Kits",
      image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete kits with everything you need to start growing",
    },
    {
      id: "equipment",
      name: "Equipment",
      image: "https://images.pexels.com/photos/7263014/pexels-photo-7263014.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional tools for optimal growing conditions",
    },
    {
      id: "substrates",
      name: "Substrates",
      image: "https://images.pexels.com/photos/6044271/pexels-photo-6044271.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium growing media for healthy mushroom cultivation",
    },
    {
      id: "cultures",
      name: "Cultures & Spores",
      image: "https://images.pexels.com/photos/6044283/pexels-photo-6044283.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Quality genetics for starting your cultivation",
    },
    {
      id: "books",
      name: "Books & Education",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Knowledge resources for all growing levels",
    },
    {
      id: "subscriptions",
      name: "Subscriptions",
      image: "https://images.pexels.com/photos/6044191/pexels-photo-6044191.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Regular deliveries of cultures and supplies",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-fungi-green text-center mb-6">Shop By Category</h2>
        <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Find everything you need for your mushroom growing journey
        </p>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative bg-fungi-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-fungi-bark mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              <div className="absolute inset-0 bg-fungi-green bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}