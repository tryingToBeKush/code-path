import React from "react";

const Mentor = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Mentor</h2>
          <p className="text-gray-600">
            Learn from an experienced mentor who has guided thousands of students through this journey.
          </p>
        </div>
        <div className="flex justify-center">
          <svg
            width="200"
            height="300"
            viewBox="0 0 200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-xl"
          >
            <circle cx="100" cy="50" r="30" stroke="black" strokeWidth="4" fill="#f0f0f0" />
            <line x1="100" y1="80" x2="100" y2="180" stroke="black" strokeWidth="4" />
            <line x1="100" y1="100" x2="50" y2="130" stroke="black" strokeWidth="4" />
            <line x1="100" y1="100" x2="150" y2="130" stroke="black" strokeWidth="4" />
            <line x1="100" y1="180" x2="70" y2="250" stroke="black" strokeWidth="4" />
            <line x1="100" y1="180" x2="130" y2="250" stroke="black" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
