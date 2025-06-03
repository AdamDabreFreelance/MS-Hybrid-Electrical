import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="nav-bar w-full sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
                {/* Logo & Brand */}
                <div className="flex items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                            className="w-7 h-7 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                            MS Hybrid
                        </h1>
                        <p className="text-sm text-gray-600 font-medium">
                            Electrical
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
                    <a
                        href="/"
                        className="nav-link px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
                    >
                        Home
                    </a>
                    <a
                        href="/#services"
                        className="nav-link px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
                    >
                        Services
                    </a>
                    <a
                        href="/#contact"
                        className="nav-link px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
                    >
                        Contact
                    </a>
                    <div className="pl-4 ml-4 border-l border-gray-200">
                        <a href="/booking">
                            <button className="btn-primary inline-flex items-center px-6 py-2.5 text-sm font-semibold">
                                Make a Booking
                            </button>
                        </a>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <a
                            href="/"
                            className="mobile-nav-link block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="/services"
                            className="mobile-nav-link block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="/#contact"
                            className="mobile-nav-link block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <a
                                href="/booking"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <button className="btn-primary w-full py-3 text-base font-semibold">
                                    Make a Booking
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
