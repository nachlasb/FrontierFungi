import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-green text-center mb-12 section-heading">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-fungi-cream rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 rounded-full bg-fungi-green text-white flex items-center justify-center">
                  <span className="font-medium">{testimonial.author.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium text-fungi-bark">
                    {testimonial.author.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
