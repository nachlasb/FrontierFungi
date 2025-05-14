import { useState, useEffect } from "react";
import { MUSHROOM_CULTURES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CultureListProps = {
  difficultyFilter: string;
  searchQuery: string;
};

export default function CultureList({ difficultyFilter, searchQuery }: CultureListProps) {
  const [cultures, setCultures] = useState(MUSHROOM_CULTURES);

  useEffect(() => {
    let filtered = [...MUSHROOM_CULTURES];
    
    // Apply difficulty filter
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(culture => culture.difficulty === difficultyFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(culture => 
        culture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        culture.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setCultures(filtered);
  }, [difficultyFilter, searchQuery]);

  if (cultures.length === 0) {
    return (
      <div id="cultures" className="lg:col-span-3 mt-4 lg:mt-0">
        <div className="bg-white p-12 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-medium text-fungi-bark mb-2">No cultures found</h3>
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner Friendly':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Advanced':
        return 'bg-orange-500';
      case 'Expert':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div id="cultures" className="lg:col-span-3 mt-4 lg:mt-0">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium text-fungi-bark mb-1">
          {difficultyFilter === 'all' ? 'All Mushroom Cultures' : difficultyFilter}
        </h3>
        <p className="text-gray-600 text-sm mb-1">
          {cultures.length} cultures found
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cultures.map((culture) => (
          <Card key={culture.id} className="overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={culture.image}
                alt={culture.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 mb-2 mr-2">
                <Badge className={`${getDifficultyColor(culture.difficulty)} text-white`}>
                  {culture.difficulty}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-fungi-bark">{culture.name}</CardTitle>
              <CardDescription>{culture.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-semibold text-fungi-green">Growing Temp:</span>
                  <span className="ml-1 text-gray-600">{culture.growing_temp}</span>
                </div>
                <div>
                  <span className="font-semibold text-fungi-green">Fruiting Time:</span>
                  <span className="ml-1 text-gray-600">{culture.fruiting_time}</span>
                </div>
                <div>
                  <span className="font-semibold text-fungi-green">Yield:</span>
                  <span className="ml-1 text-gray-600">{culture.yield}</span>
                </div>
                <div>
                  <span className="font-semibold text-fungi-green">Price:</span>
                  <span className="ml-1 text-gray-600">${culture.price.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between pt-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex gap-1">
                    <Info className="h-4 w-4" />
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-fungi-green">{culture.name}</DialogTitle>
                    <DialogDescription>Species Information & Growing Guide</DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <img 
                        src={culture.image}
                        alt={culture.name}
                        className="w-full rounded-lg object-cover aspect-square"
                      />
                    </div>
                    <div>
                      <p className="mb-4">{culture.description}</p>
                      
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                          <div className="font-semibold text-fungi-green">Growing Temp:</div>
                          <div>{culture.growing_temp}</div>
                          
                          <div className="font-semibold text-fungi-green">Fruiting Time:</div>
                          <div>{culture.fruiting_time}</div>
                          
                          <div className="font-semibold text-fungi-green">Yield:</div>
                          <div>{culture.yield}</div>
                          
                          <div className="font-semibold text-fungi-green">Difficulty:</div>
                          <div>{culture.difficulty}</div>
                          
                          <div className="font-semibold text-fungi-green">Substrate:</div>
                          <div>{culture.substrate}</div>
                          
                          <div className="font-semibold text-fungi-green">Flavor Profile:</div>
                          <div>{culture.flavor_profile}</div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="w-full bg-fungi-green hover:bg-fungi-bark">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart - ${culture.price.toFixed(2)}
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button className="bg-fungi-green hover:bg-fungi-bark">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}