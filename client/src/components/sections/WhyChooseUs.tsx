import { Check, Book, Users } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Check className="h-10 w-10 text-white" />,
      title: "Sustainable Practices",
      description:
        "All of our products are responsibly sourced and environmentally friendly, minimizing waste and carbon footprint.",
    },
    {
      icon: <Book className="h-10 w-10 text-white" />,
      title: "Expert Knowledge",
      description:
        "Our team consists of mycology enthusiasts with years of experience in cultivation techniques and best practices.",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Supportive Community",
      description:
        "Join our community of mushroom enthusiasts sharing tips, challenges, and successes in their growing journeys.",
    },
  ];

  return (
    <section className="py-16 bg-fungi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-green text-center mb-12 section-heading">
          Why Choose Frontier Fungi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-fungi-moss inline-block p-5 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-fungi-bark mb-2 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
