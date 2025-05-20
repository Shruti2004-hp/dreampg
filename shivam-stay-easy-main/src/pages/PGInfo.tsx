
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { facilities } from "@/data/roomsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const PGInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-pgpurple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">About Shivam PG</h1>
              <p className="text-xl text-pgpurple-100 mb-6">
                Providing comfortable and affordable paying guest accommodation since 2018.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Shivam PG was founded in 2018 with a vision to provide comfortable, safe, and affordable accommodation 
                  for students and working professionals. What started as a single building with just 10 rooms has now 
                  expanded to multiple locations across the city.
                </p>
                <p className="text-gray-600 mb-4">
                  Our commitment to quality service, cleanliness, and a homely environment has made us one of the 
                  most preferred PG accommodations in the area. We understand the needs of our residents and strive 
                  to provide facilities that make their stay comfortable and convenient.
                </p>
                <p className="text-gray-600">
                  Our team works tirelessly to maintain high standards of service and ensure that all residents 
                  feel at home away from home.
                </p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                  alt="Shivam PG Building" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Facilities Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Facilities</h2>
              <p className="text-gray-600">We provide a range of amenities to ensure a comfortable stay</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map(facility => (
                <Card key={facility.id} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 bg-pgpurple-100 rounded-full flex items-center justify-center text-pgpurple-600 mb-4">
                      <span className="text-xl">
                        {facility.icon === "wifi" && "📶"}
                        {facility.icon === "utensils" && "🍽️"}
                        {facility.icon === "broom" && "🧹"}
                        {facility.icon === "shield" && "🛡️"}
                        {facility.icon === "shirt" && "👕"}
                        {facility.icon === "plug" && "🔌"}
                      </span>
                    </div>
                    <CardTitle>{facility.name}</CardTitle>
                    <CardDescription>{facility.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Room Types Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Room Types</h2>
              <p className="text-gray-600">We offer various room configurations to suit different preferences</p>
            </div>
            
            <Tabs defaultValue="twin">
              <div className="flex justify-center mb-6">
                <TabsList>
                  <TabsTrigger value="twin">Twin Sharing</TabsTrigger>
                  <TabsTrigger value="triple">Triple Sharing</TabsTrigger>
                  <TabsTrigger value="four">Four Sharing</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="twin">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Deluxe Twin Sharing</h3>
                    <p className="text-gray-600 mb-4">
                      Our twin sharing rooms are ideal for those who prefer more personal space while still enjoying the 
                      benefits of shared accommodation. Each room comes with two comfortable beds, study tables, and ample 
                      storage space.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Two comfortable single beds</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Individual study tables and chairs</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Spacious wardrobes for each resident</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Air conditioner and adequate ventilation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Attached bathroom in most rooms</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-lg mb-2">Monthly Rent: ₹8,500 per person</p>
                    <Button asChild className="bg-pgpurple-500 hover:bg-pgpurple-600">
                      <Link to="/rooms">View Availability</Link>
                    </Button>
                  </div>
                  
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                      alt="Twin Sharing Room" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="triple">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Premium Triple Sharing</h3>
                    <p className="text-gray-600 mb-4">
                      Our triple sharing rooms offer a perfect balance between affordability and comfort. Each room is 
                      designed to accommodate three residents with adequate space for each person's belongings and activities.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Three comfortable single beds</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Shared study area with individual storage</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Individual wardrobes for each resident</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Air conditioner and ceiling fan</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Shared bathroom with hot water facility</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-lg mb-2">Monthly Rent: ₹7,500 per person</p>
                    <Button asChild className="bg-pgpurple-500 hover:bg-pgpurple-600">
                      <Link to="/rooms">View Availability</Link>
                    </Button>
                  </div>
                  
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Triple Sharing Room" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="four">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Standard Four Sharing</h3>
                    <p className="text-gray-600 mb-4">
                      Our four sharing rooms are the most economical option, perfect for students on a budget. Despite being 
                      cost-effective, these rooms are designed to provide all essential amenities for a comfortable stay.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Four single beds with comfortable mattresses</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Compact study areas</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Storage space for each resident</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Ceiling fans and adequate ventilation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>Shared bathroom facilities</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-lg mb-2">Monthly Rent: ₹6,000 per person</p>
                    <Button asChild className="bg-pgpurple-500 hover:bg-pgpurple-600">
                      <Link to="/rooms">View Availability</Link>
                    </Button>
                  </div>
                  
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Four Sharing Room" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Location</h2>
              <p className="text-gray-600">Conveniently located with excellent connectivity</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Address</h3>
                    <address className="not-italic text-gray-600 mb-6">
                      <p>Shivam PG</p>
                      <p>123 PG Street, Locality</p>
                      <p>City, State - 123456</p>
                    </address>
                    
                    <h3 className="text-xl font-bold mb-4">Nearby Landmarks</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>500m from Main Metro Station</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>1km from University Campus</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>2km from IT Park</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>Walking distance to shopping centers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map will be embedded here</p>
                {/* In a real implementation, you would embed a Google Map or similar here */}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-pgpurple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our PG?</h2>
            <p className="text-xl text-pgpurple-100 mb-6 max-w-2xl mx-auto">
              Browse our available rooms or contact us for more information and to book a visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-pgpurple-700 hover:bg-gray-100">
                <Link to="/rooms">Browse Rooms</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pgpurple-700">
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

export default PGInfo;
