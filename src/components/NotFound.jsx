import React from 'react';
import { RefreshCw, SearchX, AlertCircle } from 'lucide-react';

const NotFoundNotice = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm border border-yellow-200 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-yellow-100 opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-red-100 opacity-50"></div>
      
      {/* Main content */}
      <div className="animate-[float_3s_ease-in-out_infinite] mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 rounded-full blur-md"></div>
        <img 
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
          alt="No results found" 
          className="w-64 h-64 object-cover rounded-lg shadow-lg z-10 relative"
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 rounded-full blur-md z-0"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center mb-2">
          <SearchX className="h-8 w-8 text-red-600 mr-2" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold text-red-800">Not Found</h2>
        </div>
        
        
      </div>
      
      {/* Decorative dots */}
      <div className="absolute top-12 left-12 flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-yellow-400 animate-[pulse_1.5s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.3}s` }}></div>
        ))}
      </div>
      <div className="absolute bottom-12 right-12 flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-red-400 animate-[pulse_1.5s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.3}s` }}></div>
        ))}
      </div>
    </div>
  );
};

export default NotFoundNotice;