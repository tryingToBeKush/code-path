import React from 'react';

const HeroLeft = () => {
  return (
    <div className="w-full md:w-1/2 px-6 py-10 space-y-5">
      {/* Tag */}
      <div className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded w-fit font-medium">
        Recommended for Working Professionals
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
        Learn Backend Engineering in <br /> JAVA Spring Framework
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-base">
        Be a Rockstar JAVA Backend Developer. Dive Deep into Spring MVC, Spring Security, Spring Data, JPA, Hibernate and many more frameworks. Explore Design Patterns and Concurrency Concepts. Ace Backend Developer Interviews.
      </p>

      {/* Bullet Points */}
      <ul className="list-disc pl-5 text-gray-800 space-y-1">
        <li>Hybrid Learning: Self paced videos and weekend classes</li>
        <li>Learn by doing 3 industry-level projects</li>
        <li>Crack interviews for backend developer roles</li>
        <li>Shine your Resume with the most in-demand backend skills</li>
      </ul>

      {/* Duration */}
      <p className="text-sm font-semibold">
        Estimated Duration: <span className="text-blue-700">3 months</span>
      </p>

      {/* CTA Button */}
      <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-medium transition">
        Start 7-Days Free Trial
      </button>

      {/* Small Note */}
      <p className="text-xs text-gray-500">
        Watch 10+ lectures and solve problems for free
      </p>
    </div>
  );
};

export default HeroLeft;
