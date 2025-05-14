import { useCallback } from "react";
import { useLocation } from "wouter";
import { COMPANY_NAME, FOOTER_LINKS } from "@/lib/constants";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  const [, setLocation] = useLocation();
  
  const navigate = useCallback((path: string) => {
    setLocation(path);
  }, [setLocation]);

  return (
    <footer className="bg-fungi-green text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div 
              className="flex items-center mb-4 cursor-pointer" 
              onClick={() => navigate("/")}
            >
              <svg
                className="h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold font-montserrat">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-white text-opacity-80 mb-4">
              Bringing sustainable mushroom cultivation to your home.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Shop</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.name}>
                  <span 
                    className="text-white text-opacity-80 hover:text-opacity-100 cursor-pointer"
                    onClick={() => navigate(link.href)}
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Learn
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.learn.map((link) => (
                <li key={link.name}>
                  <span 
                    className="text-white text-opacity-80 hover:text-opacity-100 cursor-pointer"
                    onClick={() => navigate(link.href)}
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <span 
                  className="text-white text-opacity-80 hover:text-opacity-100 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>
              </li>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <span 
                    className="text-white text-opacity-80 hover:text-opacity-100 cursor-pointer"
                    onClick={() => navigate(link.href)}
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white text-opacity-60">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap space-x-6">
            {FOOTER_LINKS.legal.map((link) => (
              <span 
                key={link.name}
                className="text-sm text-white text-opacity-60 hover:text-opacity-100 cursor-pointer"
                onClick={() => navigate(link.href)}
              >
                {link.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
