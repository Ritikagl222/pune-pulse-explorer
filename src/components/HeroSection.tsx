
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-pune-teal/90 to-pune-teal">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=2070&auto=format&fit=crop"
          alt="Pune City"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center md:text-left md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-montserrat">
            Discover the Heart of <span className="text-pune-gold">Pune</span>
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl">
            Experience the perfect blend of traditional heritage and modern vibrancy in Maharashtra's cultural capital. From historic forts to thriving nightlife, Pune has something for everyone.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-white text-pune-teal hover:bg-white/90 text-lg px-8 py-6">
              Explore Attractions <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Plan Your Stay
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
