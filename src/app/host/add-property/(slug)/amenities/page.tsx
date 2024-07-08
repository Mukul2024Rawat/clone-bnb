"use client";
import { useState, useEffect } from 'react';
import { FiWifi, FiTv, FiHome } from 'react-icons/fi';
import { MdKitchen, MdLocalLaundryService, MdAcUnit, MdFitnessCenter, MdOutdoorGrill, MdPets, MdLocalParking, MdPool } from 'react-icons/md';
import { FaFirstAid, FaShieldAlt, FaBell } from 'react-icons/fa';

interface Amenity {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const amenities: Amenity[] = [
  { id: 'wifi', name: 'WiFi', icon: <FiWifi /> },
  { id: 'tv', name: 'TV', icon: <FiTv /> },
  { id: 'kitchen', name: 'Kitchen', icon: <MdKitchen /> },
  { id: 'washingMachine', name: 'Washing machine', icon: <MdLocalLaundryService /> },
  { id: 'airConditioning', name: 'Air conditioning', icon: <MdAcUnit /> },
  { id: 'exerciseEquipment', name: 'Exercise equipment', icon: <MdFitnessCenter /> },
  { id: 'outdoorDining', name: 'Outdoor dining area', icon: <MdOutdoorGrill /> },
  { id: 'firstAidKit', name: 'First aid kit', icon: <FaFirstAid /> },
  { id: 'petAllowed', name: 'Pet allowed', icon: <MdPets /> },
  { id: 'parking', name: 'Parking', icon: <MdLocalParking /> },
  { id: 'smokeAlarm', name: 'Smoke alarm', icon: <FaBell /> },
  { id: 'security', name: 'Security and monitoring', icon: <FaShieldAlt /> },
  { id: 'swimmingPool', name: 'Swimming pool', icon: <MdPool /> },
  { id: 'workspace', name: 'Dedicated workspace', icon: <FiHome /> },
];

const AmenitiesPage = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleAmenity = (id: string) => {
    setSelectedAmenities(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const isComplete = selectedAmenities.length >= 5;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-3xl">🏠</div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:underline">Questions?</button>
            <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">Save & exit</button>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Tell guests what your place has to offer</h1>
          <p className="text-gray-600 mb-6">You can add more amenities after you publish your listing.</p>
          
          <h2 className="text-xl font-semibold mb-4">What about these guest favourites?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((amenity) => (
              <button
                key={amenity.id}
                onClick={() => toggleAmenity(amenity.id)}
                className={`flex items-center p-4 border rounded-lg hover:border-black transition-colors ${
                  selectedAmenities.includes(amenity.id) ? 'border-black border-2' : 'border-gray-300'
                }`}
              >
                <span className="text-2xl mr-3">{amenity.icon}</span>
                <span>{amenity.name}</span>
              </button>
            ))}
          </div>

          {!isComplete && (
            <p className="mt-4 text-red-500">Please select at least 5 amenities.</p>
          )}
        </div>
      </main>

      <footer className="border-t p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button className="font-semibold text-gray-600 hover:underline">Back</button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold text-white ${
              isComplete ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'
            }`}
            disabled={!isComplete}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AmenitiesPage;