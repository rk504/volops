import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function MapOverlay({ children }: Props) {
  return (
    <div className="relative z-10 pointer-events-none">
      <div className="pointer-events-auto">
        {children}
      </div>
    </div>
  );
}