import React from 'react';

const BlogCardSkeleton = () => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg p-4 animate-pulse">
      {/* Skeleton Image */}
      <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>

      {/* Skeleton Content */}
      <div className="space-y-4">
        {/* Skeleton Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Skeleton Description */}
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>

        {/* Skeleton Button */}
        <div className="h-8 bg-blue-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
