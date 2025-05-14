import { GUIDE_CATEGORIES } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type ResourceFiltersProps = {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export default function ResourceFilters({
  categoryFilter,
  setCategoryFilter,
  searchQuery,
  setSearchQuery,
}: ResourceFiltersProps) {
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Guide Categories</h3>
        
        <RadioGroup 
          value={categoryFilter} 
          onValueChange={setCategoryFilter}
          className="space-y-2"
        >
          {GUIDE_CATEGORIES.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <RadioGroupItem value={category.id} id={`category-${category.id}`} />
              <Label 
                htmlFor={`category-${category.id}`}
                className={`cursor-pointer ${categoryFilter === category.id ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
              >
                {category.name}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Experience Level</h3>
          
          <RadioGroup defaultValue="all" className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="level-all" />
              <Label htmlFor="level-all" className="cursor-pointer text-gray-600">
                All Levels
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id="level-beginner" />
              <Label htmlFor="level-beginner" className="cursor-pointer text-gray-600">
                Beginner
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id="level-intermediate" />
              <Label htmlFor="level-intermediate" className="cursor-pointer text-gray-600">
                Intermediate
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id="level-advanced" />
              <Label htmlFor="level-advanced" className="cursor-pointer text-gray-600">
                Advanced
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Reading Time</h3>
          
          <RadioGroup defaultValue="all" className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="time-all" />
              <Label htmlFor="time-all" className="cursor-pointer text-gray-600">
                Any Length
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="short" id="time-short" />
              <Label htmlFor="time-short" className="cursor-pointer text-gray-600">
                Quick Reads (Under 10 min)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="time-medium" />
              <Label htmlFor="time-medium" className="cursor-pointer text-gray-600">
                Medium (10-20 min)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="long" id="time-long" />
              <Label htmlFor="time-long" className="cursor-pointer text-gray-600">
                In-Depth (20+ min)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Search Guides</h3>
          <Input 
            type="search" 
            placeholder="Search guides..." 
            className="w-full"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
}