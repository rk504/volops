import { ReactNode } from 'react';
import { Header } from './Header';
import { Map } from '../Map.tsx';

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Map Section */}
      <section className="relative h-[400px] z-0">
        <Map />
      </section>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>
    </div>
  );
}
