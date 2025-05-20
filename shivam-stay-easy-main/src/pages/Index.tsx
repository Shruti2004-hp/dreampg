
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { facilities } from "@/data/roomsData";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/roomsData";
import { Link } from "react-router-dom";

const Index = () => {
  // Display only featured rooms (3 rooms)
  const featuredRooms = rooms.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Banner Section */}
        <Banner />
        
        {/* About Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Welcome to <span className="text-pgpurple-500">Shivam PG</span></h2>
                <p className="text-gray-600 mb-6">
                  Shivam PG provides comfortable and affordable accommodation for students and working professionals. 
                  Our paying guest facilities are designed to give you a home-like environment with all modern amenities.
                </p>
                <p className="text-gray-600 mb-6">
                  Located in prime areas with excellent connectivity, our PGs are the perfect choice for those looking for safe, convenient, 
                  and budget-friendly accommodation options.
                </p>
                <Button asChild className="bg-pgpurple-500 hover:bg-pgpurple-600">
                  <Link to="/pg-info">Learn More About Us</Link>
                </Button>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80" 
                  alt="Shivam PG Building" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Rooms */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Featured Accommodations</h2>
              <p className="text-gray-600">Discover our most popular room options</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRooms.map(room => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild className="bg-pgpurple-500 hover:bg-pgpurple-600">
                <Link to="/rooms">View All Rooms</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Facilities */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Facilities</h2>
              <p className="text-gray-600">We provide modern amenities for your comfort</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map(facility => (
                <Card key={facility.id} className="card-hover border-0 shadow-sm">
                  <CardContent className="flex items-start p-6">
                    <div className="w-12 h-12 bg-pgpurple-100 rounded-full flex items-center justify-center mr-4 text-pgpurple-600">
                      <span className="text-xl">
                        {facility.icon === "wifi" && "📶"}
                        {facility.icon === "utensils" && "🍽️"}
                        {facility.icon === "broom" && "🧹"}
                        {facility.icon === "shield" && "🛡️"}
                        {facility.icon === "shirt" && "👕"}
                        {facility.icon === "plug" && "🔌"}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{facility.name}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-pgpurple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect PG Room?</h2>
            <p className="text-xl text-pgpurple-100 mb-8 max-w-2xl mx-auto">
              Browse our available rooms and choose the best option for your stay. 
              We have options for both boys and girls with various sharing configurations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-pgpurple-700 hover:bg-gray-100">
                <Link to="/rooms">Browse Rooms</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white hover:text-pgpurple-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
