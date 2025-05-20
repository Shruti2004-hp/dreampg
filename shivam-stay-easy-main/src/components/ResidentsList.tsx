
import { useState } from "react";
import { Resident, residents as initialResidents } from "@/data/roomsData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const ResidentsList = () => {
  const [residents, setResidents] = useState<Resident[]>(initialResidents);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredResidents = residents.filter(resident =>
    resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resident.contact.includes(searchTerm)
  );

  const updateBill = (id: number, field: 'electricityBill' | 'waterBill', value: number) => {
    const updatedResidents = residents.map(resident => {
      if (resident.id === id) {
        return { ...resident, [field]: value };
      }
      return resident;
    });
    
    setResidents(updatedResidents);
    
    toast({
      title: "Bill Updated",
      description: "The bill has been updated successfully.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search by name or contact..."
            className="pl-9"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Button className="bg-pgpurple-500 hover:bg-pgpurple-600">Add New Resident</Button>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Rent Due</TableHead>
              <TableHead>Electricity Bill</TableHead>
              <TableHead>Water Bill</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredResidents.length > 0 ? (
              filteredResidents.map((resident) => (
                <TableRow key={resident.id}>
                  <TableCell className="font-medium">{resident.name}</TableCell>
                  <TableCell>{resident.contact}</TableCell>
                  <TableCell>Room {resident.roomId}</TableCell>
                  <TableCell>{resident.gender}</TableCell>
                  <TableCell className={resident.rentDue > 0 ? "text-red-500" : "text-green-500"}>
                    ₹{resident.rentDue}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="mr-2">₹{resident.electricityBill}</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => updateBill(resident.id, "electricityBill", resident.electricityBill + 50)}
                      >
                        Update
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="mr-2">₹{resident.waterBill}</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => updateBill(resident.id, "waterBill", resident.waterBill + 20)}
                      >
                        Update
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost">Details</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-4 text-gray-500">
                  No residents found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ResidentsList;
