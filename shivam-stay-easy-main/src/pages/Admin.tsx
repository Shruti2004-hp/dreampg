
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResidentsList from "@/components/ResidentsList";
import BillingInfo from "@/components/BillingInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { rooms, residents } from "@/data/roomsData";

const Admin = () => {
  // In a real app, you would implement proper authentication here
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  // Dashboard statistics
  const totalRooms = rooms.length;
  const totalResidents = residents.length;
  const occupancyRate = Math.round((totalResidents / (totalRooms * 3)) * 100); // Assuming average of 3 beds per room
  const totalPendingAmount = residents.reduce((sum, resident) => sum + resident.rentDue, 0);
  
  // Display login form for unauthenticated users
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <Card className="w-full max-w-md p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
            <p className="text-center text-gray-600 mb-4">Please log in to access the admin dashboard</p>
            {/* Login form would go here in a real app */}
            <div className="text-center mt-4">
              <button 
                className="bg-pgpurple-500 text-white px-4 py-2 rounded hover:bg-pgpurple-600"
                onClick={() => setIsAuthenticated(true)}
              >
                Mock Login (For Demo Purpose)
              </button>
            </div>
          </Card>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500">Welcome back, Admin</p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-6">
              <h2 className="text-sm text-gray-500 mb-1">Total Rooms</h2>
              <p className="text-3xl font-bold">{totalRooms}</p>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-sm text-gray-500 mb-1">Residents</h2>
              <p className="text-3xl font-bold">{totalResidents}</p>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-sm text-gray-500 mb-1">Occupancy Rate</h2>
              <p className="text-3xl font-bold">{occupancyRate}%</p>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-sm text-gray-500 mb-1">Pending Amount</h2>
              <p className="text-3xl font-bold text-red-500">₹{totalPendingAmount.toLocaleString()}</p>
            </Card>
          </div>
          
          {/* Main Tabs */}
          <Tabs defaultValue="residents" className="space-y-6">
            <TabsList className="mb-6">
              <TabsTrigger value="residents">Residents</TabsTrigger>
              <TabsTrigger value="billing">Billing & Payments</TabsTrigger>
              <TabsTrigger value="rooms">Room Management</TabsTrigger>
              <TabsTrigger value="queries">User Queries</TabsTrigger>
            </TabsList>
            
            <TabsContent value="residents" className="space-y-6">
              <ResidentsList />
            </TabsContent>
            
            <TabsContent value="billing">
              <BillingInfo />
            </TabsContent>
            
            <TabsContent value="rooms">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Room Management</h2>
                <p className="text-gray-600 mb-4">
                  View and manage room allocations, maintenance requests, and availability.
                </p>
                <div className="text-gray-500 text-center py-10">
                  Room management interface would be implemented here in a real application
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="queries">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">User Queries</h2>
                <p className="text-gray-600 mb-4">
                  View and respond to user queries submitted through the contact form.
                </p>
                <div className="text-gray-500 text-center py-10">
                  User queries management interface would be implemented here in a real application
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
