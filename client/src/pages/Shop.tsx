import { Helmet } from "react-helmet";
import { useState } from "react";
import { COMPANY_NAME } from "@/lib/constants";
import ProductList from "@/components/shop/ProductList";
import ProductFilters from "@/components/shop/ProductFilters";
import ShopHero from "@/components/shop/ShopHero";
import FeaturedCategories from "@/components/shop/FeaturedCategories";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <>
      <Helmet>
        <title>Shop | {COMPANY_NAME} - Gourmet Mushroom Cultivation Supplies</title>
        <meta 
          name="description" 
          content="Shop premium mushroom cultivation supplies, grow kits, and equipment at Frontier Fungi. Find everything you need for successful mushroom growing, from beginner to advanced." 
        />
      </Helmet>
      
      <ShopHero />
      <FeaturedCategories setActiveCategory={setActiveCategory} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <ProductList 
            activeCategory={activeCategory} 
            activeFilter={activeFilter} 
          />
        </div>
      </div>
    </>
  );
}