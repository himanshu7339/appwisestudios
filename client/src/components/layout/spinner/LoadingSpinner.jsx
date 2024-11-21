import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;