import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center space-x-2  mt-[120px]">
      <div className="w-16 h-16 border-4 border-t-transparent border-yellow-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
