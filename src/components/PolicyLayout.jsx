import React, { useEffect } from 'react';
import Footer from './Footer';

const PolicyLayout = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-[#FFF5E8] via-[#FFF0DC] to-[#FFF9F0] relative overflow-hidden">
                {/* Background Decorative Circles */}
                <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(200,32,45,0.06)_0%,transparent_70%)] pointer-events-none"></div>
                <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,149,42,0.08)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 bg-white/80 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-[30px] shadow-xl border border-white/50">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-8 border-b border-gray-100 pb-4">
                        {title}
                    </h1>
                    <div className="text-gray-700 leading-relaxed space-y-6">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PolicyLayout;
