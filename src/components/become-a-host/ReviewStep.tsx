"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import axios from "axios";
import { useState } from "react";

const ReviewStep = ({ onPublish, onBack }: { onPublish: () => void; onBack: () => void }) => {
  const form = useSelector((state: RootState) => state.form);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-between bg-gray-100">
      <header className="p-1 border-b"></header>
      <main className="flex-grow flex justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Review your data
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please review the data you've entered before publishing.
            </p>
          </div>
          <div>
            <p><strong>Title:</strong> {form.property.title}</p>
            <p><strong>Subtitle:</strong> {form.property.subtitle}</p>
            <p><strong>Description:</strong> {form.property.description}</p>
            <p><strong>Capacity:</strong> {form.property.capacity}</p>
            <p><strong>Is Available:</strong> {form.property.is_available ? 'Yes' : 'No'}</p>
            <p><strong>Is Cancellable:</strong> {form.property.is_cancellable ? 'Yes' : 'No'}</p>
            <p><strong>Cancellation Days:</strong> {form.property.cancellation_days}</p>
            <p><strong>Price:</strong> {form.price.price}</p>
            <p><strong>Daily Discount:</strong> {form.price.daily_discount}</p>
            <p><strong>Weekly Discount:</strong> {form.price.weekly_discount}</p>
            <p><strong>Cleaning Fee:</strong> {form.price.cleaning_fee}</p>
            <p><strong>Service Fee:</strong> {form.price.service_fee}</p>
            <p><strong>Tax:</strong> {form.price.tax}</p>
            <p><strong>Address:</strong> {form.address.locality}, {form.address.city}, {form.address.state}, {form.address.country}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Publish
            </button>
          </div>
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
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Publish</h3>
            <p>Are you sure you want to publish this data?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={onPublish}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewStep;
