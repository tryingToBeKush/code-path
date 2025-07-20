import React from "react";

const features = [
  {
    title: "Hybrid Learning",
    desc: "Learn at your own pace and polish your concepts with instructor-led live classes.",
    icon: "📘",
  },
  {
    title: "Hands-On Projects",
    desc: "Engage in real-world projects to apply your knowledge and build a strong portfolio.",
    icon: "🛠️",
  },
  {
    title: "Expert Instructors",
    desc: "Learn from industry veterans with years of experience in JAVA Spring Framework.",
    icon: "👨‍🏫",
  },
  {
    title: "Flexible Schedule",
    desc: "Study at your own pace with our self-paced learning modules designed to fit your lifestyle.",
    icon: "🕒",
  },
  {
    title: "Doubt Resolution by Mentor",
    desc: "Get your questions answered with personalized guidance from our experienced mentors.",
    icon: "❓",
  },
  {
    title: "Certification",
    desc: "Earn a recognized certificate upon completion to boost your professional credentials.",
    icon: "📜",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4">
        Why Choose Our Course?
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Discover the key benefits of mastering Backend Engineering with the JAVA Spring Framework.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
