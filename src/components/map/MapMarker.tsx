import { Marker, Popup } from 'react-leaflet';
import { defaultIcon } from './utils/mapIcons';
import type { Opportunity } from '../../types';

interface Props {
  opportunity: Opportunity;
  onSelect: (opportunity: Opportunity) => void;
}

export function MapMarker({ opportunity, onSelect }: Props) {
  return (
    <Marker
      position={[opportunity.location.lat, opportunity.location.lng]}
      icon={defaultIcon}
      eventHandlers={{
        click: () => onSelect(opportunity),
      }}
    >
      <Popup>
        <div className="p-2">
          <h3 className="font-bold">{opportunity.title}</h3>
          <p className="text-sm">{opportunity.organization}</p>
        </div>
      </Popup>
    </Marker>
  );
}