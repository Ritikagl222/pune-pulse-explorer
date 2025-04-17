
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TouristPlaces from "@/components/TouristPlaces";
import Hotels from "@/components/Hotels";
import LocalFood from "@/components/LocalFood";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TouristPlaces />
      <Hotels />
      <LocalFood />
      <Footer />
    </div>
  );
};

export default Index;
