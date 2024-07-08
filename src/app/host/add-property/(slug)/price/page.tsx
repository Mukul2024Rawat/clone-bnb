"use client";
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import Image from 'next/image';

const PricingPage = () => {
  const [price, setPrice] = useState(835);
  const guestPrice = Math.round(price * 1.14); // Assuming 14% tax

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-3xl">
            <Image src="/airbnb-logo.png" alt="Airbnb" width={32} height={32} />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:underline flex items-center gap-2">
              <Image src="/avatar.png" alt="Avatar" width={24} height={24} className="rounded-full" />
              Questions?
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
              Save & exit
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Now, set your price</h1>
          <p className="text-gray-600 mb-8">You can change it anytime.</p>
          
          <div className="flex items-center justify-center mb-4">
            <button className="text-3xl font-bold p-2" onClick={() => setPrice(prev => Math.max(0, prev - 1))}>-</button>
            <div className="relative">
              <span className="text-6xl font-bold">₹{price}</span>
              <button className="absolute top-0 right-0 p-2" onClick={() => {}}>
                <FiEdit2 className="text-gray-400" />
              </button>
            </div>
            <button className="text-3xl font-bold p-2" onClick={() => setPrice(prev => prev + 1)}>+</button>
          </div>

          <p className="text-center text-gray-600 mb-6">
            Guest price before taxes ₹{guestPrice} <span className="text-black">▼</span>
          </p>

          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center gap-2 mb-4">
            <IoLocationOutline className="text-rose-500" />
            <span className="text-sm">Compare similar listings ₹747 – ₹972</span>
          </div>

          <p className="text-center text-sm text-gray-600 underline">
            Learn more about pricing
          </p>
        </div>
      </main>

      <footer className="border-t p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button className="font-semibold text-gray-600 hover:underline">Back</button>
          <button className="px-6 py-2 rounded-lg font-semibold text-white bg-black hover:bg-gray-800">
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;