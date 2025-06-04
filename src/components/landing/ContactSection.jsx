import React from "react";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - CTA */}
                    <div className="text-center lg:text-left">
                        <div className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Contact Us to Get a
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                                    {" "}
                                    Quotation
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-lg">
                                Ready to get started? Book your electrical
                                service today and let our experts handle the
                                rest.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="/booking" className="group">
                                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                                    <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                    Book Now
                                    <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-2 text-center lg:text-left">
                                Get In Touch
                            </h2>
                            <div className="w-48 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto lg:mx-0"></div>
                        </div>

                        <div className="space-y-6">
                            {/* Location */}
                            <div className="contact-item group">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-1">
                                            Location
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            EC 15996 || L196268
                                            <br />
                                            LANGFORD, 6147
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="contact-item group">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-1">
                                            Phone
                                        </h3>
                                        <div className="text-gray-300 leading-relaxed space-y-1">
                                            <p className="cursor-pointer">
                                                <span className="font-medium">
                                                    Electrical Technician:
                                                </span>
                                                <br />
                                                <a
                                                    href="tel:0420695020"
                                                    className="text-red-400 hover:text-red-300"
                                                >
                                                    0420-695-020
                                                </a>
                                            </p>
                                            <p className="cursor-pointer">
                                                <span className="font-medium">
                                                    Booking Enquiry:
                                                </span>
                                                <br />
                                                <a
                                                    href="tel:0432742442"
                                                    className="text-red-400 hover:text-red-300"
                                                >
                                                    0432-742-442
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="contact-item group">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-1">
                                            Email
                                        </h3>
                                        <p className="text-gray-300">
                                            <a
                                                href="mailto:Mshybridelectrical@gmail.com"
                                                className="text-red-400 hover:text-red-300 transition-colors break-all"
                                            >
                                                Mshybridelectrical@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
