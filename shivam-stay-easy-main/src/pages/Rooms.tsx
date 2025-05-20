
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import { Room, rooms } from "@/data/roomsData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Rooms = () => {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    sharing: "all",
    gender: "all",
    priceRange: [6000, 9000],
  });
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters
  useEffect(() => {
    const filtered = rooms.filter(room => {
      const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           room.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSharing = filters.sharing === "all" || room.sharing === parseInt(filters.sharing);
      
      const matchesGender = filters.gender === "all" || 
                            (filters.gender === "Boys" && room.gender === "Boys") ||
                            (filters.gender === "Girls" && room.gender === "Girls");
      
      const matchesPrice = room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1];
      
      return matchesSearch && matchesSharing && matchesGender && matchesPrice;
    });
    
    setFilteredRooms(filtered);
  }, [searchTerm, filters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (key: string, value: string | number[]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      sharing: "all",
      gender: "all",
      priceRange: [6000, 9000],
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-pgpurple-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Available Rooms</h1>
            <p className="text-pgpurple-100">
              Browse through our selection of comfortable and affordable rooms
            </p>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="bg-white py-6 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              {/* Search */}
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search rooms..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              
              {/* Filter Toggle Button (Mobile) */}
              <div className="md:hidden">
                <Button 
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-center"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
              
              {/* Desktop Filters */}
              <div className="hidden md:flex items-center gap-4">
                <Select 
                  value={filters.sharing.toString()}
                  onValueChange={(value) => handleFilterChange("sharing", value)}
                >
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Sharing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="2">2 Sharing</SelectItem>
                    <SelectItem value="3">3 Sharing</SelectItem>
                    <SelectItem value="4">4 Sharing</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select 
                  value={filters.gender} 
                  onValueChange={(value) => handleFilterChange("gender", value)}
                >
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Boys">Boys</SelectItem>
                    <SelectItem value="Girls">Girls</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="ghost" onClick={resetFilters}>
                  Reset
                </Button>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="md:hidden mt-4 p-4 bg-gray-50 rounded-md animate-fade-in">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Room Sharing</label>
                    <Select 
                      value={filters.sharing.toString()}
                      onValueChange={(value) => handleFilterChange("sharing", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sharing" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="2">2 Sharing</SelectItem>
                        <SelectItem value="3">3 Sharing</SelectItem>
                        <SelectItem value="4">4 Sharing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Gender</label>
                    <Select 
                      value={filters.gender} 
                      onValueChange={(value) => handleFilterChange("gender", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="Boys">Boys</SelectItem>
                        <SelectItem value="Girls">Girls</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Price Range: ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                    </label>
                    <Slider
                      defaultValue={[6000, 9000]}
                      min={5000}
                      max={10000}
                      step={500}
                      value={filters.priceRange}
                      onValueChange={(value) => handleFilterChange("priceRange", value)}
                      className="my-4"
                    />
                  </div>
                  
                  <Button variant="outline" onClick={resetFilters} className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Rooms List Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Gender Tabs (Alternative Filter) */}
            <Tabs defaultValue="all" className="mb-8" onValueChange={(value) => handleFilterChange("gender", value)}>
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Rooms</TabsTrigger>
                  <TabsTrigger value="Boys">Boys</TabsTrigger>
                  <TabsTrigger value="Girls">Girls</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
            
            {filteredRooms.length > 0 ? (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  Showing {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRooms.map(room => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No rooms found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rooms;
