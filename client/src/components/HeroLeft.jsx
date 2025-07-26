import React, { useState, useEffect } from 'react';

const HeroLeft = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        // CORRECTED: Use port 5000 and the /api/curriculum endpoint
        const response = await fetch('http://localhost:5000/api/curriculum');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourse(data);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch course data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  if (loading) {
    return <div>Loading course details...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: Could not load course data. Is the backend server running?</div>;
  }

  
  return (
    <div className="flex-1 text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        {/* CORRECTED: Use the courseTitle from our API */}
        {course.courseTitle}
      </h1>
      {/* You would map over course.modules here instead of course.features */}
      <p className="mt-4 text-gray-600">
        This project will demonstrate your skills in web development, database integration, and security.
      </p>
      <ul className="mt-6 space-y-2 text-gray-700">
        {course.modules.map((module) => (
          <li key={module._id} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">●</span>
            <span><b>{module.title}:</b> {module.topics.join(', ')}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Start 7-Days Free Trial
      </button>
    </div>
  );
};

export default HeroLeft;