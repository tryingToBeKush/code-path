// src/components/LearningOutcomes.jsx
import React from "react";

const LearningOutcomes = () => {
  const outcomes = [
    "Strong foundation in DSA",
    "Confidence for coding interviews",
    "Structured problem-solving approach",
    "Hands-on practice with real problems",
    "Understanding of time and space complexities"
  ];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">What Will You Learn?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {outcomes.map((item, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;
