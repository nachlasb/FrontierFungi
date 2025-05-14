export default function GrowingDifficultyGuide() {
  const difficultyLevels = [
    {
      level: "Beginner Friendly",
      color: "bg-green-500",
      description: "Ideal for first-time growers. Forgiving, fast-growing, and resistant to contamination. Minimal equipment needed.",
    },
    {
      level: "Intermediate",
      color: "bg-yellow-500",
      description: "Requires some experience and attention to environmental conditions. May need more specialized equipment.",
    },
    {
      level: "Advanced",
      color: "bg-orange-500",
      description: "For experienced growers with good sterile technique. Requires careful monitoring and environmental control.",
    },
    {
      level: "Expert",
      color: "bg-red-500",
      description: "Challenging species that require specialized techniques, equipment, and significant experience for successful cultivation.",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-green text-center mb-6 font-montserrat">
          Understanding Difficulty Levels
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Our cultures are categorized by difficulty level to help you choose species
          appropriate for your experience and equipment
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {difficultyLevels.map((level) => (
            <div key={level.level} className="bg-fungi-cream p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className={`w-4 h-4 rounded-full ${level.color} mr-2`}></div>
                <h3 className="text-lg font-semibold text-fungi-bark">
                  {level.level}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}