import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type ProductFiltersProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

export default function ProductFilters({ 
  activeCategory, 
  setActiveCategory,
  activeFilter,
  setActiveFilter
}: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 350]);
  
  const filters = [
    { id: "", name: "All" },
    { id: "subscription", name: "Subscription Only" },
    { id: "featured", name: "Featured Items" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
  ];

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-fungi-bark mb-4">Categories</h3>
        
        <RadioGroup 
          defaultValue={activeCategory} 
          onValueChange={setActiveCategory}
          className="space-y-2"
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <RadioGroupItem value={category.id} id={`category-${category.id}`} />
              <Label 
                htmlFor={`category-${category.id}`}
                className={`cursor-pointer ${activeCategory === category.id ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
              >
                {category.name}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4">Filters</h3>
          
          <RadioGroup 
            defaultValue={activeFilter} 
            onValueChange={setActiveFilter}
            className="space-y-2"
          >
            {filters.map((filter) => (
              <div key={filter.id} className="flex items-center space-x-2">
                <RadioGroupItem value={filter.id} id={`filter-${filter.id || 'all'}`} />
                <Label 
                  htmlFor={`filter-${filter.id || 'all'}`}
                  className={`cursor-pointer ${activeFilter === filter.id ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                >
                  {filter.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4">Price Range</h3>
          
          <div className="space-y-4">
            <Slider
              defaultValue={[0, 350]}
              max={350}
              step={5}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-6"
            />
            
            <div className="flex items-center justify-between">
              <div className="bg-fungi-cream p-2 rounded w-24 text-center">
                ${priceRange[0]}
              </div>
              <div className="bg-fungi-cream p-2 rounded w-24 text-center">
                ${priceRange[1]}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4">Search</h3>
          <Input 
            type="search" 
            placeholder="Search products..." 
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}