// src/components/PPAAdvantage.jsx

import { FaCode } from "react-icons/fa";

const learningOutcomes = [
  {
    title: "Fundamentals",
    desc: "Master OOPs concepts, design principles, reflection with JavaScript/React...",
  },
  {
    title: "Spring MVC Internals",
    desc: "Dive into internal working of Spring MVC, including its architecture...",
  },
  {
    title: "Concurrency Concepts",
    desc: "Learn essential concurrency concepts such as multi-threading, synchronization...",
  },
  {
    title: "JDBC, ORM, Hibernate",
    desc: "Understand JDBC for database connectivity, ORM principles...",
  },
  {
    title: "Spring Data JPA",
    desc: "Master Spring Data JPA for simplified access and management...",
  },
  {
    title: "Authentication and Authorization",
    desc: "Learn how to implement robust authentication mechanisms...",
  },
  {
    title: "Spring Security",
    desc: "Master Spring Security to implement comprehensive authorization...",
  },
];

const PPAAdvantage = () => {
  return (
    <div className="py-16 px-4 sm:px-24 bg-[#f9f9ff]">
      <h2 className="text-3xl font-bold text-center mb-12">
        Your Learning Outcomes will be:
      </h2>
      <div className="relative border-l-2 border-gray-300 ml-6">
        {learningOutcomes.map((item, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            <div className="absolute -left-6 top-1">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <FaCode className="text-sm" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PPAAdvantage;
