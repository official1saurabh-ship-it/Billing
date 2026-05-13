import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import restron from '../assets/Restron.jpeg'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Why Us', href: '/#whyus' },
        { name: 'Reviews', href: '/#reviews' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <>
            {/* Backdrop Overlay */}
            <div 
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            />

            <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${
                scrolled || isMenuOpen 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200 h-[70px]' 
                : 'bg-[#FFF9F0]/95 backdrop-blur-md border-[#E8D5B0]/80 h-[70px] md:h-[80px]'
            }`}>
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-1.5 sm:gap-2 no-underline group shrink-0">
                        <div className="overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-110">
                            <img src={restron} alt="Logo" className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-cover' />
                        </div>
                        <span className="font-['Sora'] font-extrabold text-sm sm:text-base md:text-lg lg:text-xl text-[#1A0A00]">
                            Billing<span className="text-[#C8202D]">Mitra</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex gap-4 xl:gap-7 list-none items-center">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.href} 
                                    className="relative no-underline text-gray-600 font-semibold text-[13px] xl:text-[0.92rem] transition-colors duration-300 hover:text-[#C8202D] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C8202D] after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4">
                        <Link 
                            to="https://billing.biosoftech.in/signin" 
                            className="hidden md:inline-flex items-center border border-gray-300 rounded-xl px-3.5 xl:px-4.5 py-1.5 xl:py-2 text-[11px] xl:text-[13px] font-semibold text-[#1A0A00] hover:border-[#C8202D] hover:text-[#C8202D] hover:bg-red-50 transition-all duration-300 no-underline"
                        >
                            Log In
                        </Link>
                        <a 
                            href="https://billing.biosoftech.in/register" 
                            className="inline-flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-[#C8202D] to-[#E52D3D] text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-4.5 md:py-2.5 rounded-lg sm:rounded-xl font-bold text-[9px] sm:text-[11px] md:text-xs lg:text-[13px] shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 no-underline whitespace-nowrap"
                        >
                            Start Free Trial <i className="ri-arrow-right-line ml-0.5"></i>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 text-[#1A0A00] cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-lg sm:text-xl`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                <div className={`fixed top-[70px] left-0 right-0 bg-white border-b border-gray-200 shadow-2xl transition-all duration-500 lg:hidden overflow-hidden ${
                    isMenuOpen ? 'max-h-[100vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
                }`}>
                    <div className="p-6 flex flex-col gap-6 max-h-[calc(100vh-70px)] overflow-y-auto">
                        <ul className="flex flex-col gap-2 list-none">
                            {navLinks.map((item, index) => (
                                <li 
                                    key={item.name}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                    className={`transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                                >
                                    <a
                                        href={item.href}
                                        className="flex items-center justify-between py-3 px-4 rounded-xl text-gray-700 font-bold text-base sm:text-lg hover:bg-red-50 hover:text-[#C8202D] transition-all"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                        <i className="ri-arrow-right-s-line opacity-50"></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 md:hidden">
                            <Link
                                to="https://billing.biosoftech.in/signin"
                                className="w-full text-center border-2 border-gray-100 rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base font-bold text-[#1A0A00] active:bg-gray-50 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar