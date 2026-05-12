import React from 'react';
import Footer from '../components/Footer';

const HeroPage = () => {
    const featuresData = [
        {
            icon: "📊",
            title: "Billing & GST",
            sub: "Full GST compliance built in",
            bg: "bg-red-50",
            ic_bg: "bg-[#FDECEA]",
            items: [
                "GST Compliant Invoicing (0%–28%)",
                "E-way Bill Generation",
                "Credit / Debit Notes",
                "Custom Invoice Templates",
            ],
        },
        {
            icon: "📦",
            title: "Inventory & Orders",
            sub: "Track stock in real time",
            bg: "bg-green-50",
            ic_bg: "bg-[#D1FAE5]",
            items: [
                "Inventory / Stock Management",
                "Low Stock Alerts",
                "Purchase & Sales Order Management",
                "Delivery Challan",
            ],
        },
        {
            icon: "💰",
            title: "Accounting & Finance",
            sub: "Your digital khata book",
            bg: "bg-yellow-50",
            ic_bg: "bg-[#FEF3DC]",
            items: [
                "Digital Ledger (Khata)",
                "Expense Tracking",
                "Bank Reconciliation",
                "P&L Reports & Balance Sheet",
                "TDS / TCS Calculation",
            ],
        },
        {
            icon: "📈",
            title: "Reports & Analytics",
            sub: "Insights at your fingertips",
            bg: "bg-orange-50",
            ic_bg: "bg-[#FEF3C7]",
            items: [
                "GSTR-1, GSTR-2, GSTR-3B Reports",
                "Party-wise & Item-wise Reports",
                "Export to Excel / PDF",
            ],
        },
        {
            icon: "⚡",
            title: "Automation & Smart Tools",
            sub: "Work smarter, not harder",
            bg: "bg-gray-50",
            ic_bg: "bg-[#FEF3DC]",
            items: [
                "Recurring Invoices",
                "Barcode / QR Code Scanning",
                "Cheque Print Management",
            ],
        },
        {
            icon: "🌐",
            title: "Connectivity & Sharing",
            sub: "Share instantly, get paid fast",
            bg: "bg-amber-50",
            ic_bg: "bg-[#F5E8D5]",
            items: [
                "WhatsApp & SMS Invoice Sharing",
                "Online Payment (UPI, QR)",
                "Store / Online Shop Integration",
            ],
        },
        {
            icon: "🔄",
            title: "Flexibility & Security",
            sub: "Your data, always safe",
            bg: "bg-rose-50",
            ic_bg: "bg-[#FDE8EA]",
            items: [
                "Offline Mode with Auto Sync",
                "Multi-Device Sync",
                "Data Backup & Restore",
                "Multi-User Access",
                "Multiple Business Handling",
            ],
        },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-[#FFF5E8] via-[#FFF0DC] to-[#FFF9F0] flex items-center overflow-hidden">
                {/* Background Decorative Circles */}
                <div className="absolute top-[-100px] md:top-[-200px] right-[-100px] md:right-[-200px] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(200,32,45,0.06)_0%,transparent_70%)] pointer-events-none"></div>
                <div className="absolute bottom-[-50px] md:bottom-[-100px] left-[-50px] md:left-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,149,42,0.08)_0%,transparent_70%)] pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
                    {/* Left Side: Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#FEF3DC] border border-[#F5D98B] rounded-full px-4 py-1.5 text-sm font-semibold text-[#C8952A] mb-6">
                            <span>🇮🇳</span> Made for India
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            India's Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8202D] to-[#C8952A]">GST Billing</span> & Business Management Software
                        </h1>

                        {/* Subtext */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                            Manage billing, inventory, accounting, and compliance in one powerful platform — built for Indian businesses.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
                            <a href="#signup" className="bg-gradient-to-r from-[#C8202D] to-[#E52D27] text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-[0_4px_20px_rgba(200,32,45,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,32,45,0.45)] flex items-center justify-center gap-2 no-underline">
                                🚀 Start Free Trial
                            </a>
                            <a href="#contact" className="bg-white text-gray-800 border border-gray-200 px-8 py-3.5 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 hover:border-[#C8952A] hover:text-[#C8952A] hover:shadow-[0_4px_20px_rgba(200,149,42,0.15)] flex items-center justify-center gap-2 no-underline">
                                ▶ Book a Demo
                            </a>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {["GST Ready", "Works Offline", "Made for India"].map((tag, i) => (
                                <span key={i} className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-gray-800 shadow-sm">
                                    <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-[#C8202D]' : 'bg-[#C8952A]'}`}></span> {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visual */}
                    <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                        {/* Main Dashboard Card */}
                        <div className="relative bg-white rounded-[20px] shadow-2xl border border-gray-100 overflow-hidden lg:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(3deg)] lg:hover:[transform:perspective(1000px)_rotateY(-4deg)_rotateX(1deg)] transition-transform duration-500">
                            {/* Mockup Header */}
                            <div className="bg-gradient-to-r from-[#C8202D] to-[#E52D27] p-3 sm:p-4 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
                                </div>
                                <span className="text-white/80 text-[10px] sm:text-xs font-semibold">Billing Mitra — Dashboard</span>
                            </div>

                            {/* Mockup Body */}
                            <div className="p-4 sm:p-5 bg-gray-50/50">
                                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                                    {[
                                        { label: "Today's Sales", val: "₹48,250", color: "text-green-600" },
                                        { label: "Invoices", val: "24", color: "text-[#C8202D]" },
                                        { label: "Pending", val: "₹8,900", color: "text-[#C8952A]" }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white p-2 sm:p-3 rounded-xl border border-gray-100">
                                            <p className="text-[8px] sm:text-[10px] text-gray-500 font-medium mb-1">{stat.label}</p>
                                            <p className={`text-xs sm:text-sm font-bold ${stat.color}`}>{stat.val}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Recent Invoices */}
                                <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 mb-4">
                                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-900 mb-2 sm:mb-3">Recent Invoices</p>
                                    {[
                                        { name: 'Sharma Electronics', amt: '₹6,720', status: 'Paid', statusClass: 'bg-green-100 text-green-700' },
                                        { name: 'Patel Kirana', amt: '₹3,450', status: 'Pending', statusClass: 'bg-yellow-100 text-yellow-700' },
                                    ].map((inv, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                                            <span className="text-[9px] sm:text-[10px] font-medium text-gray-700">{inv.name}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[9px] sm:text-[10px] font-bold text-gray-900">{inv.amt}</span>
                                                <span className={`text-[7px] sm:text-[8px] px-2 py-0.5 rounded-full font-bold ${inv.statusClass}`}>{inv.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mini Chart */}
                                <div className="bg-white p-3 rounded-xl border border-gray-100">
                                    <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 mb-3">Weekly Revenue (₹)</p>
                                    <div className="flex items-end gap-1.5 h-10 sm:h-12">
                                        {[40, 65, 55, 80, 70, 90, 100].map((h, i) => (
                                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-[#C8202D] to-[#C8952A] rounded-t-sm opacity-80 transition-opacity"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges - Hidden on very small screens */}
                        <div className="absolute -top-5 -left-5 z-20 bg-white p-2 rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-2 animate-float">
                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-sm">✅</div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-900">Invoice Sent!</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-5 -right-5 z-20 bg-white p-2 rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-2 animate-float [animation-delay:1.5s]">
                            <div className="w-8 h-8 rounded-lg bg-[#FEF3DC] flex items-center justify-center text-sm">📊</div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-900">GSTR-3B Ready</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 md:py-16 px-6 bg-white border-y border-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-xs sm:text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">
                        Trusted by 10,000+ Indian Businesses
                    </p>
                    <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap mb-10">
                        {["Sharma Kirana", "Patel Pharma", "Gupta Traders", "Meera Cafe", "Kumar Retail"].map((item, i) => (
                            <div key={i} className="bg-[#FFF9F0] rounded-lg px-4 py-2 font-bold text-xs sm:text-sm text-gray-500 border border-gray-100">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-[#FFF9F0] py-16 md:py-24 px-6" id="features">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-1 text-[0.7rem] font-bold uppercase mb-4">
                            Everything You Need
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Powerful Features for Every Business
                        </h2>
                        <p className="text-gray-500 text-base max-w-2xl mx-auto">
                            From GST billing to inventory and accounting — Billing Mitra handles it all.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map((feat, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all group">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 ${feat.ic_bg}`}>
                                    {feat.icon}
                                </div>
                                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-[#C8202D] transition-colors">{feat.title}</h3>
                                <p className="text-sm text-gray-500 mb-6">{feat.sub}</p>
                                <ul className="space-y-3">
                                    {feat.items.slice(0, 4).map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                            <span className="w-5 h-5 flex items-center justify-center rounded-full text-white text-[0.6rem] bg-green-500">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="bg-white py-16 md:py-24 px-6" id="whyus">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-1 text-[0.7rem] font-bold uppercase mb-4">
                            Why Billing Mitra
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                            Stop Doing Business <br className="hidden sm:block" /> the Old Way
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8">
                            Say goodbye to manual ledgers and lost invoices. Billing Mitra puts you in complete control.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "Save 4+ Hours", desc: "Automate calculations & reports." },
                                { title: "Zero GST Errors", desc: "Auto-calculated tax slabs." },
                                { title: "Easy to Use", desc: "No tech skills required." },
                                { title: "Secure Data", desc: "Bank-grade cloud security." }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#FFF9F0] p-4 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { num: "10K+", label: "Active Users" },
                            { num: "50L+", label: "Invoices" },
                            { num: "99.9%", label: "Uptime" },
                            { num: "4.8★", label: "Rating" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#1A0500] p-6 sm:p-8 rounded-2xl text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.num}</p>
                                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-[#FFF9F0] py-16 md:py-24 px-6" id="pricing">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
                        <p className="text-gray-500">Choose the plan that fits your business needs.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Basic", price: "499", features: ["GST Invoicing", "Inventory", "WhatsApp Sharing", "1 User"] },
                            { name: "Pro", price: "999", popular: true, features: ["Everything in Basic", "GSTR Reports", "E-way Bills", "3 Users"] },
                            { name: "Business", price: "1999", features: ["Everything in Pro", "Multi-Business", "Unlimited Users", "Priority Support"] }
                        ].map((plan, i) => (
                            <div key={i} className={`bg-white rounded-3xl p-8 border ${plan.popular ? 'border-[#C8202D] shadow-2xl scale-105 relative z-10' : 'border-gray-100 shadow-sm'}`}>
                                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8202D] text-white px-4 py-1 rounded-full text-[10px] font-bold">MOST POPULAR</span>}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-3xl font-bold">₹{plan.price}</span>
                                    <span className="text-gray-400 text-sm">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                            <span className="text-green-500 font-bold">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#signup" className={`block w-full py-3 rounded-xl font-bold text-center no-underline transition-all ${plan.popular ? 'bg-[#C8202D] text-white shadow-lg shadow-red-200' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}>
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-16 md:py-24 px-6" id="contact">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Let's Talk Business</h2>
                            <p className="text-gray-500 mb-10">Have questions about features or pricing? Our team is ready to help you.</p>
                            
                            <div className="space-y-8">
                                {[
                                    { icon: "📍", title: "Visit Us", detail: "MG Road, Bengaluru, India" },
                                    { icon: "📞", title: "Call Us", detail: "+91-9044425858 / +91-6209688930" },
                                    { icon: "✉️", title: "Email", detail: "support@billingmitra.com" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#FFF9F0] flex items-center justify-center text-xl border border-gray-100">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-[#FFF9F0] p-6 sm:p-10 rounded-3xl border border-gray-100">
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#C8202D] transition-colors" />
                                <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#C8202D] transition-colors" />
                                <textarea rows="4" placeholder="Your Message" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#C8202D] transition-colors resize-none"></textarea>
                                <button className="w-full py-4 bg-[#C8202D] text-white rounded-xl font-bold shadow-lg shadow-red-200 hover:-translate-y-0.5 transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Floating CTA - Hidden on mobile */}
            <a href="#signup" className="fixed bottom-8 right-8 z-[999] bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3.5 rounded-full font-bold shadow-2xl hidden sm:flex items-center gap-2 hover:scale-105 transition-all animate-bounce-slow">
                🚀 Start Free Trial
            </a>
        </div>
    );
};

export default HeroPage;
