import React, { useState } from "react";

const modules = [
  {
    title: "Fundamentals",
    module: "Module 1",
    topics: [
      "OOPS Concepts and Design Principles.",
      "Reflection, java.lang.reflect library and its relevance in Spring.",
      "Exception Handling in a production system.",
      "Maven - Build Automation Tool, Dependencies, Jar files etc"
    ]
  },
  {
    title: "Spring MVC Internals",
    module: "Module 2",
    topics: []
  },
  {
    title: "Concurrency Concepts",
    module: "Module 3",
    topics: []
  },
  {
    title: "JDBC, ORM, Hibernate",
    module: "Module 4",
    topics: []
  },
  {
    title: "Spring Data JPA",
    module: "Module 5",
    topics: []
  },
  {
    title: "Authentication and Authorization",
    module: "Module 6",
    topics: []
  },
  {
    title: "Spring Security",
    module: "Module 7",
    topics: []
  }
];

const Cc = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#E5EDFF] py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">Course Curriculum</h2>

      <div className="bg-[#A9BFF9] max-w-5xl mx-auto rounded-xl p-6 flex flex-col md:flex-row gap-6">
        {/* Module List */}
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          {modules.map((mod, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex justify-between items-center px-4 py-3 rounded-md text-sm font-medium shadow-sm transition-all duration-200 ${
                idx === activeIndex ? "bg-[#3D4FCE] text-white" : "bg-white text-black"
              }`}
            >
              <span>{mod.title}</span>
              <span className="text-xs px-2 py-1 bg-[#E0E7FF] rounded-md text-[#3D4FCE]">
                {mod.module}
              </span>
            </button>
          ))}
        </div>

        {/* Topic Details */}
        <div className="bg-[#3D4FCE] text-white w-full md:w-1/2 p-5 rounded-md shadow-sm">
          <h3 className="font-semibold mb-2 border-b border-white pb-2">Topics</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {modules[activeIndex].topics.length > 0 ? (
              modules[activeIndex].topics.map((topic, i) => <li key={i}>{topic}</li>)
            ) : (
              <li>Details coming soon...</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cc