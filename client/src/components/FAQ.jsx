// src/components/FAQ.jsx
import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    { question: "What is the duration of the course?", answer: "The course duration is 12 weeks with regular assignments and doubt sessions." },
    { question: "Is there a refund policy?", answer: "Yes, full refund within 7 days of purchase if you're not satisfied." },
    { question: "Are live classes recorded?", answer: "Yes, every session is recorded and shared with students." },
    { question: "Do I need prior experience?", answer: "No prior experience is required. This course is beginner-friendly." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-4 bg-white rounded shadow font-medium text-gray-800"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-l-4 border-blue-400 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
