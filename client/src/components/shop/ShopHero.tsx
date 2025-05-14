import { Button } from "@/components/ui/button";

export default function ShopHero() {
  return (
    <div className="bg-fungi-green py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-montserrat">
            Shop Our Products
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-fungi-cream font-opensans">
            Everything you need for successful mushroom cultivation, from beginner
            kits to professional equipment
          </p>
          <div className="mt-8 flex justify-center">
            <Button 
              className="mr-4 bg-fungi-cream text-fungi-green hover:bg-white"
              onClick={() => {
                const productsElement = document.getElementById('products');
                productsElement?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Products
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-fungi-cream text-fungi-cream hover:bg-fungi-cream hover:text-fungi-green"
              onClick={() => {
                window.location.href = '/culture-library';
              }}
            >
              Explore Cultures
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}