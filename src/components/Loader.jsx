import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {/* Skeleton for a header */}
      <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md"></div>
      
      {/* Skeleton for a post content */}
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="flex-1 space-y-4">
          <div className="w-3/4 h-4 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-1/2 h-4 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>

      {/* Skeleton for a footer */}
      <div className="w-full h-8 bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  );
};

export default SkeletonLoader;
