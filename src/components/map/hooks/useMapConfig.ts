import { MapConfig } from '../types/map';

export function useMapConfig(): MapConfig {
  return {
    center: [37.7749, -122.4194], // San Francisco center
    zoom: 13,
    tileLayer: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  };
}