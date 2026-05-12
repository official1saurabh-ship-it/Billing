import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import restron from '../assets/Restron.jpeg'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Why Us', href: '/#whyus' },
        { name: 'Reviews', href: '/#reviews' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] px-4 md:px-8 h-[70px] flex items-center justify-between transition-all duration-300 border-b ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200' : 'bg-[#FFF9F0]/95 backdrop-blur-md border-[#E8D5B0]/80'
            }`}>
            <Link to="/" className="flex items-center gap-2.5 no-underline">
                <img src={restron} alt="" className='w-8 h-8' />
                <span className="font-['Sora'] font-extrabold text-xl text-[#1A0A00]">Billing<span className="text-[#C8202D]">Mitra</span></span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8 list-none">
                {navLinks.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="no-underline text-gray-500 font-medium text-[0.92rem] transition-colors duration-200 hover:text-[#C8202D]">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3">
                <Link to="https://billing.biosoftech.in/signin" className="hidden sm:inline-flex items-center border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-[#1A0A00] hover:border-[#C8202D] hover:text-[#C8202D] transition-all no-underline">Log In</Link>
                <a href="https://billing.biosoftech.in/register" className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 md:px-5 md:py-2 rounded-lg font-semibold text-xs md:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline whitespace-nowrap">
                    Start Free Trial <i className="ri-arrow-right-line"></i>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2 text-[#1A0A00] cursor-pointer"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-2xl`}></i>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed top-[70px] left-0 right-0 bg-white border-b border-gray-200 shadow-xl transition-all duration-300 md:hidden overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col p-6 gap-4 list-none">
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="block py-2 text-gray-600 font-medium text-lg border-b border-gray-50 hover:text-[#C8202D]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li className="mt-2 sm:hidden">
                        <Link
                            to="https://billing.biosoftech.in/signin"
                            className="block text-center border border-gray-300 rounded-lg px-4 py-3 text-base font-medium text-[#1A0A00] hover:border-[#C8202D] hover:text-[#C8202D]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar