import React from "react";
import { ArrowRight, Wrench } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative bg-red-700 text-white min-h-[90vh] flex items-center">
            {/* Background overlay image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="src/assets/electrician-with-tools-working-construction-site-repair-handyman-concept.jpg"
                    alt="Electrical work background"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Electrical Experts Right at Your Doorstep
                    </h1>
                    <p className="text-lg md:text-xl font-normal mb-8 max-w-xl">
                        Our electricians are the most recognized professionals
                        globally because we're committed to excellent service,
                        and nothing wears on homeowners like the idea of
                        handling electrical problems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="btn-hero group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-red-700 rounded-lg hover:bg-gray-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <Wrench className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                            Our Services
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Right Image - Commented out as in original
                <div className="md:w-1/2">
                    <img
                        src="/your-electrician.png" // Replace with actual electrician image
                        alt="Electrician"
                        className="w-full max-w-md mx-auto"
                    />
                </div> */}
            </div>
        </section>
    );
};

export default HeroSection;
