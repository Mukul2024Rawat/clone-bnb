"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setProperty } from "../../formSlice";
import { useState } from "react";

const DescriptionStep = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const dispatch = useDispatch();
  const property = useSelector((state: RootState) => state.form.property);
  const [description, setDescription] = useState<string>(property.description);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = event.target.value;
    if (newDescription.length <= 500) {
      setDescription(newDescription);
      dispatch(setProperty({ ...property, description: newDescription }));
    }
  };

  const isComplete = description.length > 0;

  return (
    <div className=" flex flex-col justify-between bg-gray-100">
      <header className="p-1 border-b"></header>
      <main className="flex-grow flex justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Create your description
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Share what makes your place special.
            </p>
          </div>
          <div>
            <textarea
              name="description"
              id="property-description"
              className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-lg border-solid border-black rounded-md p-4"
              placeholder="You'll have a great time at this comfortable place to stay."
              value={description}
              onChange={handleTextareaChange}
              rows={6}
            />
            <p className="mt-1 text-right text-sm text-gray-500">
              {description.length}/500
            </p>
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

export default DescriptionStep;
