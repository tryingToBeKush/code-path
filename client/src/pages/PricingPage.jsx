import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Make sure this path is correct

// --- FAQ Item Helper Component (Accordion Style) ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// --- Pricing Card Helper Component ---
const PricingCard = ({ plan }) => {
  const { isLoggedIn } = useAuth(); // Get login status from context
  const navigate = useNavigate(); // Hook to redirect users

  const handleEnrollClick = () => {
    if (isLoggedIn) {
      // If user is logged in, proceed to payment
      alert(`Redirecting to payment gateway for the ${plan.name} plan...`);
      // In a real app, you would navigate to your payment page here
      // navigate('/payment');
    } else {
      // If user is not logged in, redirect to the login page
      alert('You need to log in to enroll.');
      navigate('/login');
    }
  };

  const isHighlighted = plan.highlighted;

  const cardClasses = `
    w-full max-w-sm p-8 space-y-6 text-center border rounded-lg transition-transform duration-300
    ${isHighlighted ? 'bg-blue-600 text-white border-blue-600 transform hover:scale-105 scale-100 md:scale-105 shadow-2xl' : 'bg-white text-gray-800 border-gray-200 shadow-lg hover:shadow-xl'}
  `;
  
  const priceClasses = `text-5xl font-extrabold ${isHighlighted ? 'text-white' : 'text-gray-900'}`;
  const featureClasses = `text-base ${isHighlighted ? 'text-blue-100' : 'text-gray-600'}`;
  const buttonClasses = `
    w-full py-3 px-6 text-lg font-semibold rounded-lg transition-colors duration-300
    ${isHighlighted ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-gray-800 text-white hover:bg-gray-900'}
  `;

  return (
    <div className={cardClasses}>
      <h3 className={`text-2xl font-bold ${isHighlighted ? 'text-white' : 'text-gray-800'}`}>{plan.name}</h3>
      <div>
        <span className={priceClasses}>₹{plan.price}</span>
      </div>
      <ul className="space-y-3 text-left">
        {plan.features.map((feature, index) => (
          <li key={index} className={`flex items-center gap-3 ${featureClasses}`}>
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleEnrollClick} className={buttonClasses}>Enroll Now</button>
    </div>
  );
};


// --- Main Pricing and FAQ Page Component ---
const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Monthly',
      price: 999,
      features: ['Live Doubt Sessions', '1:1 Mentorship', 'Weekly Assignments', 'Access to all content'],
      highlighted: false,
    },
    {
      name: 'Yearly',
      price: 7999,
      features: ['Everything in Monthly', 'Priority Support', 'Resume Reviews', 'Mock Interviews'],
      highlighted: true,
    },
  ];

  const faqs = [
    {
      question: 'Will I get placement assistance?',
      answer: 'Yes, we have a dedicated placement cell that provides assistance with resume building, mock interviews, and job referrals.',
    },
    {
      question: 'Is this a live or recorded course?',
      answer: 'This is a hybrid course with live weekend classes and recorded weekday sessions.',
    },
    {
      question: 'What is the duration of this course?',
      answer: 'The course duration is 6 months, including live classes and project work.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Pricing Section */}
      <div className="py-12 px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>© 2025 Programming Pathshala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;