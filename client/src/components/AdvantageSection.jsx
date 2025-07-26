import React, { useState, useEffect } from 'react';

// A reusable card component for displaying each advantage
const AdvantageCard = ({ title, points }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex-1">
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <ul className="mt-4 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <svg className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// The main section component that fetches and displays the advantage cards
const AdvantageSection = () => {
  const [advantages, setAdvantages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/advantages');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAdvantages(data);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch advantages:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvantages();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading advantages...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: Could not load advantages.</div>;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">The PPA Advantage</h2>
        <p className="text-center mt-2 text-gray-600">Your path to becoming a top-tier developer.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} title={advantage.title} points={advantage.points} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;