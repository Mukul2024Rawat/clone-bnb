// pages/host/add-property/location.tsx
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MapComponent from '@/components/host/become-a-host/Map';

interface LocationData {
  country: string;
  state: string;
  district: string;
  locality: string;
  landmarks: string;
  postalCode: string;
  lat: number;
  lng: number;
}

const PageComponent = () => {
  const router = useRouter();
  const [locationData, setLocationData] = useState<LocationData>({
    country: '',
    state: '',
    district: '',
    locality: '',
    landmarks: '',
    postalCode: '',
    lat: 51.505,
    lng: -0.09,
  });

  const handleLocationChange = (data: LocationData) => {
    setLocationData(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocationData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pb-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Where's your place located?</h1>
            <p className="text-gray-600">Your address is only shared with guests after they've made a reservation.</p>
          </div>
          <div className="mb-8">
            <MapComponent onLocationChange={handleLocationChange} />
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={locationData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={locationData.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">District</label>
              <input
                type="text"
                id="district"
                name="district"
                value={locationData.district}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="locality" className="block text-sm font-medium text-gray-700 mb-1">Locality</label>
              <input
                type="text"
                id="locality"
                name="locality"
                value={locationData.locality}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="landmarks" className="block text-sm font-medium text-gray-700 mb-1">Nearby Landmarks</label>
              <input
                type="text"
                id="landmarks"
                name="landmarks"
                value={locationData.landmarks}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={locationData.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="lat" className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
              <input
                type="number"
                id="lat"
                name="lat"
                value={locationData.lat}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                step="0.000001"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="lng" className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
              <input
                type="number"
                id="lng"
                name="lng"
                value={locationData.lng}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                step="0.000001"
                readOnly
              />
            </div>
          </form>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            className="font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            onClick={() => router.push(`/host/add-property/floor-plan`)}
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-md hover:from-pink-600 hover:to-pink-700 transition-colors"
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PageComponent;