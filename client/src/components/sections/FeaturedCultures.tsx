import { MUSHROOM_CULTURES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedCultures() {
  return (
    <section className="bg-fungi-green py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-cream text-center mb-2 section-heading">
          Featured Cultures
        </h2>
        <p className="text-fungi-cream text-center mb-8 max-w-2xl mx-auto">
          Discover our premium mushroom cultures, carefully selected for home growers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MUSHROOM_CULTURES.slice(0, 3).map((culture) => (
            <div
              key={culture.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="h-56 w-full object-cover"
                src={culture.image}
                alt={culture.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-fungi-bark font-montserrat">
                  {culture.name}
                </h3>
                <p className="text-gray-600 mt-1">{culture.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-fungi-green font-bold">
                    ${culture.price.toFixed(2)}
                  </span>
                  <Badge
                    className={`${
                      culture.difficulty === "Beginner Friendly"
                        ? "bg-fungi-moss"
                        : "bg-fungi-brown"
                    } text-white`}
                  >
                    {culture.difficulty}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="px-6 py-3 border-2 border-fungi-cream text-fungi-cream hover:bg-fungi-cream hover:text-fungi-green font-montserrat"
          >
            Explore Culture Library
          </Button>
        </div>
      </div>
    </section>
  );
}
