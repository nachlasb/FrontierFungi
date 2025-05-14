import { Button } from "@/components/ui/button";

export default function LearnHero() {
  return (
    <div className="bg-fungi-green py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-montserrat">
            Learn Mushroom Cultivation
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-fungi-cream font-opensans">
            Comprehensive guides, tutorials, and resources for growers of all experience levels
          </p>
          <div className="mt-8 flex justify-center">
            <Button 
              className="mr-4 bg-fungi-cream text-fungi-green hover:bg-white"
              onClick={() => {
                const guidesElement = document.getElementById('growing-guides');
                guidesElement?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Guides
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-fungi-cream text-fungi-cream hover:bg-fungi-cream hover:text-fungi-green"
              onClick={() => {
                window.location.href = '/shop';
              }}
            >
              Shop Supplies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}