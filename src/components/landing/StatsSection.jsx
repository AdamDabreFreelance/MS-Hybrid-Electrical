import React from "react";
import { HandHeart, Zap, Wrench } from "lucide-react";

const StatsSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Providing Excellent Services for the Past
                        <span className="text-red-600"> 5 Years</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {/* Stat Card 1 */}
                    <div className="stat-card group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="stat-icon-wrapper mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <HandHeart className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="stat-content">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                                100<span className="text-red-600">+</span>
                            </h3>
                            <p className="text-lg font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                Projects Completed
                            </p>
                        </div>
                        <div className="stat-decoration absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="stat-card group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="stat-icon-wrapper mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="stat-content">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                                50<span className="text-red-600">+</span>
                            </h3>
                            <p className="text-lg font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                Happy Clients
                            </p>
                        </div>
                        <div className="stat-decoration absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="stat-card group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="stat-icon-wrapper mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Wrench className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="stat-content">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                                10<span className="text-red-600">+</span>
                            </h3>
                            <p className="text-lg font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                Awards Won
                            </p>
                        </div>
                        <div className="stat-decoration absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default StatsSection;
