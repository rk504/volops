export interface MapConfig {
  center: [number, number];
  zoom: number;
  tileLayer: {
    url: string;
    attribution: string;
  };
}