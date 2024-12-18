// Haversine formula to calculate distance between two points
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959; // Earth's radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export async function getCoordinatesFromZipCode(zipCode: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
    const data = await response.json();
    return {
      lat: parseFloat(data.places[0].latitude),
      lng: parseFloat(data.places[0].longitude)
    };
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return null;
  }
}