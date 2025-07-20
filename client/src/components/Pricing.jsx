import React from "react";

const plans = [
  {
    name: "Monthly",
    price: "₹999",
    features: [
      "Live Doubt Sessions",
      "1:1 Mentorship",
      "Weekly Assignments",
      "Access to all content",
    ],
  },
  {
    name: "Yearly",
    price: "₹7999",
    features: [
      "Everything in Monthly",
      "Priority Support",
      "Resume Reviews",
      "Mock Interviews",
    ],
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">Choose Your Plan</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`border rounded-2xl p-8 w-full max-w-md shadow-md ${
              plan.highlight ? "border-blue-500 bg-blue-50" : ""
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">
                  • {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-xl text-white font-semibold ${
                plan.highlight ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"
              }`}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
