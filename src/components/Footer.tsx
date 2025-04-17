
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pune-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Pune Pulse</h3>
            <p className="text-white/80 mb-4">
              Your ultimate guide to exploring the cultural capital of Maharashtra. 
              Discover the best places, experiences, and flavors Pune has to offer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#places" className="text-white/80 hover:text-white transition-colors">
                  Tourist Attractions
                </a>
              </li>
              <li>
                <a href="#hotels" className="text-white/80 hover:text-white transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#food" className="text-white/80 hover:text-white transition-colors">
                  Local Cuisine
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Travel Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Events & Festivals
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-pune-gold" />
                <span className="text-white/80">FC Road, Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pune-gold" />
                <a href="mailto:info@punepulse.com" className="text-white/80 hover:text-white transition-colors">
                  info@punepulse.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-pune-gold" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-white transition-colors">
                  +91 9876543210
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest updates on Pune's attractions and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pune-gold"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-pune-gold text-pune-dark font-medium rounded hover:bg-pune-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Pune Pulse Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
