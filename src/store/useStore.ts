import { create } from 'zustand';
import { User, Opportunity } from '../types';
import { calculateDistance } from '../utils/distance';

interface Store {
  user: User | null;
  opportunities: Opportunity[];
  selectedOpportunity: Opportunity | null;
  userLocation: { lat: number; lng: number } | null;
  maxDistance: number;
  setUser: (user: User | null) => void;
  setOpportunities: (opportunities: Opportunity[]) => void;
  setSelectedOpportunity: (opportunity: Opportunity | null) => void;
  setUserLocation: (location: { lat: number; lng: number }) => void;
  setMaxDistance: (distance: number) => void;
  getFilteredOpportunities: () => Opportunity[];
}

export const useStore = create<Store>((set, get) => ({
  user: null,
  opportunities: [],
  selectedOpportunity: null,
  userLocation: null,
  maxDistance: 10,
  setUser: (user) => set({ user }),
  setOpportunities: (opportunities) => set({ opportunities }),
  setSelectedOpportunity: (opportunity) => set({ selectedOpportunity: opportunity }),
  setUserLocation: (location) => set({ userLocation: location }),
  setMaxDistance: (distance) => set({ maxDistance: distance }),
  getFilteredOpportunities: () => {
    const { opportunities, userLocation, maxDistance } = get();
    
    if (!userLocation) return opportunities;
    
    return opportunities.filter(opportunity => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        opportunity.location.lat,
        opportunity.location.lng
      );
      return distance <= maxDistance;
    });
  },
}));