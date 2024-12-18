import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { MapContainer } from './components/map/MapContainer';
import { MapOverlay } from './components/map/MapOverlay';
import { OpportunityCard } from './components/OpportunityCard';
import { UserProfile } from './components/UserProfile';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { useStore } from './store/useStore';
import { Signup } from './components/signup/Signup'; // Import the signup component

function App() {
  const { opportunities, user } = useStore();

  // Temporary mock data
  const mockUser = {
    id: '1',
    name: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150?u=jane',
    points: 750,
    badges: [
      { id: '1', name: 'First Timer', icon: 'star', description: 'Completed first volunteer activity' },
      { id: '2', name: 'Helper', icon: 'heart', description: 'Helped 10 causes' },
    ],
    friends: ['2', '3', '4'],
    volunteeredHours: 48,
  };

  return (
  // App.tsx
  <MainLayout>
    {/* Map Section */}
    <MapContainer />

    {/* Sign-Up Form */}
    <section className="relative z-10 p-4 mt-8">
      <Signup />  {/* Adding the signup component here */}
    </section>

    {/* Map Overlay and Other Content */}
    <MapOverlay>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <UserProfile user={mockUser} />
          </div>

          <div className="col-span-9 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {opportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>

            <ReviewsSection />
          </div>
        </div>
      </main>
    </MapOverlay>
  </MainLayout>
  );
}

export default App;