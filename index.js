import React from 'react';

const AarogyaLandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-16 text-gray-800">Aarogya</h1>
      <div className="relative">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-300 rounded-full animate-spin absolute top-0 left-0" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default AarogyaLandingPage;
