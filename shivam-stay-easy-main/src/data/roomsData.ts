
export interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  sharing: number;
  gender: 'Boys' | 'Girls' | 'Any';
  amenities: string[];
  imageUrl: string;
  availability: number;
}

export const rooms: Room[] = [
  {
    id: 1,
    title: "Deluxe Twin Sharing",
    description: "Spacious room with twin beds, study table, and attached bathroom.",
    price: 8500,
    sharing: 2,
    gender: 'Boys',
    amenities: ['Wi-Fi', 'Attached Bathroom', 'Study Table', 'Air Conditioner', 'Daily Housekeeping'],
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    availability: 4,
  },
  {
    id: 2,
    title: "Premium Triple Sharing",
    description: "Premium room with three beds, spacious wardrobe, and modern amenities.",
    price: 7500,
    sharing: 3,
    gender: 'Boys',
    amenities: ['Wi-Fi', 'Shared Bathroom', 'Wardrobe', 'Air Conditioner', 'Daily Housekeeping'],
    imageUrl: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    availability: 2,
  },
  {
    id: 3,
    title: "Standard Four Sharing",
    description: "Economical option with four beds and basic amenities for students on budget.",
    price: 6000,
    sharing: 4,
    gender: 'Boys',
    amenities: ['Wi-Fi', 'Shared Bathroom', 'Study Table', 'Ceiling Fan', 'Weekly Housekeeping'],
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    availability: 8,
  },
  {
    id: 4,
    title: "Deluxe Twin Sharing",
    description: "Elegant room with twin beds and premium furnishings for ladies.",
    price: 8500,
    sharing: 2,
    gender: 'Girls',
    amenities: ['Wi-Fi', 'Attached Bathroom', 'Study Table', 'Air Conditioner', 'Daily Housekeeping'],
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    availability: 6,
  },
  {
    id: 5,
    title: "Premium Triple Sharing",
    description: "Comfortable room with three beds and ample space for study and storage.",
    price: 7500,
    sharing: 3,
    gender: 'Girls',
    amenities: ['Wi-Fi', 'Shared Bathroom', 'Wardrobe', 'Air Conditioner', 'Daily Housekeeping'],
    imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    availability: 3,
  },
  {
    id: 6,
    title: "Standard Four Sharing",
    description: "Budget-friendly option with essential amenities for female students.",
    price: 6000,
    sharing: 4,
    gender: 'Girls',
    amenities: ['Wi-Fi', 'Shared Bathroom', 'Study Table', 'Ceiling Fan', 'Weekly Housekeeping'],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    availability: 5,
  },
];

export interface Resident {
  id: number;
  name: string;
  contact: string;
  roomId: number;
  gender: 'Male' | 'Female';
  joiningDate: string;
  rentDue: number;
  electricityBill: number;
  waterBill: number;
}

export const residents: Resident[] = [
  {
    id: 1,
    name: "Amit Kumar",
    contact: "9876543210",
    roomId: 1,
    gender: "Male",
    joiningDate: "2023-01-15",
    rentDue: 0,
    electricityBill: 350,
    waterBill: 120
  },
  {
    id: 2,
    name: "Rahul Sharma",
    contact: "9876543211",
    roomId: 1,
    gender: "Male",
    joiningDate: "2023-02-10",
    rentDue: 8500,
    electricityBill: 420,
    waterBill: 120
  },
  {
    id: 3,
    name: "Priya Patel",
    contact: "9876543212",
    roomId: 4,
    gender: "Female",
    joiningDate: "2023-01-20",
    rentDue: 0,
    electricityBill: 310,
    waterBill: 120
  },
  {
    id: 4,
    name: "Neha Singh",
    contact: "9876543213",
    roomId: 4,
    gender: "Female",
    joiningDate: "2023-03-05",
    rentDue: 0,
    electricityBill: 390,
    waterBill: 120
  },
  {
    id: 5,
    name: "Saurabh Verma",
    contact: "9876543214",
    roomId: 2,
    gender: "Male",
    joiningDate: "2022-12-10",
    rentDue: 7500,
    electricityBill: 480,
    waterBill: 120
  },
  {
    id: 6,
    name: "Deepak Gupta",
    contact: "9876543215",
    roomId: 2,
    gender: "Male",
    joiningDate: "2023-02-15",
    rentDue: 0,
    electricityBill: 320,
    waterBill: 120
  }
];

export interface Facility {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export const facilities: Facility[] = [
  {
    id: 1,
    name: "High-Speed Wi-Fi",
    description: "24/7 high-speed internet access for seamless connectivity",
    icon: "wifi"
  },
  {
    id: 2,
    name: "Dining Area",
    description: "Clean and spacious dining area with quality food service",
    icon: "utensils"
  },
  {
    id: 3,
    name: "Housekeeping",
    description: "Regular cleaning and maintenance of rooms and common areas",
    icon: "broom"
  },
  {
    id: 4,
    name: "Security",
    description: "24/7 security with CCTV surveillance for your safety",
    icon: "shield"
  },
  {
    id: 5,
    name: "Laundry",
    description: "In-house laundry service at nominal charges",
    icon: "shirt"
  },
  {
    id: 6,
    name: "Power Backup",
    description: "Uninterrupted power supply with backup generators",
    icon: "plug"
  }
];
