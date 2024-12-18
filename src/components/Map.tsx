import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useStore } from '../store/useStore';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export function Map() {
  const { opportunities, setSelectedOpportunity } = useStore();

  return (
    <MapContainer
      center={[37.7749, -122.4194]} // San Francisco center
      zoom={13}
      className="w-full h-screen"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {opportunities.map((opportunity) => (
        <Marker
          key={opportunity.id}
          position={[opportunity.location.lat, opportunity.location.lng]}
          icon={defaultIcon}
          eventHandlers={{
            click: () => setSelectedOpportunity(opportunity),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{opportunity.title}</h3>
              <p className="text-sm">{opportunity.organization}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}