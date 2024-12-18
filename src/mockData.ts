import { useStore } from './store/useStore';

const mockOpportunities = [
  {
    id: '1',
    title: 'Chinatown Food Bank',
    description: 'Help distribute food to elderly residents in Chinatown.',
    organization: 'SF Community Food Bank',
    date: '2025-03-15T09:00:00',
    duration: 4,
    location: {
      lat: 37.7941,
      lng: -122.4078,
      address: '731 Grant Ave, San Francisco, CA 94108'
    },
    category: 'Community',
    participants: ['user1', 'user2'],
    maxParticipants: 10,
    skills: ['Customer Service', 'Mandarin/Cantonese'],
    image: 'https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Haight Street Clean-up',
    description: 'Join us in keeping the Haight-Ashbury neighborhood beautiful.',
    organization: 'Haight Community Association',
    date: '2025-03-20T10:00:00',
    duration: 3,
    location: {
      lat: 37.7695,
      lng: -122.4483,
      address: '1500 Haight St, San Francisco, CA 94117'
    },
    category: 'Environment',
    participants: ['user3'],
    maxParticipants: 15,
    skills: ['Physical Labor', 'Environmental'],
    image: 'https://images.unsplash.com/photo-1617150119111-09bbb85178b0?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Presidio Trail Maintenance',
    description: 'Help maintain the beautiful hiking trails of the Presidio.',
    organization: 'Presidio Trust',
    date: '2025-03-22T08:00:00',
    duration: 5,
    location: {
      lat: 37.7989,
      lng: -122.4662,
      address: 'Presidio, San Francisco, CA 94129'
    },
    category: 'Environment',
    participants: ['user4', 'user5'],
    maxParticipants: 20,
    skills: ['Trail Work', 'Physical Labor'],
    image: 'https://images.unsplash.com/photo-1617150119111-09bbb85178b0?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    title: 'Ocean Beach Cleanup',
    description: 'Join our monthly beach cleanup to protect marine life.',
    organization: 'Ocean Guardians',
    date: '2025-03-25T09:00:00',
    duration: 4,
    location: {
      lat: 37.7594,
      lng: -122.5107,
      address: 'Great Highway, San Francisco, CA 94122'
    },
    category: 'Environment',
    participants: ['user6'],
    maxParticipants: 30,
    skills: ['Environmental', 'Physical Labor'],
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80'
  }
];

// Initialize store with mock data
useStore.getState().setOpportunities(mockOpportunities);