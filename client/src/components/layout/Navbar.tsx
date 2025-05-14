import { useState } from "react";
import { Link } from "wouter";
import { NAV_ITEMS, COMPANY_NAME } from "@/lib/constants";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-fungi-cream shadow-sm sticky top-8 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <svg
                  className="h-10 w-10 text-fungi-green"
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
                <span className="ml-2 text-xl font-bold text-fungi-green font-montserrat">
                  {COMPANY_NAME}
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-fungi-green hover:text-fungi-moss px-3 py-2 text-sm font-medium font-montserrat"
              >
                {item.name}
              </a>
            ))}
            <div className="ml-4 flex items-center">
              <button className="bg-fungi-green p-1 rounded-full text-fungi-cream hover:bg-fungi-bark focus:outline-none">
                <ShoppingBag className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className="bg-fungi-cream p-2 rounded-md text-fungi-green hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-fungi-cream border-t">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-fungi-green hover:text-fungi-moss block px-3 py-2 text-base font-medium font-montserrat"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center mt-4">
              <button className="bg-fungi-green p-2 rounded-full text-fungi-cream hover:bg-fungi-bark focus:outline-none">
                <ShoppingBag className="h-6 w-6" />
              </button>
              <span className="ml-3 text-fungi-green font-medium">Cart</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
