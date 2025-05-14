import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="bg-fungi-bark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 section-heading">
          Ready to Start Your Mushroom Growing Journey?
        </h2>
        <p className="text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
          Join thousands of home growers experiencing the joy and satisfaction of
          cultivating their own gourmet mushrooms.
        </p>
        <div className="space-x-4">
          <Button
            className="bg-fungi-green text-white hover:bg-opacity-90 font-montserrat"
          >
            Shop Now
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-fungi-bark font-montserrat"
          >
            Explore Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
