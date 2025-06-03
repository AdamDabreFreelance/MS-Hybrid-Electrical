import React from "react";

const ServiceCard = ({ name, description, image, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200 h-full">
            <div className="text-4xl text-primary">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="mt-4 flex-1 flex flex-col justify-end">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-32 object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default ServiceCard;
