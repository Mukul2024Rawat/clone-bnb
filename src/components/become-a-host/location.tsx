"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setAddress } from '../../formSlice';
import MapComponent from '@/components/host/become-a-host/Map';

interface LocationData {
  country: string;
  state: string;
  city: string;
  locality: string;
  nearest_landmark: string;
  pincode: string;
  latitude: number;
  longitude: number;
}

const LocationStep = ({ onNext }: { onNext: () => void }) => {
  const dispatch = useDispatch();
  const address = useSelector((state: RootState) => state.form.address);
  const [locationData, setLocationData] = useState<LocationData>(address);

  const handleLocationChange = (data: LocationData) => {
    setLocationData(data);
    dispatch(setAddress(data));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocationData((prev) => ({ ...prev, [name]: value }));
    dispatch(setAddress({ ...locationData, [name]: value }));
  };

  const isComplete = Object.values(locationData).every(field => field !== '');

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
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={locationData.city}
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
              <label htmlFor="nearest_landmark" className="block text-sm font-medium text-gray-700 mb-1">Nearby Landmarks</label>
              <input
                type="text"
                id="nearest_landmark"
                name="nearest_landmark"
                value={locationData.nearest_landmark}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={locationData.pincode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
              <input
                type="number"
                id="latitude"
                name="latitude"
                value={locationData.latitude}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                step="0.000001"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
              <input
                type="number"
                id="longitude"
                name="longitude"
                value={locationData.longitude}
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
        <div className="mx-auto flex justify-between items-center">
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
            disabled={!isComplete}
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LocationStep;
