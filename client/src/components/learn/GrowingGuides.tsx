import { GROWING_GUIDES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, BookOpen, Filter } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function GrowingGuides() {
  const [selectedGuide, setSelectedGuide] = useState<(typeof GROWING_GUIDES)[0] | null>(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories from guides
  const categories = Array.from(new Set(GROWING_GUIDES.map(guide => guide.category)));

  // Filter guides based on selected category and search query
  const filteredGuides = GROWING_GUIDES.filter(guide => {
    const matchesCategory = filter === "all" || guide.category === filter;
    const matchesSearch = !searchQuery || 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
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
    return colors[category] || 'bg-gray-500';
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white bg-fungi-green py-4 rounded-md mb-6">Comprehensive Growing Guides</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our detailed guides cover everything from beginner basics to advanced cultivation techniques. 
            Find species-specific instructions and troubleshooting tips.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            className={filter === "all" ? "bg-fungi-green" : "border-fungi-green text-fungi-green"}
            onClick={() => setFilter("all")}
          >
            All Guides
          </Button>
          {categories.map((category) => (
            <Button 
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-fungi-green" : "border-fungi-green text-fungi-green"}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <Card key={guide.id} className="flex flex-col h-full">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className={`absolute top-2 right-2 ${getCategoryColor(guide.category)} text-white`}>
                  {guide.category.replace(/-/g, ' ')}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-fungi-green">{guide.title}</CardTitle>
                <CardDescription>{guide.excerpt}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{guide.readTime} read</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {guide.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => setSelectedGuide(guide)}
                      className="w-full bg-fungi-green hover:bg-fungi-bark"
                    >
                      Read Guide <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    {selectedGuide && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-fungi-green">
                            {selectedGuide.title}
                          </DialogTitle>
                          <DialogDescription>
                            Published: {selectedGuide.publishDate} | {selectedGuide.readTime} read
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid md:grid-cols-3 gap-6 mt-4">
                          <div className="md:col-span-1">
                            <img 
                              src={selectedGuide.image}
                              alt={selectedGuide.title}
                              className="w-full rounded-lg object-cover aspect-square"
                            />
                            <div className="mt-4">
                              <h4 className="font-semibold text-fungi-green mb-2">Guide Info</h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="font-semibold">Category:</span> {selectedGuide.category.replace(/-/g, ' ')}
                                </div>
                                <div>
                                  <span className="font-semibold">Tags:</span> {selectedGuide.tags.join(', ')}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="md:col-span-2">
                            <div className="prose max-w-none">
                              <p className="text-lg font-medium mb-4">{selectedGuide.excerpt}</p>
                              <div className="my-4">{selectedGuide.content}</div>
                              
                              <h3 className="text-xl font-semibold text-fungi-green mt-6 mb-2">Key Takeaways</h3>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Learn the optimal growing conditions for this species</li>
                                <li>Understand common challenges and troubleshooting tips</li>
                                <li>Master specific techniques for better yields</li>
                              </ul>
                              
                              <div className="mt-6 p-4 bg-fungi-cream rounded-lg">
                                <h4 className="font-semibold text-fungi-bark">Need Supplies?</h4>
                                <p className="text-sm mb-2">Find all the equipment and materials mentioned in this guide in our shop.</p>
                                <Button 
                                  variant="outline" 
                                  className="text-fungi-green border-fungi-green hover:bg-fungi-green hover:text-white"
                                  onClick={() => window.location.href = '/shop'}
                                >
                                  Shop Related Products
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredGuides.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-4">No guides found matching your criteria.</p>
            <Button onClick={() => {setFilter("all"); setSearchQuery("")}} className="bg-fungi-green">
              Reset Filters
            </Button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button className="bg-fungi-brown hover:bg-fungi-bark">
            Load More Guides
          </Button>
        </div>
      </div>
    </section>
  );
}