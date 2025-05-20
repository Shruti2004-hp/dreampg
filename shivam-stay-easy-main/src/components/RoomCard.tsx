
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Room } from "@/data/roomsData";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const { title, description, price, sharing, gender, amenities, imageUrl, availability } = room;
  
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className={`${
            gender === 'Boys' ? 'bg-blue-100 text-blue-800 border-blue-200' : 
            gender === 'Girls' ? 'bg-pink-100 text-pink-800 border-pink-200' : 
            'bg-purple-100 text-purple-800 border-purple-200'
          }`}>
            {gender}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 mb-3">
          {amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} variant="secondary" className="bg-pgpurple-50 text-pgpurple-700">
              {amenity}
            </Badge>
          ))}
          {amenities.length > 3 && (
            <Badge variant="secondary" className="bg-pgpurple-50 text-pgpurple-700">
              +{amenities.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">Monthly Rent</span>
            <p className="font-semibold text-lg">₹{price.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">{sharing} Sharing</span>
            <p className="text-sm font-medium text-green-600">{availability} available</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-pgpurple-500 hover:bg-pgpurple-600">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
