"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PageComponent = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 32) {
      setTitle(newTitle);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Now let's give your property a title
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Short titles work best. Have fun with it - you can always change it later.
            </p>
          </div>
          <div>
            <input
              type="text"
              name="title"
              id="property-title"
              className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-lg border-gray-300 rounded-md p-4"
              placeholder="Enter your property title"
              value={title}
              onChange={handleInputChange}
            />
            <p className="mt-1 text-right text-sm text-gray-500">
              {title.length}/32
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button 
            className="font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            onClick={() => router.push(`/host/add-property/floor-plan`)}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-md hover:from-pink-600 hover:to-pink-700 transition-colors shadow-md"
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}

export default PageComponent;
