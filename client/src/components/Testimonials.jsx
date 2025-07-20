import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aman Gupta",
    feedback: "PPA helped me crack interviews with ease. The DSA content is top-notch!",
    rating: 5,
  },
  {
    name: "Sneha Verma",
    feedback: "The mentor support and structure are excellent. Highly recommend it!",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    feedback: "Very beginner-friendly and practical. Got my first job thanks to PPA!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">What Our Students Say</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-left">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex items-center justify-center font-bold">
                {item.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-semibold">{item.name}</p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
