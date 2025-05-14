import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Slider
} from "@/components/ui/slider";
import {
  Thermometer,
  Droplets,
  Sun,
  Home,
  MapPin,
  Calendar,
  Leaf,
  Download,
  FileDown,
  FileText,
  AlertCircle
} from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export default function PersonalizedGrowingPlanner() {
  const [planGenerated, setPlanGenerated] = useState(false);
  const [inputMethod, setInputMethod] = useState("manual");
  
  // Form state
  const [location, setLocation] = useState("");
  const [growingSpace, setGrowingSpace] = useState("indoor");
  const [temperature, setTemperature] = useState([65, 75]);
  const [humidity, setHumidity] = useState([60, 80]);
  const [experience, setExperience] = useState("beginner");
  const [goal, setGoal] = useState("hobby");
  const [availableTime, setAvailableTime] = useState("medium");
  
  // Recommended species based on conditions
  const recommendedSpecies = [
    {
      name: "Blue Oyster",
      difficulty: "Beginner",
      timeline: "14-21 days",
      conditions: "Perfect for your temperature range",
      image: "https://images.pexels.com/photos/6260003/pexels-photo-6260003.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Lion's Mane",
      difficulty: "Intermediate",
      timeline: "21-28 days",
      conditions: "Well-suited to your indoor setup",
      image: "https://images.pexels.com/photos/15016562/pexels-photo-15016562.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Shiitake",
      difficulty: "Beginner",
      timeline: "30-90 days",
      conditions: "Adaptable to your humidity range",
      image: "https://images.pexels.com/photos/1627825/pexels-photo-1627825.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const handleGeneratePlan = () => {
    // In a real app, this would analyze the inputs and generate a plan
    setPlanGenerated(true);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white bg-fungi-green py-4 rounded-md mb-6">
            Personalized Growing Plan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Tell us about your environment and goals, and we'll create a customized 
            mushroom growing plan tailored to your specific conditions.
          </p>
        </div>

        <Tabs defaultValue={inputMethod} onValueChange={setInputMethod} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="manual" className="data-[state=active]:bg-fungi-green data-[state=active]:text-white">
                Enter Details Manually
              </TabsTrigger>
              <TabsTrigger value="location" className="data-[state=active]:bg-fungi-green data-[state=active]:text-white">
                Use Your Location
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="manual">
            <Card className="bg-fungi-cream border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-fungi-bark">Growing Environment Details</CardTitle>
                <CardDescription>
                  Tell us about your growing environment so we can recommend suitable species and techniques.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-fungi-bark font-medium mb-2 block">Growing Space</Label>
                    <RadioGroup defaultValue={growingSpace} onValueChange={setGrowingSpace} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="indoor" id="space-indoor" />
                        <Label htmlFor="space-indoor" className="flex items-center">
                          <Home className="h-4 w-4 mr-2 text-fungi-green" />
                          Indoor Space
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="outdoor" id="space-outdoor" />
                        <Label htmlFor="space-outdoor" className="flex items-center">
                          <Leaf className="h-4 w-4 mr-2 text-fungi-green" />
                          Outdoor Area
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="space-both" />
                        <Label htmlFor="space-both">Both Indoor & Outdoor</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-fungi-bark font-medium mb-2 block">Growing Experience</Label>
                    <RadioGroup defaultValue={experience} onValueChange={setExperience} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="exp-beginner" />
                        <Label htmlFor="exp-beginner">Complete Beginner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="some" id="exp-some" />
                        <Label htmlFor="exp-some">Some Experience</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="experienced" id="exp-experienced" />
                        <Label htmlFor="exp-experienced">Experienced Grower</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-fungi-bark font-medium mb-2 block">Temperature Range (°F)</Label>
                    <div className="pt-5 px-3">
                      <Slider
                        value={temperature}
                        min={40}
                        max={90}
                        step={1}
                        onValueChange={setTemperature}
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>{temperature[0]}°F</span>
                        <span>{temperature[1]}°F</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <Thermometer className="h-4 w-4 text-fungi-green mr-2" />
                      <span className="text-sm text-gray-600">
                        Your temperature range is suitable for most varieties
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-fungi-bark font-medium mb-2 block">Humidity Range (%)</Label>
                    <div className="pt-5 px-3">
                      <Slider
                        value={humidity}
                        min={20}
                        max={100}
                        step={1}
                        onValueChange={setHumidity}
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span>{humidity[0]}%</span>
                        <span>{humidity[1]}%</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <Droplets className="h-4 w-4 text-fungi-green mr-2" />
                      <span className="text-sm text-gray-600">
                        {humidity[0] >= 50 ? "Good humidity for fruiting" : "You may need to increase humidity"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-fungi-bark font-medium mb-2 block">Growing Goal</Label>
                    <Select defaultValue={goal} onValueChange={setGoal}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hobby">Hobby Growing</SelectItem>
                        <SelectItem value="gourmet">Gourmet Cooking</SelectItem>
                        <SelectItem value="medicinal">Medicinal Benefits</SelectItem>
                        <SelectItem value="small-business">Small Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-fungi-bark font-medium mb-2 block">Available Time</Label>
                    <Select defaultValue={availableTime} onValueChange={setAvailableTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time commitment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal (5-10 min/day)</SelectItem>
                        <SelectItem value="medium">Medium (15-30 min/day)</SelectItem>
                        <SelectItem value="dedicated">Dedicated (30+ min/day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-fungi-green hover:bg-fungi-bark"
                  onClick={handleGeneratePlan}
                >
                  Generate Personalized Growing Plan
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="location">
            <Card className="bg-fungi-cream border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-fungi-bark">Use Your Location</CardTitle>
                <CardDescription>
                  We'll analyze climate data for your region to create a tailored growing plan.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col space-y-4">
                  <Label htmlFor="location" className="text-fungi-bark font-medium">
                    Your Location
                  </Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="location" 
                      placeholder="Enter city, state or zip code" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="flex-grow"
                    />
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="border-fungi-green text-fungi-green hover:bg-fungi-green hover:text-white"
                    >
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Alert className="bg-white border-fungi-green">
                    <AlertCircle className="h-4 w-4 text-fungi-green" />
                    <AlertTitle>Location-Based Features</AlertTitle>
                    <AlertDescription>
                      We'll analyze seasonal temperature ranges, humidity patterns, and growing seasons 
                      to recommend the best varieties and techniques for your area.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <Label className="text-fungi-bark font-medium mb-2 block">Growing Space</Label>
                      <RadioGroup defaultValue={growingSpace} onValueChange={setGrowingSpace} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="indoor" id="loc-space-indoor" />
                          <Label htmlFor="loc-space-indoor" className="flex items-center">
                            <Home className="h-4 w-4 mr-2 text-fungi-green" />
                            Indoor Space
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="outdoor" id="loc-space-outdoor" />
                          <Label htmlFor="loc-space-outdoor" className="flex items-center">
                            <Leaf className="h-4 w-4 mr-2 text-fungi-green" />
                            Outdoor Area
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="loc-space-both" />
                          <Label htmlFor="loc-space-both">Both Indoor & Outdoor</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-fungi-bark font-medium mb-2 block">Growing Experience</Label>
                      <RadioGroup defaultValue={experience} onValueChange={setExperience} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id="loc-exp-beginner" />
                          <Label htmlFor="loc-exp-beginner">Complete Beginner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="some" id="loc-exp-some" />
                          <Label htmlFor="loc-exp-some">Some Experience</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="experienced" id="loc-exp-experienced" />
                          <Label htmlFor="loc-exp-experienced">Experienced Grower</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-fungi-green hover:bg-fungi-bark"
                  onClick={handleGeneratePlan}
                  disabled={!location.trim()}
                >
                  Generate Location-Based Growing Plan
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {planGenerated && (
          <div className="mt-12 bg-white p-6 border border-fungi-green rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-fungi-green mb-4">Your Personalized Growing Plan</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-fungi-bark mb-4">Recommended Species</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedSpecies.map((species, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-sm h-full">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={species.image} 
                        alt={species.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg text-fungi-green">{species.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 pb-2">
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex justify-between">
                          <span>Difficulty:</span>
                          <span className={
                            species.difficulty === "Beginner" ? "text-green-500" : 
                            species.difficulty === "Intermediate" ? "text-yellow-500" : 
                            "text-red-500"
                          }>{species.difficulty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Timeline:</span>
                          <span>{species.timeline}</span>
                        </div>
                        <p className="mt-2">{species.conditions}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button 
                        variant="outline" 
                        className="w-full text-fungi-green border-fungi-green hover:bg-fungi-green hover:text-white"
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-fungi-bark mb-4">Growing Schedule</h4>
              <div className="bg-fungi-cream p-4 rounded-lg">
                <div className="flex items-start mb-4">
                  <Calendar className="h-5 w-5 text-fungi-green mr-2 mt-1" />
                  <div>
                    <h5 className="font-medium text-fungi-bark">Optimal Starting Time</h5>
                    <p className="text-gray-600">
                      Based on your conditions, the best time to start is <span className="font-medium">now</span>. 
                      Your indoor environment provides controlled conditions suitable for year-round growing.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex">
                    <div className="w-24 font-medium text-fungi-bark">Week 1-2:</div>
                    <div className="text-gray-600">Inoculation and initial colonization period</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-medium text-fungi-bark">Week 3-4:</div>
                    <div className="text-gray-600">Complete colonization of substrate</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-medium text-fungi-bark">Week 5:</div>
                    <div className="text-gray-600">Initiate fruiting conditions</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 font-medium text-fungi-bark">Week 6-7:</div>
                    <div className="text-gray-600">Harvest first flush of mushrooms</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-fungi-bark mb-4">Recommended Setup</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-fungi-cream p-4 rounded-lg">
                  <h5 className="font-medium text-fungi-green mb-2">Equipment Recommendations</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Basic growing kit for beginners</li>
                    <li>Spray bottle for maintaining humidity</li>
                    <li>Thermometer and hygrometer for monitoring</li>
                    <li>Small humidifier (optional but recommended)</li>
                  </ul>
                </div>
                
                <div className="bg-fungi-cream p-4 rounded-lg">
                  <h5 className="font-medium text-fungi-green mb-2">Environment Adjustments</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Maintain temperature between {temperature[0]}-{temperature[1]}°F</li>
                    <li>Keep humidity at {humidity[0]}-{humidity[1]}% during fruiting</li>
                    <li>Provide indirect light for 12 hours daily</li>
                    <li>Ensure adequate fresh air exchange</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-fungi-green hover:bg-fungi-bark">
                <FileText className="mr-2 h-4 w-4" />
                View Complete Plan
              </Button>
              <Button variant="outline" className="border-fungi-green text-fungi-green hover:bg-fungi-green hover:text-white">
                <FileDown className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="border-fungi-green text-fungi-green hover:bg-fungi-green hover:text-white">
                <MapPin className="mr-2 h-4 w-4" />
                Shop Recommended Supplies
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}