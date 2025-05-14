import { Helmet } from "react-helmet";
import { useState } from "react";
import { COMPANY_NAME } from "@/lib/constants";
import GrowingGuideList from "@/components/learn/GrowingGuideList";
import LearnHero from "@/components/learn/LearnHero";
import VideoTutorials from "@/components/learn/VideoTutorials";
import LearningPathways from "@/components/learn/LearningPathways";
import ResourceFilters from "@/components/learn/ResourceFilters";
import GrowingGuides from "@/components/learn/GrowingGuides";
import InteractiveLearning from "@/components/learn/InteractiveLearning";
import PersonalizedGrowingPlanner from "@/components/learn/PersonalizedGrowingPlanner";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Learn() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Helmet>
        <title>Learn About Mushroom Cultivation | {COMPANY_NAME}</title>
        <meta 
          name="description" 
          content="Access comprehensive mushroom cultivation resources, guides, and educational materials. Perfect for beginners and experienced growers looking to expand their knowledge." 
        />
      </Helmet>
      
      <LearnHero />
      <InteractiveLearning />
      <PersonalizedGrowingPlanner />
      <GrowingGuides />
      <VideoTutorials />
      <LearningPathways />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-fungi-cream">
        <h2 className="text-3xl font-bold text-white bg-fungi-green py-4 rounded-md mb-8">Search Growing Guides</h2>
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ResourceFilters 
            categoryFilter={categoryFilter} 
            setCategoryFilter={setCategoryFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <GrowingGuideList 
            categoryFilter={categoryFilter} 
            searchQuery={searchQuery}
          />
        </div>
      </div>
      <ConnectSection />
    </>
  );
}