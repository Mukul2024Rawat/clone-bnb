"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';

interface Image {
  data_url: string;
  file: File;
  type: 'bedroom' | 'other';
}

const PageComponent = () => {
  const router = useRouter();
  const [images, setImages] = useState<Image[]>([]);
  const minNumber = 5;
  const maxNumber = 10;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    if (imageList.length > maxNumber) {
      alert(`You can upload a maximum of ${maxNumber} images.`);
      return;
    }
    
    const updatedImages = imageList.map((image: any, index: number) => ({
      ...image,
      type: index === 0 ? 'bedroom' : 'other'
    }));
    
    setImages(updatedImages);
  };

  const handleNext = () => {
    if (images.length < minNumber) {
      alert(`Please upload at least ${minNumber} images.`);
      return;
    }
    
    const bedroomImages = images.filter(img => img.type === 'bedroom');
    if (bedroomImages.length === 0) {
      alert('Please upload at least one bedroom image.');
      return;
    }

    const imagesForBackend = images.map(img => ({
      file: img.file,
      type: img.type
    }));

    console.log('Images to send to backend:', imagesForBackend);

    router.push('/host/add-property/floor-plan');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">Add Photos of Your Property</h1>
          <p className="mb-6 text-center text-gray-600">Upload at least 5 photos, including one bedroom image (first upload).</p>
          
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper">
                <div className={`border-2 border-dashed ${isDragging ? 'border-blue-500' : 'border-gray-300'} rounded-lg p-8 mb-6 text-center`}>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop Images Here
                  </button>
                  <p className="text-gray-500">Drag and drop images or click to select files</p>
                </div>
                
                {imageList.length > 0 && (
                  <div className="mb-6">
                    <button 
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={onImageRemoveAll}
                    >
                      Remove All Images
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {imageList.map((image, index) => (
                    <div key={index} className="relative">
                      <img src={image['data_url']} alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
                      <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                        {index === 0 ? 'Bedroom' : 'Other'}
                      </div>
                      <div className="absolute bottom-2 right-2 flex space-x-2">
                        <button 
                          className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button 
                          className="bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between p-4 bg-white border-t shadow-md">
        <button 
          className="font-bold text-gray-600 hover:text-gray-800" 
          onClick={() => router.back()}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PageComponent;