'use client'

import { useState } from 'react';
import NavLinks from './nav-links';


export default function BarNAv() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    
<nav className="bg-gray-800 fixed w-full z-10 top-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center h-16">
        <div className="flex">
            <div className="flex-shrink-0 flex items-center">
                <label className="text-xl font-bold text-purple-400">MySiteWeb</label>
            </div>
            <div className=" justify-center hidden md:ml-6 md:flex md:space-x-8">
            <NavLinks />
            </div>
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
