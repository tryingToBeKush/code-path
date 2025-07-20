import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroFull";
import Cc from "./components/Cc";
import PPAAdvantage from "./components/PPAAdvantage";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import LearningOutcomes from "./components/LearningOutcomes";
import WhoIsThisFor from "./components/WhoIsThisFor";
import Mentor from "./components/Mentor";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cc />
      <PPAAdvantage />
      <LearningOutcomes />
      <WhoIsThisFor />
      <Mentor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;

