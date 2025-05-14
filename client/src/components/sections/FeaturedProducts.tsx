import { FEATURED_PRODUCTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-fungi-green text-center mb-8 section-heading">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURED_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="h-48 w-full object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-fungi-bark font-montserrat">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-fungi-green font-bold">
                  ${product.price.toFixed(2)}
                  {product.subscription ? "/mo" : ""}
                </span>
                <Button
                  size="sm"
                  className="bg-fungi-green text-white hover:bg-fungi-bark"
                >
                  {product.subscription ? "Subscribe" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          className="px-6 py-3 bg-fungi-brown text-white hover:bg-opacity-90 font-montserrat"
        >
          View All Products
        </Button>
      </div>
    </section>
  );
}
