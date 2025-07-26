import React from 'react';
import Hero from "../components/HeroFull";
import Cc from "../components/Cc";
import PPAAdvantage from "../components/PPAAdvantage";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import LearningOutcomes from "../components/LearningOutcomes";
import WhoIsThisFor from "../components/WhoIsThisFor";
import Mentor from "../components/Mentor";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Cc />
            <PPAAdvantage />
            <LearningOutcomes />
            <WhoIsThisFor />
            <Mentor />
            <Testimonials />
           
            <Footer />
        </>
    );
};

export default HomePage;