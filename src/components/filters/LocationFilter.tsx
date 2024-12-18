import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface Props {
  onLocationChange: (zipCode: string) => void;
}

export function LocationFilter({ onLocationChange }: Props) {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length !== 5 || !/^\d+$/.test(zipCode)) {
      setError('Please enter a valid 5-digit zip code');
      return;
    }
    setError('');
    onLocationChange(zipCode);
  };

  return (
    <div>
      <h3 className="flex items-center text-lg font-semibold mb-3">
        <MapPin className="w-5 h-5 mr-2" />
        Your Location
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <input
            type="text"
            placeholder="Enter ZIP code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full p-2 border rounded-lg"
            maxLength={5}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Distance Range</label>
            <input
              type="range"
              min="1"
              max="20"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>1 mile</span>
              <span>20 miles</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}