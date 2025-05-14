import { ALL_PRODUCTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useState, useEffect } from "react";

type ProductListProps = {
  activeCategory: string;
  activeFilter: string;
};

export default function ProductList({ activeCategory, activeFilter }: ProductListProps) {
  const [products, setProducts] = useState(ALL_PRODUCTS);

  useEffect(() => {
    // Filter by category
    let filtered = [...ALL_PRODUCTS];
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Apply additional filters
    if (activeFilter === 'subscription') {
      filtered = filtered.filter(product => product.subscription);
    } else if (activeFilter === 'featured') {
      filtered = filtered.filter(product => product.featured);
    } else if (activeFilter === 'price-low') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (activeFilter === 'price-high') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    
    setProducts(filtered);
  }, [activeCategory, activeFilter]);

  if (products.length === 0) {
    return (
      <div id="products" className="lg:col-span-3 mt-4 lg:mt-0">
        <div className="bg-white p-12 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-medium text-fungi-bark mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria.</p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-fungi-green hover:bg-fungi-bark"
          >
            Reset Filters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div id="products" className="lg:col-span-3 mt-4 lg:mt-0">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium text-fungi-bark mb-1">
          {activeCategory === 'all' ? 'All Products' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1).replace('-', ' ')}
        </h3>
        <p className="text-gray-600 text-sm mb-1">
          {products.length} products found
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img 
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              {product.subscription && (
                <Badge className="absolute top-2 right-2 bg-fungi-moss text-white">
                  Subscription
                </Badge>
              )}
              {product.featured && (
                <Badge className="absolute top-2 left-2 bg-fungi-brown text-white">
                  Featured
                </Badge>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-fungi-bark font-montserrat">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 h-10 overflow-hidden">
                {product.description}
              </p>
              
              <div className="flex text-yellow-400 mt-2">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current opacity-30" />
                <span className="text-xs text-gray-500 ml-1">(23 reviews)</span>
              </div>
              
              <div className="mt-3 flex justify-between items-center">
                <span className="text-fungi-green font-bold">
                  ${product.price.toFixed(2)}
                  {product.subscription ? "/mo" : ""}
                </span>
                <Button
                  size="sm"
                  className="bg-fungi-green text-white hover:bg-fungi-bark flex items-center gap-1"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}