import { Button } from "@/components/ui/button";
import { 
  Play, 
  Clock, 
  Award,
  MonitorPlay
} from "lucide-react";

export default function VideoTutorials() {
  const tutorials = [
    {
      title: "Getting Started with Oyster Mushrooms",
      thumbnail: "https://images.pexels.com/photos/6044215/pexels-photo-6044215.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "18:24",
      level: "Beginner",
      instructor: "Dr. Sarah Johnson",
      description: "Learn the basics of growing oyster mushrooms at home with simple equipment and techniques."
    },
    {
      title: "Creating a Laminar Flow Hood",
      thumbnail: "https://images.pexels.com/photos/3735704/pexels-photo-3735704.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "32:10",
      level: "Advanced",
      instructor: "Michael Chen",
      description: "Step-by-step guide to building your own laminar flow hood for sterile work."
    },
    {
      title: "Log Cultivation Methods",
      thumbnail: "https://images.pexels.com/photos/1627825/pexels-photo-1627825.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "25:43",
      level: "Intermediate",
      instructor: "Emma Wilson",
      description: "Traditional techniques for outdoor log cultivation of shiitake and other wood-loving species."
    },
    {
      title: "Liquid Culture Preparation",
      thumbnail: "https://images.pexels.com/photos/7262909/pexels-photo-7262909.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "15:36",
      level: "Intermediate",
      instructor: "Dr. James Lee",
      description: "Create and maintain liquid cultures for faster colonization and clean inoculation."
    },
  ];

  return (
    <div className="bg-fungi-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-fungi-green section-heading">
              Video Tutorials
            </h2>
            <p className="mt-2 text-gray-600 max-w-3xl">
              Watch expert-led demonstrations and step-by-step guides for all aspects of mushroom cultivation
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Button className="bg-fungi-brown hover:bg-opacity-90 flex items-center">
              <MonitorPlay className="mr-2 h-5 w-5" />
              View All Tutorials
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button className="rounded-full h-14 w-14 flex items-center justify-center bg-fungi-green hover:bg-fungi-bark">
                    <Play className="h-6 w-6 text-white" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {tutorial.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Award className={`h-4 w-4 ${
                    tutorial.level === 'Beginner' ? 'text-green-500' :
                    tutorial.level === 'Intermediate' ? 'text-yellow-500' :
                    'text-red-500'
                  } mr-1`} />
                  <span className="text-xs text-gray-600">{tutorial.level}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-fungi-bark mb-1 font-montserrat line-clamp-1">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Instructor: {tutorial.instructor}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {tutorial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}