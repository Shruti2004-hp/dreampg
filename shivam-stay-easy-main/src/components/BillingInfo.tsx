
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { residents } from "@/data/roomsData";

const BillingInfo = () => {
  const [month, setMonth] = useState("May");
  const [year, setYear] = useState("2025");
  
  const totalRent = residents.reduce((sum, resident) => sum + resident.rentDue, 0);
  const totalElectricity = residents.reduce((sum, resident) => sum + resident.electricityBill, 0);
  const totalWater = residents.reduce((sum, resident) => sum + resident.waterBill, 0);
  const totalRevenue = totalRent + totalElectricity + totalWater;
  
  const pendingPayments = residents.filter(resident => resident.rentDue > 0).length;
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Billing Dashboard</h2>
        
        <div className="flex gap-2">
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m) => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {["2023", "2024", "2025"].map((y) => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button className="bg-pgpurple-500 hover:bg-pgpurple-600">Generate Report</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl">₹{totalRevenue.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              {month} {year}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Rent Due</CardDescription>
            <CardTitle className="text-2xl">₹{totalRent.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              {pendingPayments} residents with pending rent
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Electricity Bills</CardDescription>
            <CardTitle className="text-2xl">₹{totalElectricity.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              {residents.length} residents
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Water Bills</CardDescription>
            <CardTitle className="text-2xl">₹{totalWater.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">
              {residents.length} residents
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending Payments</TabsTrigger>
          <TabsTrigger value="paid">Paid Residents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Residents with Pending Payments</CardTitle>
              <CardDescription>
                List of residents who have pending rent or bills for {month} {year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Room</th>
                    <th className="text-right py-2">Rent Due</th>
                    <th className="text-right py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {residents
                    .filter(resident => resident.rentDue > 0)
                    .map(resident => (
                      <tr key={resident.id} className="border-b">
                        <td className="py-3">{resident.name}</td>
                        <td className="py-3">Room {resident.roomId}</td>
                        <td className="text-right py-3 text-red-500">₹{resident.rentDue.toLocaleString()}</td>
                        <td className="text-right py-3">
                          <Button size="sm" variant="outline">Send Reminder</Button>
                        </td>
                      </tr>
                    ))}
                  {residents.filter(resident => resident.rentDue > 0).length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-4 text-gray-500">
                        No pending payments for this period
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Export List</Button>
              <Button className="bg-pgpurple-500 hover:bg-pgpurple-600">Send Reminders to All</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="paid">
          <Card>
            <CardHeader>
              <CardTitle>Residents with Completed Payments</CardTitle>
              <CardDescription>
                List of residents who have paid all dues for {month} {year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Room</th>
                    <th className="text-right py-2">Payment Date</th>
                    <th className="text-right py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {residents
                    .filter(resident => resident.rentDue === 0)
                    .map(resident => (
                      <tr key={resident.id} className="border-b">
                        <td className="py-3">{resident.name}</td>
                        <td className="py-3">Room {resident.roomId}</td>
                        <td className="text-right py-3">05-{month}-{year}</td>
                        <td className="text-right py-3 text-green-500">₹8,500</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Export List</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingInfo;
