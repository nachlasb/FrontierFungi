import { Button } from "@/components/ui/button";
import { Check, Monitor, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function StamBotSection() {
  const features = [
    "Receive real-time cultivation advice and troubleshooting",
    "Ask questions about any stage of the growing process",
    "Get personalized recommendations based on your setup",
    "Upload photos for visual issue identification",
  ];

  return (
    <section className="py-16 bg-fungi-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-fungi-green mb-4 section-heading">
              Meet StamBot
            </h2>
            <h3 className="text-xl text-fungi-bark mb-6 font-montserrat">
              Your AI Mushroom Growing Assistant
            </h3>
            <p className="text-gray-600 mb-6">
              StamBot combines advanced AI technology with expert mycological
              knowledge to provide personalized guidance throughout your growing
              journey.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-fungi-green mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-fungi-bark text-white hover:bg-opacity-90 font-montserrat">
              Learn More About StamBot
            </Button>
          </div>

          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4 border-b pb-4">
              <h4 className="font-semibold text-fungi-green font-montserrat">
                StamBot Assistant
              </h4>
              <span className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded-full">
                Online
              </span>
            </div>

            <div className="space-y-4 mb-4">
              <div className="flex items-start">
                <div className="bg-fungi-green rounded-full h-8 w-8 flex items-center justify-center text-white mr-2 flex-shrink-0">
                  <Monitor className="h-5 w-5" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[85%]">
                  <p className="text-sm">
                    Hi there! I'm StamBot, your mushroom cultivation assistant.
                    How can I help you today?
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-end">
                <div className="bg-fungi-green bg-opacity-10 rounded-lg p-3 max-w-[85%]">
                  <p className="text-sm">
                    My Blue Oyster mushrooms aren't fruiting. It's been 2 weeks
                    since I started the fruiting conditions.
                  </p>
                </div>
                <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center ml-2 flex-shrink-0">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-fungi-green rounded-full h-8 w-8 flex items-center justify-center text-white mr-2 flex-shrink-0">
                  <Monitor className="h-5 w-5" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[85%]">
                  <p className="text-sm">
                    Blue Oysters typically need high humidity (85-95%) and good
                    fresh air exchange to trigger fruiting. Could you check your
                    humidity levels and increase air circulation? Also, what
                    temperature are you maintaining?
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Ask StamBot a question..."
                  className="flex-1 border rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-fungi-green focus:border-fungi-green"
                />
                <Button className="rounded-l-none bg-fungi-green text-white hover:bg-opacity-90">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
