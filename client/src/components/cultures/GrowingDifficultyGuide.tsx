import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GrowingDifficultyGuide() {
  const difficultyLevels = [
    {
      level: "Beginner Friendly",
      color: "bg-green-500",
      description: "Mushrooms that are forgiving, contamination-resistant, and have high success rates with minimal equipment. Perfect for first-time growers.",
      examples: ["Oyster Mushrooms", "Wine Cap", "Lion's Mane"]
    },
    {
      level: "Intermediate",
      color: "bg-yellow-500",
      description: "Require more attention to environmental conditions and cleanliness. Success rates are good with proper techniques and basic equipment.",
      examples: ["Shiitake", "Reishi", "Maitake"]
    },
    {
      level: "Advanced",
      color: "bg-orange-500",
      description: "Need precise environmental controls, excellent sterile technique, and specialized knowledge. Recommended for experienced growers.",
      examples: ["Morel", "Chicken of the Woods", "Black Poplar"]
    },
    {
      level: "Expert",
      color: "bg-red-500",
      description: "Challenging species that require perfect conditions, advanced lab equipment, and extensive knowledge. Often have low success rates.",
      examples: ["Matsutake", "Truffles", "Cordyceps"]
    }
  ];

  return (
    <div className="bg-fungi-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-green text-center mb-4 section-heading">
          Growing Difficulty Guide
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Understanding difficulty ratings helps you select cultures appropriate for your experience level
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {difficultyLevels.map((item, index) => (
            <Card key={index} className="overflow-hidden border-t-4 border-t-solid" style={{ borderTopColor: item.color.replace('bg-', '') }}>
              <CardHeader className={`${item.color} text-white`}>
                <CardTitle className="text-xl">{item.level}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-700 mb-4">
                  {item.description}
                </p>
                <div>
                  <h4 className="text-fungi-bark font-semibold text-sm mb-1">Example Species:</h4>
                  <ul className="text-sm">
                    {item.examples.map((example, i) => (
                      <li key={i} className="text-gray-600">• {example}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Always start with beginner-friendly cultures and progress to more challenging species as you gain experience.
          </p>
        </div>
      </div>
    </div>
  );
}