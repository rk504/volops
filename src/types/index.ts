export interface User {
  id: string;
  name: string;
  avatar: string;
  points: number;
  badges: Badge[];
  friends: string[];
  volunteeredHours: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  organization: string;
  date: string;
  duration: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  category: string;
  participants: string[];
  maxParticipants: number;
  skills: string[];
  image: string;
}