import React from 'react';

const HeroRight = () => {
  return (
    <div className="flex flex-col w-[335px] h-[420px] rounded-[10px] p-4 gap-2 bg-[#F1F5F9] shadow-md mt-12">
      <div className="flex justify-center items-center bg-white p-4 rounded-lg">
        <img
          src="/images/swiggy_logo.png" 
          alt="Swiggy Logo"
          className="w-32"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Swiggy Backend: End to End Project
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          This project will demonstrate your skills in web development,
          database integration, and security.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        <span className="bg-white px-3 py-1 rounded shadow text-sm">
          Springdata JPA
        </span>
        <span className="bg-white px-3 py-1 rounded shadow text-sm">
          MySQL or PostgreSQL
        </span>
        <span className="bg-white px-3 py-1 rounded shadow text-sm">
          Spring Security
        </span>
      </div>
    </div>
  );
};

export default HeroRight;
