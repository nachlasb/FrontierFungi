import { Helmet } from "react-helmet";
import { useState } from "react";
import { COMPANY_NAME } from "@/lib/constants";
import CultureList from "@/components/cultures/CultureList";
import CultureFilters from "@/components/cultures/CultureFilters";
import CultureHero from "@/components/cultures/CultureHero";
import GrowingDifficultyGuide from "@/components/cultures/GrowingDifficultyGuide";

export default function CultureLibrary() {
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Helmet>
        <title>Mushroom Culture Library | {COMPANY_NAME}</title>
        <meta 
          name="description" 
          content="Explore our extensive library of gourmet mushroom cultures for home cultivation. Find detailed information on growing conditions, flavors, and difficulty levels for each variety." 
        />
      </Helmet>
      
      <CultureHero />
      <GrowingDifficultyGuide />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
          <CultureFilters 
            difficultyFilter={difficultyFilter} 
            setDifficultyFilter={setDifficultyFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <CultureList 
            difficultyFilter={difficultyFilter} 
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </>
  );
}