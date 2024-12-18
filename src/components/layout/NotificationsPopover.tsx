import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsPopover({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-4 top-16 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Notifications</h3>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        <div className="p-4 border-b hover:bg-gray-50">
          <p className="text-sm">
            <span className="font-semibold">Sarah Chen</span> just joined the Beach Cleanup event
          </p>
          <span className="text-xs text-gray-500">2 minutes ago</span>
        </div>
        
        <div className="p-4 border-b hover:bg-gray-50">
          <p className="text-sm">
            You earned the <span className="font-semibold">Early Bird</span> badge!
          </p>
          <span className="text-xs text-gray-500">1 hour ago</span>
        </div>
        
        <div className="p-4 hover:bg-gray-50">
          <p className="text-sm">
            <span className="font-semibold">Food Bank Distribution</span> is tomorrow
          </p>
          <span className="text-xs text-gray-500">3 hours ago</span>
        </div>
      </div>
    </div>
  );
}