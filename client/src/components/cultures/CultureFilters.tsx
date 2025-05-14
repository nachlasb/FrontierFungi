import { DIFFICULTY_LEVELS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

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
  const substrateTypes = [
    { id: "hardwood", label: "Hardwood" },
    { id: "straw", label: "Straw" },
    { id: "sawdust", label: "Sawdust" },
    { id: "coffee", label: "Coffee Grounds" },
    { id: "logs", label: "Logs" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Difficulty Level</h3>
        
        <RadioGroup 
          value={difficultyFilter} 
          onValueChange={setDifficultyFilter}
          className="space-y-2"
        >
          {DIFFICULTY_LEVELS.map((level) => (
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

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Substrate Types</h3>
          
          <div className="space-y-2">
            {substrateTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox id={`substrate-${type.id}`} />
                <Label 
                  htmlFor={`substrate-${type.id}`}
                  className="cursor-pointer text-gray-600"
                >
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Growing Temperature</h3>
          
          <RadioGroup defaultValue="all" className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="temp-all" />
              <Label htmlFor="temp-all" className="cursor-pointer text-gray-600">
                All Temperatures
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cold" id="temp-cold" />
              <Label htmlFor="temp-cold" className="cursor-pointer text-gray-600">
                Cold (40-55°F)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cool" id="temp-cool" />
              <Label htmlFor="temp-cool" className="cursor-pointer text-gray-600">
                Cool (55-65°F)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="moderate" id="temp-moderate" />
              <Label htmlFor="temp-moderate" className="cursor-pointer text-gray-600">
                Moderate (65-75°F)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="warm" id="temp-warm" />
              <Label htmlFor="temp-warm" className="cursor-pointer text-gray-600">
                Warm (75-85°F)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border-t border-gray-200 my-6 pt-6">
          <h3 className="text-lg font-medium text-fungi-bark mb-4 font-montserrat">Search Cultures</h3>
          <Input 
            type="search" 
            placeholder="Search by name..." 
            className="w-full"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
}