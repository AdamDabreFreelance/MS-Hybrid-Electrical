import React from "react";

const ServiceCard = ({ name, description, image, icon }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 h-full flex flex-col">
            {/* Content Section - Takes available space */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Icon */}
                <div className="text-4xl text-red-600 mb-4 flex-shrink-0">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex-shrink-0 leading-tight">
                    {name}
                </h3>

                {/* Description - Takes remaining space */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {description}
                </p>
            </div>

            {/* Image Section - Fixed at bottom */}
            <div className="p-6 pt-0">
                <div className="relative overflow-hidden rounded-lg group">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Subtle overlay for better image presentation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
