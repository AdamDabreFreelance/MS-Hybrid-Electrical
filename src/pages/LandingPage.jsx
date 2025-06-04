import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ServiceSection from "../components/landing/ServiceSection";
import StatsSection from "../components/landing/StatsSection";
const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <ServiceSection />
            <StatsSection />
        </div>
    );
};

export default LandingPage;
