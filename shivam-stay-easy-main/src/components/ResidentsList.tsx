import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import { getPGs, addPG } from "@/api";

interface PG {
  _id?: string;
  name: string;
  address: string;
  rooms: number;
  price: number;
  description: string;
}

const ResidentsList = () => {
  const [pgs, setPGs] = useState<PG[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  // Add state for Add PG form
  const [showAddPG, setShowAddPG] = useState(false);
  const [pgForm, setPGForm] = useState({ name: "", address: "", rooms: 0, price: 0, description: "" });
  const [loading, setLoading] = useState(false);

  // Fetch PGs from backend
  const fetchPGs = async () => {
    const data = await getPGs();
    setPGs(data);
  };

  useEffect(() => {
    fetchPGs();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPGs = pgs.filter(pg =>
    pg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pg.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add PG submit handler
  const handlePGChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPGForm({ ...pgForm, [e.target.name]: e.target.value });
  };

  const handlePGSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    const res = await addPG(pgForm, token || "");
    setLoading(false);
    if (res && res._id) {
      toast({ title: "PG Added", description: "New PG has been added." });
      setShowAddPG(false);
      setPGForm({ name: "", address: "", rooms: 0, price: 0, description: "" });
      fetchPGs(); // Refresh the list
    } else {
      toast({ title: "Error", description: res?.message || "Failed to add PG." });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search by name or address..."
            className="pl-9"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Button
          className="bg-pgpurple-500 hover:bg-pgpurple-600"
          onClick={() => setShowAddPG(!showAddPG)}
        >
          {showAddPG ? "Close" : "Add New PG"}
        </Button>
      </div>

      {showAddPG && (
        <form onSubmit={handlePGSubmit} className="bg-white p-4 rounded shadow space-y-3">
          <div className="flex gap-2">
            <Input
              name="name"
              value={pgForm.name}
              onChange={handlePGChange}
              placeholder="PG Name"
              required
            />
            <Input
              name="address"
              value={pgForm.address}
              onChange={handlePGChange}
              placeholder="Address"
              required
            />
          </div>
          <div className="flex gap-2">
            <Input
              name="rooms"
              type="number"
              value={pgForm.rooms}
              onChange={handlePGChange}
              placeholder="Rooms"
              required
            />
            <Input
              name="price"
              type="number"
              value={pgForm.price}
              onChange={handlePGChange}
              placeholder="Price"
              required
            />
          </div>
          <textarea
            name="description"
            value={pgForm.description}
            onChange={handlePGChange}
            placeholder="Description"
            className="w-full border rounded p-2"
            required
          />
          <Button type="submit" className="bg-pgpurple-600 text-white" disabled={loading}>
            {loading ? "Adding..." : "Add PG"}
          </Button>
        </form>
      )}

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Rooms</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPGs.length > 0 ? (
              filteredPGs.map((pg) => (
                <TableRow key={pg._id}>
                  <TableCell className="font-medium">{pg.name}</TableCell>
                  <TableCell>{pg.address}</TableCell>
                  <TableCell>{pg.rooms}</TableCell>
                  <TableCell>₹{pg.price}</TableCell>
                  <TableCell>{pg.description}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                  No PGs found
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
