'use client'
import { useState } from 'react';
import NavLinks from './nav-links';

export default function BarNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 fixed w-full z-10 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <label className="text-xl font-bold text-purple-400">MySiteWeb</label>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex md:items-center md:ml-6 md:space-x-8">
                        <NavLinks />
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="pt-2 pb-3 space-y-1">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
}