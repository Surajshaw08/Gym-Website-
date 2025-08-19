'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === 'undefined') return;
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setShowNavbar(false); // scroll down
            } else {
                setShowNavbar(true); // scroll up
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="text-orange-500 font-bold text-xl">
                                <span className="mr-2">|||—</span>
                                Bodyshape
                                <span className="ml-2">—|||</span>
                            </div>
                        </Link>
                        <p className="text-orange-400 text-xs mt-1">Unleash your inner athlete</p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/"
                                className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300 border-b-2 border-orange-500"
                            >
                                Home
                            </Link>
                            <Link
                                href="/service"
                                className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-b-2 hover:border-orange-500"
                            >
                                Service
                            </Link>
                            <Link
                                href="/about"
                                className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-b-2 hover:border-orange-500"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-b-2 hover:border-orange-500"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Join Us Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/join"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                            Join Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm">
                    <Link
                        href="/"
                        className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium border-l-4 border-orange-500"
                    >
                        Home
                    </Link>
                    <Link
                        href="/service"
                        className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium hover:border-l-4 hover:border-orange-500"
                    >
                        Service
                    </Link>
                    <Link
                        href="/about"
                        className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium hover:border-l-4 hover:border-orange-500"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium hover:border-l-4 hover:border-orange-500"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/join"
                        className="bg-orange-500 hover:bg-orange-600 text-white block px-3 py-2 text-base font-medium rounded-md mx-3 mt-4"
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
