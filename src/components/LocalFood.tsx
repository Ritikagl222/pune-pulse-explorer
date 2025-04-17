
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const foods = [
  {
    id: 1,
    name: "Misal Pav",
    description: "A spicy curry made of sprouted moth beans topped with crunchy farsan, served with bread rolls. It's a beloved breakfast dish in Pune.",
    image: "https://images.unsplash.com/photo-1606491048802-8342506d6471?q=80&w=2874&auto=format&fit=crop",
    bestAt: "Shri Kala Snacks, JM Road",
    rating: 4.7,
    price: "₹80 - ₹120"
  },
  {
    id: 2,
    name: "Vada Pav",
    description: "The ultimate street food of Maharashtra - a spicy potato fritter sandwiched in a bread roll with chutneys. Pune has some of the best vada pav stalls.",
    image: "https://images.unsplash.com/photo-1606755456206-b25206cde9ed?q=80&w=2874&auto=format&fit=crop",
    bestAt: "Garden Vada Pav, FC Road",
    rating: 4.6,
    price: "₹20 - ₹40"
  },
  {
    id: 3,
    name: "Mastani",
    description: "Pune's famous dessert drink - a thick milkshake topped with ice cream, dry fruits, and fresh fruits. Perfect for hot summer days.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2825&auto=format&fit=crop",
    bestAt: "Sujata Mastani, Multiple Locations",
    rating: 4.9,
    price: "₹120 - ₹180"
  },
  {
    id: 4,
    name: "Bhakri Zunka",
    description: "A traditional Maharashtrian dish consisting of spiced chickpea flour (zunka) served with millet flatbread (bhakri).",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop",
    bestAt: "Maratha Samrat, Deccan",
    rating: 4.5,
    price: "₹150 - ₹200"
  },
  {
    id: 5,
    name: "Shrewsbury Biscuits",
    description: "Buttery, crumbly cookies that are a specialty of Pune's iconic Kayani Bakery. These melt-in-mouth treats are a must-buy souvenir.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=2073&auto=format&fit=crop",
    bestAt: "Kayani Bakery, East Street",
    rating: 4.8,
    price: "₹300 - ₹400 per box"
  },
  {
    id: 6,
    name: "Puran Poli",
    description: "A sweet flatbread stuffed with a lentil and jaggery mixture, traditionally served during festivals but available year-round in Pune.",
    image: "https://images.unsplash.com/photo-1605197161470-5d0657e80388?q=80&w=2069&auto=format&fit=crop",
    bestAt: "Pune Sweet Home, Kothrud",
    rating: 4.6,
    price: "₹60 - ₹80 per piece"
  }
];

const LocalFood = () => {
  return (
    <section id="food" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pune-teal font-montserrat">
            Must-Try Pune Delicacies
          </h2>
          <div className="mt-2 mx-auto w-20 h-1 bg-pune-orange rounded"></div>
          <p className="mt-6 text-lg text-pune-dark/80 max-w-3xl mx-auto">
            From street food to sweet treats, discover the diverse flavors that make Pune a culinary delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div key={food.id} className="group pune-card bg-white overflow-hidden h-full">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold text-xl font-montserrat">{food.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-pune-dark/70">
                    <MapPin size={16} className="mr-1" />
                    <span className="font-medium text-pune-orange">Best at: {food.bestAt}</span>
                  </div>
                  <div className="flex items-center bg-pune-gold/10 px-2 py-1 rounded">
                    <Star size={16} className="text-pune-gold fill-pune-gold" />
                    <span className="ml-1 text-sm font-medium">{food.rating}</span>
                  </div>
                </div>
                
                <p className="text-pune-dark">{food.description}</p>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-medium text-pune-teal">{food.price}</span>
                  <Button variant="ghost" className="text-pune-orange hover:text-pune-orange/90 p-0 h-auto">
                    Find Locations <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-pune-orange hover:bg-pune-orange/90 text-white">
            Explore Food Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocalFood;
