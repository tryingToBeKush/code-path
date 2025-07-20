import React from "react";

const audience = [
  {
    title: "College Student or Fresher",
    desc: "Master backend skills and boost your resume. Learn the hottest backend stack and build an impressive project.",
    img: "/images/audience1.png", // Replace with your local image path or use placeholders
  },
  {
    title: "Backend Working Professional",
    desc: "Enhance your skills to become a well-rounded backend developer for seamless transition and excelling in your career path.",
    img: "/images/audience2.png",
  },
  {
    title: "Developer switching to Backend",
    desc: "Leverage your existing knowledge and gain the specialized skills to develop and deploy robust backend systems.",
    img: "/images/audience3.png",
  },
  {
    title: "Aspiring Developer or Enthusiast",
    desc: "Stand out with real-world backend skills while in college and prepare for top backend development roles.",
    img: "/images/audience4.png",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Who is this Course for?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {audience.map((item, index) => (
          <div
            key={index}
            className="bg-[#E0E7FF] p-6 rounded-lg flex flex-col gap-4 shadow-md"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
            <div className="w-full h-40 overflow-hidden flex items-center justify-center">
              <img src={item.img} alt={item.title} className="h-full object-contain" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-all">
          Start 7-Days Free Trial
        </button>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
