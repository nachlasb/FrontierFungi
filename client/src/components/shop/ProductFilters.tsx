import { PRODUCT_CATEGORIES } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
  const [priceRange, setPriceRange] = useState([0, 100]);

  const formatCategories = (id: string): string => {
    return id === 'all' 
      ? 'All Products' 
      : id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ');
  };

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Product Filters</h3>
        
        <Accordion type="single" collapsible defaultValue="categories" className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-fungi-green font-semibold">Categories</AccordionTrigger>
            <AccordionContent className="pt-2">
              <RadioGroup 
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="category-all" />
                  <Label 
                    htmlFor="category-all" 
                    className={`cursor-pointer ${activeCategory === 'all' ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                  >
                    All Products
                  </Label>
                </div>
                
                {PRODUCT_CATEGORIES.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={category.id} id={`category-${category.id}`} />
                    <Label 
                      htmlFor={`category-${category.id}`} 
                      className={`cursor-pointer ${activeCategory === category.id ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                    >
                      {formatCategories(category.id)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="price">
            <AccordionTrigger className="text-fungi-green font-semibold">Price Range</AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="mb-6">
                <Slider
                  value={priceRange}
                  min={0}
                  max={200}
                  step={10}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600">${priceRange[0]}</div>
                  <div className="text-sm text-gray-600">${priceRange[1]}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="price-low" 
                    id="sort-price-low" 
                    checked={activeFilter === 'price-low'}
                    onClick={() => setActiveFilter('price-low')} 
                  />
                  <Label 
                    htmlFor="sort-price-low" 
                    className={`cursor-pointer ${activeFilter === 'price-low' ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                  >
                    Price: Low to High
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="price-high" 
                    id="sort-price-high" 
                    checked={activeFilter === 'price-high'}
                    onClick={() => setActiveFilter('price-high')} 
                  />
                  <Label 
                    htmlFor="sort-price-high" 
                    className={`cursor-pointer ${activeFilter === 'price-high' ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                  >
                    Price: High to Low
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="availability">
            <AccordionTrigger className="text-fungi-green font-semibold">Availability</AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="in-stock" 
                    id="filter-in-stock"
                    checked={activeFilter === 'in-stock'}
                    onClick={() => setActiveFilter('in-stock')}
                  />
                  <Label 
                    htmlFor="filter-in-stock" 
                    className={`cursor-pointer ${activeFilter === 'in-stock' ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                  >
                    In Stock
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="featured" 
                    id="filter-featured"
                    checked={activeFilter === 'featured'}
                    onClick={() => setActiveFilter('featured')}
                  />
                  <Label 
                    htmlFor="filter-featured" 
                    className={`cursor-pointer ${activeFilter === 'featured' ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                  >
                    Featured Items
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="subscription" 
                    id="filter-subscription"
                    checked={activeFilter === 'subscription'}
                    onClick={() => setActiveFilter('subscription')}
                  />
                  <Label 
                    htmlFor="filter-subscription" 
                    className={`cursor-pointer ${activeFilter === 'subscription' ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                  >
                    Subscription Only
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}