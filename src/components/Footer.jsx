import React from 'react';
import { Link } from 'react-router-dom';
import restron from '../assets/Restron.jpeg'


const Footer = () => {
    return (
        <footer className="bg-[#1A0500] text-gray-400 py-16 px-6">

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 text-white font-bold text-2xl mb-6 no-underline">
                            <img src={restron} alt="" className='w-8 h-8' />
                            BillingMitra
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">India's most trusted GST billing and business management software. Built for retailers, restaurants, wholesalers, and SMEs across India.</p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/billingmitra" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition no-underline">
                                f
                            </a>

                            {/* <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition no-underline">
                                𝕏
                            </a> */}

                            <a href="https://www.instagram.com/billingmitra/" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition no-underline">
                                in
                            </a>

                            {/* <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition no-underline">
                                ▶
                            </a> */}

                            <a href="https://www.linkedin.com/company/billing-mitra" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition no-underline">
                                li
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6">Product</h5>
                        <ul className="space-y-3 text-sm list-none p-0">
                            <li><a href="/#features" className="hover:text-yellow-400 no-underline">Features</a></li>
                            <li><a href="/#pricing" className="hover:text-yellow-400 no-underline">Pricing</a></li>
                            <li><a href="/#signup" className="hover:text-yellow-400 no-underline">Mobile App</a></li>
                            <li><a href="/#signup" className="hover:text-yellow-400 no-underline">Desktop App</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6">Solutions</h5>
                        <ul className="space-y-3 text-sm list-none p-0">
                            <li><a href="/#features" className="hover:text-yellow-400 no-underline">Retail Shops</a></li>
                            <li><a href="/#features" className="hover:text-yellow-400 no-underline">Restaurants</a></li>
                            <li><a href="/#features" className="hover:text-yellow-400 no-underline">Wholesalers</a></li>
                            <li><a href="/#features" className="hover:text-yellow-400 no-underline">Kirana Stores</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6">Support</h5>
                        <ul className="space-y-3 text-sm list-none p-0">
                            <li><a href="/#contact" className="hover:text-yellow-400 no-underline">Help Center</a></li>
                            <li><a href="https://wa.me/919876543210" className="hover:text-yellow-400 no-underline">WhatsApp Support</a></li>
                            {/* <li><a href="/#contact" className="hover:text-yellow-400 no-underline">Video Tutorials</a></li> */}
                            <li className="hover:text-yellow-400 no-underline">+91-9044425858</li>
                            <li className="hover:text-yellow-400 no-underline">+91-6209688930</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs">
                    <p>© 2024 BillingMitra. All rights reserved. 🇮🇳 Made with ❤️ in India</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-white no-underline transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white no-underline transition-colors">Terms of Service</Link>
                        <Link to="/refund-policy" className="hover:text-white no-underline transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
