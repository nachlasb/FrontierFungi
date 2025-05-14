import { Button } from "@/components/ui/button";

export default function CultureHero() {
  return (
    <div className="bg-fungi-brown py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-montserrat">
            Mushroom Culture Library
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-fungi-cream font-opensans">
            Explore our extensive collection of premium gourmet and medicinal
            mushroom cultures for home cultivation
          </p>
          <div className="mt-8 flex justify-center">
            <Button 
              className="mr-4 bg-fungi-cream text-fungi-brown hover:bg-white"
              onClick={() => {
                const culturesElement = document.getElementById('cultures');
                culturesElement?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Cultures
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-fungi-cream text-fungi-cream hover:bg-fungi-cream hover:text-fungi-brown"
              onClick={() => {
                window.location.href = '/learn';
              }}
            >
              Growing Guides
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}