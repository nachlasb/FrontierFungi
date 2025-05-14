import { Button } from "@/components/ui/button";

export default function LearnHowToGrow() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Culture",
      description: "Select from our diverse range of gourmet mushroom cultures based on your taste and experience level.",
    },
    {
      number: 2,
      title: "Prepare Your Setup",
      description: "Create the optimal growing environment with the right equipment and conditions for your chosen mushroom.",
    },
    {
      number: 3,
      title: "Innoculate & Incubate",
      description: "Introduce your culture to the substrate and maintain proper conditions during the crucial growth phase.",
    },
    {
      number: 4,
      title: "Harvest & Enjoy",
      description: "Harvest your fresh gourmet mushrooms at peak ripeness and enjoy your homegrown culinary delights.",
    },
  ];

  return (
    <section className="py-16 bg-fungi-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4 section-heading">
          Learn How to Grow
        </h2>
        <p className="text-center text-white text-opacity-90 mb-12 max-w-3xl mx-auto">
          Follow our simple process to start growing your own gourmet mushrooms at home
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-fungi-green text-white font-bold text-xl mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-fungi-bark mb-2 font-montserrat">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            className="px-6 py-3 bg-fungi-green text-white hover:bg-opacity-90 font-montserrat"
          >
            View Growing Guides
          </Button>
        </div>
      </div>
    </section>
  );
}
