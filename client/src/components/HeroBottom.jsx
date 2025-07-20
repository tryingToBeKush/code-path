
import React from 'react';
import { FaStar } from 'react-icons/fa';

const HeroBottom = () => {
  return (
    <div className="w-full bg-white mt-12 text-center px-4">
      {/* Logo Row */}
      <p className="text-sm text-gray-500">Our Students are placed at:</p>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
        <img src="/images/google.png" className="h-6" alt="Google" />
        <img src="/images/flipkart.png" className="h-6" alt="Flipkart" />
        <img src="/images/microsoft.png" className="h-6" alt="Microsoft" />
        <img src="/images/amazon.png" className="h-6" alt="Amazon" />
        <img src="/images/walmart.png" className="h-6" alt="Walmart" />
        <img src="/images/paytm.png" className="h-6" alt="Paytm" />
        <img src="/images/oracle.png" className="h-6" alt="Oracle" />
      </div>

      {/* Impact Row */}
      <div className="bg-[#020617] text-white mt-10 py-10 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
        <div className="flex flex-wrap justify-center gap-12 text-lg font-medium">
          <div>
            <p className="text-3xl font-bold">16 LPA+</p>
            <p>Avg CTC</p>
          </div>
          <div>
            <p className="text-3xl font-bold">300%</p>
            <p>Avg Increment</p>
          </div>
          <div>
            <p className="text-3xl font-bold">20,000+</p>
            <p>Students Taught</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="ml-2 text-white font-semibold">4.9 / 5</span>
            </div>
            <p>5000+ Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
