import React from "react";
import services from "../../data/services";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
    return (
        <section id="services" className="py-12 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Our Services
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
