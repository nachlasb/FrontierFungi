import { DIFFICULTY_LEVELS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type CultureFiltersProps = {
  difficultyFilter: string;
  setDifficultyFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export default function CultureFilters({
  difficultyFilter,
  setDifficultyFilter,
  searchQuery,
  setSearchQuery,
}: CultureFiltersProps) {
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Culture Filters</h3>
        
        <div className="mb-6">
          <h4 className="text-fungi-green font-medium mb-3">Growing Difficulty</h4>
          <RadioGroup 
            value={difficultyFilter}
            onValueChange={setDifficultyFilter}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="difficulty-all" />
              <Label 
                htmlFor="difficulty-all"
                className={`cursor-pointer ${difficultyFilter === 'all' ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
              >
                All Difficulty Levels
              </Label>
            </div>
            
            {DIFFICULTY_LEVELS.filter(level => level.id !== 'all').map((level) => (
              <div key={level.id} className="flex items-center space-x-2">
                <RadioGroupItem value={level.id} id={`difficulty-${level.id}`} />
                <Label 
                  htmlFor={`difficulty-${level.id}`}
                  className={`cursor-pointer ${difficultyFilter === level.id ? 'text-fungi-green font-medium' : 'text-gray-600'}`}
                >
                  {level.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="text-fungi-green font-medium mb-3">Growing Conditions</h4>
          <RadioGroup defaultValue="any" className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="any" id="condition-any" />
              <Label htmlFor="condition-any" className="cursor-pointer text-gray-600">
                Any Conditions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="indoor" id="condition-indoor" />
              <Label htmlFor="condition-indoor" className="cursor-pointer text-gray-600">
                Indoor Only
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="outdoor" id="condition-outdoor" />
              <Label htmlFor="condition-outdoor" className="cursor-pointer text-gray-600">
                Outdoor Friendly
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="text-fungi-green font-medium mb-3">Substrate Type</h4>
          <RadioGroup defaultValue="any" className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="any" id="substrate-any" />
              <Label htmlFor="substrate-any" className="cursor-pointer text-gray-600">
                Any Substrate
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hardwood" id="substrate-hardwood" />
              <Label htmlFor="substrate-hardwood" className="cursor-pointer text-gray-600">
                Hardwood
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="straw" id="substrate-straw" />
              <Label htmlFor="substrate-straw" className="cursor-pointer text-gray-600">
                Straw
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compost" id="substrate-compost" />
              <Label htmlFor="substrate-compost" className="cursor-pointer text-gray-600">
                Compost
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h4 className="text-fungi-green font-medium mb-3">Search Cultures</h4>
          <Input 
            type="search" 
            placeholder="Search by name or description..." 
            className="w-full"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
}