"use client";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setPrice } from '../../formSlice';
import { FiEdit2 } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const PriceStep = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const dispatch = useDispatch();
  const priceState = useSelector((state: RootState) => state.form.price);
  const [price, setLocalPrice] = useState<number>(priceState.price);

  const handlePriceChange = (newPrice: number) => {
    setLocalPrice(newPrice);
    dispatch(setPrice({ ...priceState, price: newPrice }));
  };

  const isComplete = price > 0;

  return (
    <div className="max-h-screen flex flex-col">
      <header className="p-1 border-b"></header>
      <main className="flex-grow p-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Now, set your price</h1>
          <p className="text-gray-600 mb-8">You can change it anytime.</p>
          <div className="flex items-center justify-center mb-4">
            <button className="text-3xl font-bold p-2" onClick={() => handlePriceChange(Math.max(0, price - 1))}>-</button>
            <div className="relative">
              <span className="text-6xl font-bold">₹{price}</span>
              <button className="absolute top-0 right-0 p-2" onClick={() => {}}>
                <FiEdit2 className="text-gray-400" />
              </button>
            </div>
            <button className="text-3xl font-bold p-2" onClick={() => handlePriceChange(price + 1)}>+</button>
          </div>
          <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center gap-2 mb-4">
            <IoLocationOutline className="text-rose-500" />
            <span className="text-sm">Compare similar listings ₹747 – ₹972</span>
          </div>
          <p className="text-center text-sm text-gray-600 underline">Learn more about pricing</p>
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
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PriceStep;
