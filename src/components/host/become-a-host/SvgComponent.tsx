import React from 'react';

const SvgComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" role="img" aria-hidden="false" aria-label="Airbnb logo" focusable="false" className="h-12 w-12 text-red-500">
        <path d="M499.58 0C777.4 0 1000 222.6 1000 500.42 1000 778.24 777.4 1000.84 499.58 1000.84 221.76 1000.84 0 778.24 0 500.42 0 222.6 221.76 0 499.58 0Zm-111.1 723.14c-64.86-63.72-105.06-149.6-105.06-243.58 0-93.98 40.2-179.86 105.06-243.58-64.86 63.72-105.06 149.6-105.06 243.58 0 93.98 40.2 179.86 105.06 243.58Zm111.1-306.7c61.44 0 111.1 49.66 111.1 111.1s-49.66 111.1-111.1 111.1-111.1-49.66-111.1-111.1 49.66-111.1 111.1-111.1Zm0 306.7c64.86-63.72 105.06-149.6 105.06-243.58 0-93.98-40.2-179.86-105.06-243.58 64.86 63.72 105.06 149.6 105.06 243.58 0 93.98-40.2 179.86-105.06 243.58Z" fill="currentColor"></path>
      </svg>
    </div>
  );
};

export default SvgComponent;
