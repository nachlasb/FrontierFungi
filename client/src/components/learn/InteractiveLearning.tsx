import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  CheckCircle2,
  Clock,
  Star,
  Play,
  Download,
  BookOpen,
  MoveRight,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function InteractiveLearning() {
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  
  const pathways = [
    {
      id: "beginner",
      label: "Beginner",
      color: "bg-green-500",
      description: "Perfect for those just starting their mushroom growing journey, covering the fundamentals with step-by-step guidance.",
      level: "Easy",
      duration: "8 weeks",
      modules: 6,
      image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
      lessons: [
        {
          id: "intro-bg",
          title: "Introduction to Mushroom Cultivation",
          duration: "35 min",
          description: "Learn the basics of mushroom life cycles, cultivation methods, and what equipment you'll need to get started.",
          content: "This comprehensive introduction will teach you everything you need to know about mushroom biology, growth requirements, and basic cultivation techniques. We'll cover mushroom anatomy, reproduction, and different growing methods suitable for beginners."
        },
        {
          id: "workspace-bg",
          title: "Setting Up Your Growing Space",
          duration: "45 min",
          description: "Create an ideal environment for mushroom cultivation in your home with minimal equipment.",
          content: "In this lesson, you'll learn how to set up a simple but effective growing space using commonly available materials. We'll cover temperature control, humidity requirements, lighting, and ventilation needs for successful indoor cultivation."
        },
        {
          id: "substrate-bg",
          title: "Preparing Substrates",
          duration: "60 min",
          description: "Master the art of preparing and sterilizing different substrates for optimal mushroom growth.",
          content: "This hands-on lesson teaches you how to prepare various beginner-friendly substrates like coffee grounds, straw, and cardboard. You'll learn simple sterilization techniques using household equipment to create a clean growing medium."
        },
        {
          id: "inoculation-bg",
          title: "Inoculation Techniques",
          duration: "40 min",
          description: "Learn how to introduce mushroom cultures to your substrate with minimal contamination risk.",
          content: "This practical lesson demonstrates basic inoculation methods for beginners. You'll learn how to handle spawn, maintain cleanliness, and successfully transfer mycelium to your growing substrate using both spawn and liquid culture."
        },
        {
          id: "colonization-bg",
          title: "Colonization and Fruiting",
          duration: "50 min",
          description: "Guide your mushrooms through the colonization phase and trigger fruiting for your first harvest.",
          content: "This lesson covers the crucial stages of mycelium colonization and fruiting. You'll learn how to maintain optimal conditions, recognize healthy growth, and induce fruiting conditions using simple methods suitable for beginner species."
        },
        {
          id: "harvest-bg",
          title: "Harvesting and Beyond",
          duration: "45 min",
          description: "Harvest your mushrooms at peak maturity and prepare for your next growing cycle.",
          content: "In this final beginner lesson, you'll learn proper harvesting techniques, basic storage methods, and how to prepare for additional flushes. We'll also cover troubleshooting common beginner issues and how to maintain a continuous growing cycle."
        }
      ]
    },
    {
      id: "intermediate",
      label: "Intermediate",
      color: "bg-yellow-500",
      description: "For those with basic experience looking to expand their skills, species variety, and cultivation techniques.",
      level: "Medium",
      duration: "12 weeks",
      modules: 8,
      image: "https://images.pexels.com/photos/6044283/pexels-photo-6044283.jpeg?auto=compress&cs=tinysrgb&w=800",
      lessons: [
        {
          id: "advanced-methods-im",
          title: "Advanced Cultivation Methods",
          duration: "60 min",
          description: "Learn more sophisticated cultivation techniques for a wider variety of species.",
          content: "This lesson builds on basic knowledge to introduce more complex cultivation methods like log cultivation, bag culture, and monotub techniques. You'll learn which method works best for different species and how to adapt your growing approach."
        },
        {
          id: "lab-techniques-im",
          title: "Basic Lab Techniques",
          duration: "75 min",
          description: "Create a simple home lab setup and learn sterile techniques for mushroom cultivation.",
          content: "This comprehensive lesson introduces you to home laboratory practices, including creating a still air box, sterile transfer techniques, and maintaining cleanliness in your work area to minimize contamination risks."
        },
        {
          id: "agar-work-im",
          title: "Working with Agar",
          duration: "90 min",
          description: "Master the fundamentals of agar work for mycelium isolation and culture development.",
          content: "This hands-on lesson teaches you how to prepare agar plates, perform transfers, isolate healthy mycelium, and maintain cultures. You'll learn how agar work improves cultivation success and allows for genetic selection."
        },
        {
          id: "liquid-culture-im",
          title: "Creating Liquid Cultures",
          duration: "60 min",
          description: "Develop your own liquid cultures for faster colonization and efficient inoculation.",
          content: "This technical lesson shows you how to prepare, inoculate, and maintain liquid cultures for mushroom cultivation. You'll learn different recipe formulations, sterile injection techniques, and how to test cultures for contamination."
        },
        {
          id: "grain-spawn-im",
          title: "Grain Spawn Production",
          duration: "75 min",
          description: "Learn to create grain spawn for efficient substrate colonization.",
          content: "This detailed lesson covers the process of preparing various grain types, sterilization methods, inoculation techniques, and proper incubation for healthy spawn production. You'll also learn grain-to-grain transfer methods to expand your spawn."
        },
        {
          id: "substrate-formulas-im",
          title: "Advanced Substrate Formulations",
          duration: "60 min",
          description: "Create optimized substrate blends for different mushroom species.",
          content: "This specialized lesson teaches you how to formulate custom substrates with precise nutritional profiles for specific mushroom species. You'll learn about substrate supplements, pH balancing, and moisture content optimization."
        },
        {
          id: "indoor-fruiting-im",
          title: "Indoor Fruiting Chambers",
          duration: "50 min",
          description: "Design and build effective fruiting chambers for consistent harvests.",
          content: "This practical lesson demonstrates how to create fruiting chambers with automated humidity and fresh air exchange. You'll learn about different chamber designs, environmental control systems, and maintenance procedures."
        },
        {
          id: "challenging-species-im",
          title: "Growing Challenging Species",
          duration: "80 min",
          description: "Apply your intermediate skills to more demanding gourmet mushroom varieties.",
          content: "This advanced lesson focuses on applying your skills to more challenging species like Lion's Mane, King Oyster, and Maitake. You'll learn special requirements, troubleshooting techniques, and optimization strategies for these rewarding mushrooms."
        }
      ]
    },
    {
      id: "advanced",
      label: "Advanced",
      color: "bg-red-500",
      description: "Master complex cultivation techniques, lab protocols, and specialized production methods for rare species.",
      level: "Challenging",
      duration: "16 weeks",
      modules: 10,
      image: "https://images.pexels.com/photos/3735704/pexels-photo-3735704.jpeg?auto=compress&cs=tinysrgb&w=800",
      lessons: [
        {
          id: "lab-design-adv",
          title: "Advanced Lab Design & Management",
          duration: "90 min",
          description: "Design and operate a comprehensive cultivation laboratory for professional-level production.",
          content: "This expert lesson covers the creation of a complete cultivation laboratory with laminar flow hoods, pressure sterilization systems, and environmental controls. You'll learn about lab workflow design, contamination prevention protocols, and efficiency optimization."
        },
        {
          id: "genetics-adv",
          title: "Mushroom Genetics & Selection",
          duration: "120 min",
          description: "Understand genetic principles for strain development and preservation.",
          content: "This scientific lesson explores mushroom genetics, strain isolation, selection criteria, and preservation methods. You'll learn how to identify and isolate desirable traits and maintain genetic libraries of your cultures."
        },
        {
          id: "tissue-culture-adv",
          title: "Advanced Tissue Culture Techniques",
          duration: "100 min",
          description: "Master sophisticated tissue culture methods for strain isolation and development.",
          content: "This technical lesson demonstrates advanced tissue culture techniques including clone isolation, sectoring, strain crossing, and rejuvenation. You'll learn to work with microscopy to evaluate culture health and identify contamination."
        },
        {
          id: "exotic-species-adv",
          title: "Cultivating Exotic & Medicinal Species",
          duration: "110 min",
          description: "Learn specialized methods for rare and challenging mushroom varieties.",
          content: "This specialized lesson focuses on the unique requirements of exotic and medicinal species such as Cordyceps, Reishi, and Morels. You'll learn species-specific cultivation parameters, troubleshooting approaches, and optimization strategies."
        },
        {
          id: "outdoor-methods-adv",
          title: "Advanced Outdoor Cultivation",
          duration: "85 min",
          description: "Develop large-scale outdoor growing operations for sustainable production.",
          content: "This comprehensive lesson covers advanced outdoor cultivation methods including log cultivation, totem stacking, bed preparation, and shaded fruiting areas. You'll learn about seasonal cycles, pest management, and maximizing yield in natural environments."
        },
        {
          id: "automation-adv",
          title: "Cultivation System Automation",
          duration: "95 min",
          description: "Design automated systems for consistent environmental control and production.",
          content: "This engineering-focused lesson teaches you how to create automated cultivation systems with programmable controls for temperature, humidity, lighting, and fresh air exchange. You'll learn about sensor integration, monitoring, and remote management."
        },
        {
          id: "production-scaling-adv",
          title: "Scaling Production & Efficiency",
          duration: "100 min",
          description: "Optimize workflow and resources for commercial-scale mushroom production.",
          content: "This business-oriented lesson explores methods for scaling cultivation from hobby to commercial production. You'll learn about workflow optimization, resource management, batch scheduling, and maintaining quality through scale changes."
        },
        {
          id: "contamination-adv",
          title: "Advanced Contamination Control",
          duration: "90 min",
          description: "Develop protocols for identifying, preventing, and addressing contamination issues.",
          content: "This critical lesson provides in-depth knowledge of contamination sources, identification methods, and remediation techniques. You'll learn microscopy for contaminant identification, developing lab protocols, and implementing systematic prevention measures."
        },
        {
          id: "substrate-design-adv",
          title: "Scientific Substrate Design",
          duration: "110 min",
          description: "Formulate precise substrate compositions based on scientific principles.",
          content: "This technical lesson covers the scientific approach to substrate formulation including carbon-to-nitrogen ratios, mineral supplementation, pH management, and moisture optimization. You'll learn testing methods and iterative improvement processes."
        },
        {
          id: "experimental-methods-adv",
          title: "Experimental Cultivation Methods",
          duration: "120 min",
          description: "Explore cutting-edge techniques and conduct your own cultivation experiments.",
          content: "This innovative lesson encourages experimentation with novel techniques, species combinations, and growing parameters. You'll learn how to design experiments, control variables, document results, and contribute to the evolving field of mycology."
        }
      ]
    }
  ];

  return (
    <section className="bg-fungi-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white bg-fungi-green py-4 rounded-md mb-6">Interactive Learning Pathways</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Follow structured courses designed for your skill level. Each pathway includes video lessons, downloadable resources, and hands-on projects with expert guidance.
          </p>
        </div>

        <Tabs defaultValue="beginner" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="beginner" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                Beginner
              </TabsTrigger>
              <TabsTrigger value="intermediate" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                Intermediate
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Advanced
              </TabsTrigger>
            </TabsList>
          </div>

          {pathways.map((pathway) => (
            <TabsContent key={pathway.id} value={pathway.id} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-sm">
                <div className="md:col-span-1">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img 
                      src={pathway.image} 
                      alt={pathway.label} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className={`h-5 w-5 ${pathway.id === 'beginner' ? 'text-green-500' : pathway.id === 'intermediate' ? 'text-yellow-500' : 'text-red-500'} mr-2`} />
                      <span>Difficulty: {pathway.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-500 mr-2" />
                      <span>Duration: {pathway.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                      <span>{pathway.modules} Modules</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className={`w-full ${
                      pathway.id === 'beginner' ? 'bg-green-500 hover:bg-green-600' : 
                      pathway.id === 'intermediate' ? 'bg-yellow-500 hover:bg-yellow-600' : 
                      'bg-red-500 hover:bg-red-600'
                    } text-white`}>
                      Start This Pathway
                    </Button>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className={`text-xl font-bold ${
                    pathway.id === 'beginner' ? 'text-green-500' : 
                    pathway.id === 'intermediate' ? 'text-yellow-500' : 
                    'text-red-500'
                  } mb-2`}>
                    {pathway.label} Pathway
                  </h3>
                  <p className="text-gray-600 mb-6">{pathway.description}</p>
                  
                  <h4 className="text-fungi-bark font-semibold mb-3">Pathway Modules:</h4>
                  <div className="space-y-3">
                    {pathway.lessons.map((lesson, index) => (
                      <div 
                        key={lesson.id}
                        className="flex items-center bg-fungi-cream hover:bg-fungi-cream/80 p-3 rounded-lg cursor-pointer transition-colors"
                        onClick={() => setSelectedLesson({...lesson, pathwayId: pathway.id})}
                      >
                        <span className={`flex items-center justify-center h-6 w-6 rounded-full ${
                          pathway.id === 'beginner' ? 'bg-green-500' : 
                          pathway.id === 'intermediate' ? 'bg-yellow-500' : 
                          'bg-red-500'
                        } text-white text-sm mr-3`}>
                          {index + 1}
                        </span>
                        <div className="flex-grow">
                          <h5 className="font-medium text-fungi-bark">{lesson.title}</h5>
                          <p className="text-sm text-gray-500">{lesson.duration}</p>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-fungi-green hover:text-white hover:bg-fungi-green"
                            >
                              <Play className="h-4 w-4 mr-1" />
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-fungi-green">
                                {lesson.title}
                              </DialogTitle>
                              <DialogDescription>
                                Module {index + 1} in {pathway.label} Pathway | {lesson.duration}
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="mt-4">
                              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                                <div className="text-center">
                                  <Play className="h-16 w-16 text-fungi-green mx-auto mb-2" />
                                  <p className="text-gray-500">Video preview available in your course dashboard</p>
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-semibold text-fungi-bark mb-2">
                                About This Lesson
                              </h3>
                              <p className="text-gray-600 mb-4">
                                {lesson.content}
                              </p>
                              
                              <div className="bg-fungi-cream p-4 rounded-lg my-6">
                                <h4 className="font-semibold text-fungi-bark mb-2">What You'll Learn</h4>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                    <span>Key techniques and skills specific to this module</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                    <span>Scientific principles behind the cultivation process</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                    <span>Practical applications and troubleshooting methods</span>
                                  </li>
                                </ul>
                              </div>
                              
                              <div className="flex flex-wrap gap-4 mt-6">
                                <Button className="bg-fungi-green hover:bg-fungi-bark">
                                  Enroll in Pathway
                                </Button>
                                <Button variant="outline" className="text-fungi-green border-fungi-green">
                                  <Download className="h-4 w-4 mr-1" />
                                  Sample Resources
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-4">
                <Button 
                  variant="outline" 
                  className="border-fungi-green text-fungi-green hover:bg-fungi-green hover:text-white"
                >
                  Download {pathway.label} Pathway Syllabus <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-fungi-green mb-4">Track Your Learning Progress</h3>
          <p className="text-gray-600 mb-6">
            Create an account to track your progress through each pathway, earn completion certificates, and access exclusive resources.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-fungi-brown hover:bg-fungi-bark">
              Create Free Account
            </Button>
            <Button variant="outline" className="border-fungi-green text-fungi-green hover:bg-fungi-green hover:text-white">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}