import { Link } from "wouter";
import { COMPANY_NAME, FOOTER_LINKS } from "@/lib/constants";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fungi-green text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
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
                href="#"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
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
                  <a
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-opacity-100"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-opacity-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Company
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-opacity-100"
                  >
                    {link.name}
                  </a>
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
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white text-opacity-60 hover:text-opacity-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
