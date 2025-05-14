import { SOCIAL_GALLERY_IMAGES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function SocialGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-fungi-green text-center mb-4 section-heading">
          From Our Community
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Follow us @frontierfungi and tag your harvests with #GrowWithFrontier
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {SOCIAL_GALLERY_IMAGES.map((image) => (
            <img
              key={image.id}
              className="h-40 w-full object-cover rounded-md hover:opacity-90 transition-opacity duration-300"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center text-fungi-green hover:text-fungi-moss transition-colors duration-150"
          >
            <span>Follow us on Instagram</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
