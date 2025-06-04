import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ServiceSection from "../components/landing/ServiceSection";
import StatsSection from "../components/landing/StatsSection";
import ContactSection from "../components/landing/ContactSection";

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <ServiceSection />
            <StatsSection />
            <ContactSection />
        </div>
    );
};

export default LandingPage;
