import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] px-8 h-[70px] flex items-center justify-between transition-all duration-300 border-b ${
            scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200' : 'bg-[#FFF9F0]/95 backdrop-blur-md border-[#E8D5B0]/80'
        }`}>
            <Link to="/" className="flex items-center gap-2.5 no-underline">
                <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xl">B</div>
                <span className="font-['Sora'] font-extrabold text-xl text-[#1A0A00]">Billing<span className="text-[#C8202D]">Mitra</span></span>
            </Link>

            <ul className="hidden md:flex gap-8 list-none">
                {['Features', 'Pricing', 'Why Us', 'Reviews', 'Contact'].map((item) => (
                    <li key={item}>
                        <a href={`/#${item.toLowerCase().replace(' ', '')}`} className="no-underline text-gray-500 font-medium text-[0.92rem] transition-colors duration-200 hover:text-[#C8202D]">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3">
                <Link to="/" className="hidden sm:inline-flex items-center border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-[#1A0A00] hover:border-[#C8202D] hover:text-[#C8202D] transition-all no-underline">Log In</Link>
                <a href="/#signup" className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-800 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline">
                    Start Free Trial <i className="ri-arrow-right-line"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar