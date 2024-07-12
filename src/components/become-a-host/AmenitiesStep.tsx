"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setAmenities } from '../../formSlice';
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

const AmenitiesStep = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const dispatch = useDispatch();
  const selectedAmenities = useSelector((state: RootState) => state.form.amenities);
  const [localAmenities, setLocalAmenities] = useState<string[]>(selectedAmenities.map(a => a.amenity_id.toString()));

  const toggleAmenity = (id: string) => {
    setLocalAmenities(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    const amenitiesToSave = localAmenities.map(id => ({ amenity_id: Number(id) }));
    dispatch(setAmenities(amenitiesToSave));
    onNext();
  };

  const isComplete = localAmenities.length >= 5;

  return (
    <div className="max-h-screen flex flex-col">
      <header className="p-1 border-b"></header>
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
                  localAmenities.includes(amenity.id) ? 'border-black border-2' : 'border-gray-300'
                }`}
              >
                <span className="text-2xl mr-3">{amenity.icon}</span>
                <span>{amenity.name}</span>
              </button>
            ))}
          </div>
          {!isComplete && <p className="mt-4 text-red-500">Please select at least 5 amenities.</p>}
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            className="font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 ${
              !isComplete ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isComplete}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AmenitiesStep;
