
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-pgpurple-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-pgpurple-400"></div>
        <div className="absolute -left-10 -bottom-10 h-96 w-96 rounded-full bg-pgpurple-300"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Find Your Perfect <span className="text-pgpurple-200">PG Accommodation</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-md">
              Comfortable, safe and affordable paying guest accommodation with modern amenities for students and working professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-pgpurple-700 hover:bg-gray-100">
                <Link to="/rooms">Browse Rooms</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-pgpurple-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="PG Accommodation" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
