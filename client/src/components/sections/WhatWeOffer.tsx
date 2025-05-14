import { 
  Package2, 
  FlaskRound, 
  Paintbrush, 
  Archive, 
  BookOpen, 
  MessageSquareText 
} from "lucide-react";

export default function WhatWeOffer() {
  const offerings = [
    {
      icon: <Package2 className="h-10 w-10" />,
      title: "Complete Grow Kits",
      description: "Ready-to-grow kits with everything needed for a successful harvest, perfect for beginners.",
    },
    {
      icon: <FlaskRound className="h-10 w-10" />,
      title: "Premium Cultures",
      description: "High-quality mushroom cultures from over 20 gourmet and medicinal species.",
    },
    {
      icon: <Paintbrush className="h-10 w-10" />,
      title: "Cultivation Supplies",
      description: "Substrates, tools, and equipment for every stage of the mushroom growing process.",
    },
    {
      icon: <Archive className="h-10 w-10" />,
      title: "Monthly Subscriptions",
      description: "Regular deliveries of new cultures, tools, and educational materials to expand your growing skills.",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Educational Resources",
      description: "Comprehensive guides, videos, and courses for all aspects of mushroom cultivation.",
    },
    {
      icon: <MessageSquareText className="h-10 w-10" />,
      title: "Expert Support",
      description: "Access to our expert team and AI assistant for troubleshooting and advice during your growing journey.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-green text-center mb-4 section-heading">
          What We Offer
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Everything you need for successful mushroom cultivation, from beginner to expert
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-fungi-cream rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-fungi-green">
                {offering.icon}
              </div>
              <h3 className="text-xl font-semibold text-fungi-bark mb-2 font-montserrat">
                {offering.title}
              </h3>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
