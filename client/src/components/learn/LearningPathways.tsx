import { Button } from "@/components/ui/button";

export default function LearningPathways() {
  const pathways = [
    {
      title: "Beginner's Pathway",
      description: "Perfect for those just starting their mushroom growing journey",
      steps: [
        "Understanding the basics of mushroom life cycle",
        "Setting up your first growing environment",
        "Cultivating easy beginner-friendly species",
        "Harvesting and enjoying your first crop"
      ],
      image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-green-500"
    },
    {
      title: "Intermediate Pathway",
      description: "For growers ready to expand their techniques and species variety",
      steps: [
        "Working with agar and cultures",
        "Creating your own spawn",
        "Advanced fruiting techniques",
        "Experimenting with diverse species"
      ],
      image: "https://images.pexels.com/photos/6044283/pexels-photo-6044283.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-yellow-500"
    },
    {
      title: "Advanced Pathway",
      description: "Master cultivation techniques for rare and challenging species",
      steps: [
        "Creating sterile lab environments",
        "Developing strain isolation techniques",
        "Designing automated growing systems",
        "Cultivating medicinal and rare gourmet species"
      ],
      image: "https://images.pexels.com/photos/3735704/pexels-photo-3735704.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-red-500"
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-green text-center mb-4 section-heading">
          Choose Your Learning Path
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Follow structured learning pathways designed for your experience level and goals
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <div key={index} className="bg-fungi-cream rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <img 
                  src={pathway.image} 
                  alt={pathway.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className={`absolute top-0 right-0 ${pathway.color} text-white px-3 py-1 rounded-bl-lg text-sm font-medium`}>
                  {index === 0 ? "Beginner" : index === 1 ? "Intermediate" : "Advanced"}
                </div>
                <h3 className="absolute bottom-0 left-0 text-white text-xl font-bold p-4 font-montserrat">
                  {pathway.title}
                </h3>
              </div>
              
              <div className="p-5">
                <p className="text-gray-600 mb-4">
                  {pathway.description}
                </p>
                
                <h4 className="text-fungi-green font-semibold mb-2">You'll Learn:</h4>
                <ul className="space-y-1 mb-5">
                  {pathway.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="text-fungi-green mr-2">•</span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-fungi-green hover:bg-fungi-bark">
                  Start This Pathway
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}