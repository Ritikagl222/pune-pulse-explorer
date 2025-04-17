
import { MapPin, Clock, Star } from "lucide-react";
import { Button } from "./ui/button";

const places = [
  {
    id: 1,
    name: "Shaniwar Wada",
    description: "Historic fortification and palace built in 1732, once the seat of the Peshwa rulers. Known for its magnificent architecture and nightly light and sound show.",
    image: "https://images.unsplash.com/photo-1617526676547-0572abb7b34d?q=80&w=2070&auto=format&fit=crop",
    location: "Shaniwar Peth, Pune",
    rating: 4.6,
    hours: "8:00 AM - 6:30 PM",
    price: "₹50 for Indians, ₹300 for foreigners"
  },
  {
    id: 2,
    name: "Aga Khan Palace",
    description: "A majestic historical building and now a memorial to Mahatma Gandhi, where he was detained during the Quit India Movement. Beautiful gardens surround this architectural marvel.",
    image: "https://images.unsplash.com/photo-1574866609689-2724ecaa15d9?q=80&w=2070&auto=format&fit=crop",
    location: "Nagar Road, Pune",
    rating: 4.5,
    hours: "9:00 AM - 5:30 PM",
    price: "₹25 for Indians, ₹300 for foreigners"
  },
  {
    id: 3,
    name: "Sinhagad Fort",
    description: "An ancient fortress located on a hill about 30 km from Pune city. Offers breathtaking panoramic views and a glimpse into Maharashtra's military history.",
    image: "https://images.unsplash.com/photo-1616127558736-6b27e6a08040?q=80&w=2070&auto=format&fit=crop",
    location: "Sinhagad Road, Pune",
    rating: 4.8,
    hours: "24 hours (best visited during daylight)",
    price: "₹50 entrance fee"
  },
];

const TouristPlaces = () => {
  return (
    <section id="places" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pune-teal font-montserrat">
            Must-Visit Places in Pune
          </h2>
          <div className="mt-2 mx-auto w-20 h-1 bg-pune-orange rounded"></div>
          <p className="mt-6 text-lg text-pune-dark/80 max-w-3xl mx-auto">
            Explore Pune's rich heritage and natural beauty through these iconic attractions that showcase the city's cultural depth and historical significance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <div key={place.id} className="pune-card bg-white">
              <div className="h-56 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-pune-teal font-montserrat">{place.name}</h3>
                  <div className="flex items-center bg-pune-gold/10 px-2 py-1 rounded">
                    <Star size={16} className="text-pune-gold fill-pune-gold" />
                    <span className="ml-1 text-sm font-medium">{place.rating}</span>
                  </div>
                </div>
                
                <div className="mt-3 flex items-center text-sm text-pune-dark/70">
                  <MapPin size={16} className="mr-1" />
                  <span>{place.location}</span>
                </div>
                
                <div className="mt-1 flex items-center text-sm text-pune-dark/70">
                  <Clock size={16} className="mr-1" />
                  <span>{place.hours}</span>
                </div>
                
                <p className="mt-4 text-pune-dark">{place.description}</p>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm font-medium text-pune-teal">{place.price}</span>
                  <Button variant="outline" className="border-pune-teal text-pune-teal hover:bg-pune-teal/5">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-pune-teal hover:bg-pune-teal/90 text-white">
            Explore All Attractions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TouristPlaces;
