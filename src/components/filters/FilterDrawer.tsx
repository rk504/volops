import { X, Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { useState } from 'react';
import { LocationFilter } from './LocationFilter';
import { useStore } from '../../store/useStore';
import { getCoordinatesFromZipCode } from '../../utils/distance';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterDrawer({ isOpen, onClose }: Props) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { setUserLocation } = useStore();

  if (!isOpen) return null;

  const categories = [
    'Environment', 'Education', 'Community', 'Health',
    'Animals', 'Arts', 'Sports', 'Technology'
  ];

  const timeSlots = [
    'Morning (6AM-12PM)',
    'Afternoon (12PM-5PM)',
    'Evening (5PM-10PM)',
    'Weekend Only'
  ];

  const handleLocationChange = async (zipCode: string) => {
    const coordinates = await getCoordinatesFromZipCode(zipCode);
    if (coordinates) {
      setUserLocation(coordinates);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <LocationFilter onLocationChange={handleLocationChange} />

            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3">
                <Calendar className="w-5 h-5 mr-2" />
                Date
              </h3>
              <input
                type="date"
                className="w-full p-2 border rounded-lg"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3">
                <Clock className="w-5 h-5 mr-2" />
                Time of Day
              </h3>
              <div className="space-y-2">
                {timeSlots.map((time) => (
                  <label key={time} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-rose-600 rounded border-gray-300 focus:ring-rose-500"
                      checked={selectedTime.includes(time)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTime([...selectedTime, time]);
                        } else {
                          setSelectedTime(selectedTime.filter(t => t !== time));
                        }
                      }}
                    />
                    <span className="ml-2">{time}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-semibold mb-3">
                <Tag className="w-5 h-5 mr-2" />
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategories.includes(category)
                        ? 'bg-rose-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      if (selectedCategories.includes(category)) {
                        setSelectedCategories(selectedCategories.filter(c => c !== category));
                      } else {
                        setSelectedCategories([...selectedCategories, category]);
                      }
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 left-0 right-0 p-6 bg-white border-t mt-6">
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setSelectedDate('');
                  setSelectedTime([]);
                  setSelectedCategories([]);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}