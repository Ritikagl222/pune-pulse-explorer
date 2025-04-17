
import { MapPin, Star, Wifi, Coffee, Utensils, PartyPopper } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const hotels = [
  {
    id: 1,
    name: "The Ritz Pune",
    description: "Luxury 5-star hotel offering world-class amenities, fine dining restaurants, a spa, and elegant rooms with stunning city views.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    location: "Koregaon Park, Pune",
    rating: 4.8,
    price: "₹12,000 per night",
    amenities: ["Pool", "Spa", "Restaurant", "Bar", "Gym"],
    tags: ["Luxury", "Family-friendly"]
  },
  {
    id: 2,
    name: "Hotel Blue Diamond",
    description: "Centrally located 4-star hotel with comfortable rooms, multiple dining options, a rooftop pool, and excellent service at a reasonable price.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
    location: "Koregaon Park, Pune",
    rating: 4.5,
    price: "₹6,500 per night",
    amenities: ["Pool", "Restaurant", "Bar", "Gym"],
    tags: ["Business", "Mid-range"]
  },
  {
    id: 3,
    name: "Zostel Pune",
    description: "Vibrant hostel offering affordable dormitories and private rooms with a social atmosphere, perfect for backpackers and budget travelers.",
    image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?q=80&w=2069&auto=format&fit=crop",
    location: "Viman Nagar, Pune",
    rating: 4.4,
    price: "₹800 per night",
    amenities: ["Free Wifi", "Common Area", "Cafe", "Events"],
    tags: ["Budget", "Backpacker"]
  },
];

const Hotels = () => {
  return (
    <section id="hotels" className="py-16 bg-pune-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pune-teal font-montserrat">
            Where to Stay in Pune
          </h2>
          <div className="mt-2 mx-auto w-20 h-1 bg-pune-orange rounded"></div>
          <p className="mt-6 text-lg text-pune-dark/80 max-w-3xl mx-auto">
            From luxury hotels to budget-friendly options, find the perfect accommodation for your stay in Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="pune-card bg-white h-full flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  {hotel.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/90 text-pune-teal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-pune-teal font-montserrat">{hotel.name}</h3>
                  <div className="flex items-center bg-pune-gold/10 px-2 py-1 rounded">
                    <Star size={16} className="text-pune-gold fill-pune-gold" />
                    <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="mt-3 flex items-center text-sm text-pune-dark/70">
                  <MapPin size={16} className="mr-1" />
                  <span>{hotel.location}</span>
                </div>
                
                <p className="mt-4 text-pune-dark flex-grow">{hotel.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {hotel.amenities.includes("Wifi") && (
                    <Badge variant="outline" className="flex items-center gap-1 text-pune-dark/70">
                      <Wifi size={14} /> Wifi
                    </Badge>
                  )}
                  {hotel.amenities.includes("Restaurant") && (
                    <Badge variant="outline" className="flex items-center gap-1 text-pune-dark/70">
                      <Utensils size={14} /> Restaurant
                    </Badge>
                  )}
                  {hotel.amenities.includes("Cafe") && (
                    <Badge variant="outline" className="flex items-center gap-1 text-pune-dark/70">
                      <Coffee size={14} /> Cafe
                    </Badge>
                  )}
                  {hotel.amenities.includes("Events") && (
                    <Badge variant="outline" className="flex items-center gap-1 text-pune-dark/70">
                      <PartyPopper size={14} /> Events
                    </Badge>
                  )}
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="font-medium text-pune-orange">{hotel.price}</span>
                  <Button className="bg-pune-orange hover:bg-pune-orange/90 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-pune-teal text-pune-teal hover:bg-pune-teal/5">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
