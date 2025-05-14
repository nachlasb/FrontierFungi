import { useState, useEffect } from "react";
import { GROWING_GUIDES } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  Bookmark,
} from "lucide-react";

type GrowingGuideListProps = {
  categoryFilter: string;
  searchQuery: string;
};

export default function GrowingGuideList({ categoryFilter, searchQuery }: GrowingGuideListProps) {
  const [guides, setGuides] = useState(GROWING_GUIDES);

  useEffect(() => {
    let filtered = [...GROWING_GUIDES];
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(guide => guide.category === categoryFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(guide => 
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setGuides(filtered);
  }, [categoryFilter, searchQuery]);

  if (guides.length === 0) {
    return (
      <div id="growing-guides" className="lg:col-span-3 mt-4 lg:mt-0">
        <div className="bg-white p-12 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-medium text-fungi-bark mb-2">No guides found</h3>
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

  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      'beginner': 'bg-green-500',
      'species-specific': 'bg-blue-500',
      'techniques': 'bg-yellow-500',
      'equipment': 'bg-purple-500',
      'advanced': 'bg-red-500',
      'medicinal': 'bg-teal-500',
      'outdoor': 'bg-green-700',
      'troubleshooting': 'bg-orange-500',
      'culinary': 'bg-pink-500',
    };
    
    return categoryColors[category] || 'bg-gray-500';
  };

  return (
    <div id="growing-guides" className="lg:col-span-3 mt-4 lg:mt-0">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium text-fungi-bark mb-1">
          {categoryFilter === 'all' ? 'All Growing Guides' : 
            `${categoryFilter.charAt(0).toUpperCase()}${categoryFilter.slice(1).replace(/-/g, ' ')} Guides`}
        </h3>
        <p className="text-gray-600 text-sm mb-1">
          {guides.length} guides found
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Card key={guide.id} className="overflow-hidden h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <Badge className={`${getCategoryColor(guide.category)} text-white`}>
                  {guide.category.replace(/-/g, ' ')}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-fungi-green">{guide.title}</CardTitle>
              <CardDescription className="text-gray-600">{guide.excerpt}</CardDescription>
            </CardHeader>
            
            <CardContent className="pb-2 flex-grow">
              <div className="flex items-center text-gray-500 text-sm gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{guide.publishDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{guide.readTime}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {guide.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
                {guide.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{guide.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="pt-0 flex justify-between">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-fungi-brown hover:text-fungi-green"
              >
                <Bookmark className="h-4 w-4 mr-1" />
                Save
              </Button>
              
              <Button 
                variant="outline" 
                className="text-fungi-green hover:bg-fungi-green hover:text-white"
              >
                Read Guide
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}