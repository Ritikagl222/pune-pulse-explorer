
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-pune-teal font-montserrat">Pune Pulse</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#places" className="text-pune-dark hover:text-pune-teal font-medium transition-colors">
              Places to Visit
            </a>
            <a href="#hotels" className="text-pune-dark hover:text-pune-teal font-medium transition-colors">
              Where to Stay
            </a>
            <a href="#food" className="text-pune-dark hover:text-pune-teal font-medium transition-colors">
              Local Cuisine
            </a>
            <Button variant="default" className="bg-pune-teal hover:bg-pune-teal/90">
              Plan Your Trip
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-pune-dark hover:text-pune-teal focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#places"
              className="block px-3 py-2 rounded-md text-base font-medium text-pune-dark hover:text-pune-teal"
            >
              Places to Visit
            </a>
            <a
              href="#hotels"
              className="block px-3 py-2 rounded-md text-base font-medium text-pune-dark hover:text-pune-teal"
            >
              Where to Stay
            </a>
            <a
              href="#food"
              className="block px-3 py-2 rounded-md text-base font-medium text-pune-dark hover:text-pune-teal"
            >
              Local Cuisine
            </a>
            <div className="px-3 py-2">
              <Button variant="default" className="w-full bg-pune-teal hover:bg-pune-teal/90">
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
