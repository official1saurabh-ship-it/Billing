import React from 'react';
import { useNavigate } from 'react-router-dom';


const HeroPage = () => {
    const navigate = useNavigate();

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
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-[#FFF5E8] via-[#FFF0DC] to-[#FFF9F0] flex items-center overflow-hidden">
                {/* Background Decorative Circles */}
                <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(200,32,45,0.06)_0%,transparent_70%)] pointer-events-none"></div>
                <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,149,42,0.08)_0%,transparent_70%)] pointer-events-none"></div>
                {/* {banner} */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
                    {/* Left Side: Content */}
                    <div className="flex flex-col items-start text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#FEF3DC] border border-[#C8952A] rounded-full px-4 py-1.5 text-sm font-semibold text-[#C8952A] mb-6">
                            <span>🇮🇳</span> Made for India
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            India's Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8202D] to-[#C8952A]">GST Billing</span> & Business Management Software
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                            Manage billing, inventory, accounting, and compliance in one powerful platform — built for Indian businesses.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <a href="#signup" className="bg-gradient-to-r from-[#C8202D] to-[#E52D27] text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-[0_4px_20px_rgba(200,32,45,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,32,45,0.45)] flex items-center gap-2 no-underline">
                                🚀 Start Free Trial
                            </a>
                            <a href="#contact" className="bg-white text-gray-800 border border-gray-200 px-8 py-3.5 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 hover:border-[#C8952A] hover:text-[#C8952A] hover:shadow-[0_4px_20px_rgba(200,149,42,0.15)] flex items-center gap-2 no-underline">
                                ▶ Book a Demo
                            </a>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-800 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> GST Ready
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-800 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-[#C8202D]"></span> Works Offline
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-800 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-[#C8952A]"></span> Made for India
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Visual */}
                    <div className="relative">
                        {/* Top Floating Badge */}
                        <div className="absolute -top-5 -left-10 z-0 bg-white p-3 rounded-xl shadow-[0_8px_32px_rgba(200,32,45,0.15)] border border-gray-100 hidden sm:flex items-center gap-3 animate-float">
                            <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-lg">✅</div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Invoice Sent!</p>
                                <p className="text-[10px] text-gray-500">Ramesh Stores • ₹12,450</p>
                            </div>
                        </div>

                        {/* Main Dashboard Card */}
                        <div className="relative bg-white rounded-[20px] shadow-2xl border border-gray-100 overflow-hidden [transform:perspective(1000px)_rotateY(-8deg)_rotateX(3deg)] hover:[transform:perspective(1000px)_rotateY(-4deg)_rotateX(1deg)] transition-transform duration-500">
                            {/* Mockup Header */}
                            <div className="bg-gradient-to-r from-[#C8202D] to-[#E52D27] p-4 flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
                                </div>
                                <span className="text-white/80 text-xs font-semibold">Billing Mitra — Dashboard</span>
                            </div>

                            {/* Mockup Body */}
                            <div className="p-5 bg-gray-50/50">
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-500 font-medium mb-1">Today's Sales</p>
                                        <p className="text-sm font-bold text-green-600">₹48,250</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-500 font-medium mb-1">Invoices</p>
                                        <p className="text-sm font-bold text-[#C8202D]">24</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-500 font-medium mb-1">Pending</p>
                                        <p className="text-sm font-bold text-[#C8952A]">₹8,900</p>
                                    </div>
                                </div>

                                {/* Recent Invoices */}
                                <div className="bg-white p-4 rounded-xl border border-gray-100 mb-4">
                                    <p className="text-[11px] font-bold text-gray-900 mb-3">Recent Invoices</p>
                                    {[
                                        { name: 'Sharma Electronics', amt: '₹6,720', status: 'Paid', statusClass: 'bg-green-100 text-green-700' },
                                        { name: 'Patel Kirana', amt: '₹3,450', status: 'Pending', statusClass: 'bg-yellow-100 text-yellow-700' },
                                        { name: 'Gupta Wholesale', amt: '₹15,200', status: 'Paid', statusClass: 'bg-green-100 text-green-700' },
                                    ].map((inv, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                                            <span className="text-[10px] font-medium text-gray-700">{inv.name}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-gray-900">{inv.amt}</span>
                                                <span className={`text-[8px] px-2 py-0.5 rounded-full font-bold ${inv.statusClass}`}>{inv.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mini Chart */}
                                <div className="bg-white p-3 rounded-xl border border-gray-100">
                                    <p className="text-[10px] font-bold text-gray-400 mb-3">Weekly Revenue (₹)</p>
                                    <div className="flex items-end gap-1.5 h-12">
                                        {[40, 65, 55, 80, 70, 90, 100].map((h, i) => (
                                            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-[#C8202D] to-[#C8952A] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Floating Badge */}
                        <div className="absolute -bottom-5 -right-5 z-20 bg-white p-3 rounded-xl shadow-[0_8px_32px_rgba(200,32,45,0.15)] border border-gray-100 hidden sm:flex items-center gap-3 animate-float [animation-delay:1.5s]">
                            <div className="w-9 h-9 rounded-lg bg-[#FEF3DC] flex items-center justify-center text-lg">📊</div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">GSTR-3B Ready</p>
                                <p className="text-[10px] text-gray-500">Auto-calculated • Download</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* {Trust Section} */}
            <div className="h-1 bg-gradient-to-r from-[#C8952A] via-[#E8B84B] to-[#C8952A]"></div>
            <section className="py-[60px] px-8 bg-white border-y border-gray-200">
                <div className="max-w-[1100px] mx-auto text-center">
                    <p className="text-[0.9rem] font-semibold text-gray-500 tracking-[0.08em] uppercase mb-8">
                        Trusted by 10,000+ Indian Businesses
                    </p>
                    <div className="flex items-center justify-center gap-10 flex-wrap mb-10">
                        {[
                            "Sharma Kirana",
                            "Patel Pharma",
                            "Gupta Traders",
                            "Meera Cafe",
                            "Raj Distributors",
                            "Kumar Retail"
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="h-9 bg-[#FEF3DC] rounded-md px-5 flex items-center 
                                font-['Sora'] font-bold text-[0.85rem] text-gray-500 border border-gray-200"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4 justify-center flex-wrap">
                        {[
                            "✅ GST Ready",
                            "🔒 Bank-grade Security",
                            "☁️ Cloud Sync",
                            "📱 Mobile + Desktop",
                            "🇮🇳 Made in India"
                        ].map((tag, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 bg-[#FFF9F0] border border-gray-200 
                                rounded-full px-5 py-2 text-[0.82rem] font-semibold text-gray-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            <div className="h-1 bg-gradient-to-r from-[#C8952A] via-[#E8B84B] to-[#C8952A]"></div>

            {/* Features Section */}
            <section className="bg-[#FFF9F0] py-24 px-6" id="features">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase mb-4">
                            Everything You Need
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Powerful Features for Every Business
                        </h2>
                        <p className="text-gray-500 text-lg">
                            From GST billing to inventory and accounting — Billing Mitra handles it all.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {featuresData.map((feat, i) => (
                            <div
                                key={i}
                                className="relative bg-white rounded-[20px] border border-gray-200 p-7 
                                transition-all duration-300 overflow-hidden
                                hover:-translate-y-1 hover:shadow-xl hover:border-red-200"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-red-500 rounded-t-[20px]" />
                                <div className="flex items-center gap-3.5 mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${feat.ic_bg}`}>
                                        {feat.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-['Sora'] font-bold text-base text-gray-800">
                                            {feat.title}
                                        </h3>
                                        <p className="text-[0.78rem] text-gray-500 mt-0.5">
                                            {feat.sub}
                                        </p>
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    {feat.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-800">
                                            <span className="w-5 h-5 flex items-center justify-center 
                                            rounded-full text-white text-[0.7rem]
                                            bg-gradient-to-r from-orange-400 to-red-500">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase mb-4">
                            Product Preview
                        </div>
                        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold text-gray-900 mb-4 leading-[1.2]">
                            See It In Action
                        </h2>
                        <p className="text-[1.05rem] text-gray-500 leading-[1.75] max-w-[580px] mx-auto">
                            Clean, intuitive screens built for real Indian business workflows.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="rounded-[20px] overflow-hidden border border-gray-200 relative transition-all duration-300 hover:-translate-y-[6px] hover:shadow-xl">
                            <div className="aspect-[4/3] flex flex-col p-4 bg-[linear-gradient(135deg,#7A0F18_0%,#C8202D_100%)]">
                                <div className="text-white/75 text-[0.7rem] font-semibold mb-3 font-['Sora']">📄 GST Invoice — Billing Screen</div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between items-center">
                                    <span className="text-white text-[0.75rem] font-medium">Invoice #BM-2024-001</span>
                                    <span className="text-[0.62rem] px-2 py-[2px] rounded-full bg-white/20 text-white">Draft</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">Customer: Sharma Electronics</span>
                                    <span className="text-white text-[0.8rem] font-bold">₹6,720</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">GST (18%)</span>
                                    <span className="text-white text-[0.8rem] font-bold">₹1,210</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 flex justify-between">
                                    <span className="text-white font-bold text-[0.75rem]">Total Amount</span>
                                    <span className="text-white text-[1rem] font-bold">₹7,930</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-['Sora'] font-bold text-[0.95rem] text-gray-800 mb-1">GST Billing Screen</h4>
                                <p className="text-[0.82rem] text-gray-500 leading-[1.6]">Create professional GST invoices in seconds with auto tax calculation and one-click WhatsApp sharing.</p>
                            </div>
                        </div>
                        <div className="rounded-[20px] overflow-hidden border border-gray-200 relative transition-all duration-300 hover:-translate-y-[6px] hover:shadow-xl">
                            <div className="aspect-[4/3] flex flex-col p-4 bg-[linear-gradient(135deg,#6B3A00_0%,#C8952A_100%)]">
                                <div className="text-white/75 text-[0.7rem] font-semibold mb-3 font-['Sora']">📦 Inventory Dashboard</div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">Basmati Rice 5kg</span>
                                    <span className="text-white text-[0.8rem] font-bold">248 units</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">Cooking Oil 1L</span>
                                    <span className="text-white text-[0.8rem] font-bold">82 units</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-[#FCA5A5] text-[0.75rem]">⚠ Toor Dal 1kg</span>
                                    <span className="text-[0.62rem] px-2 py-[2px] rounded-full bg-white/20 text-white">Low Stock</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">Total Stock Value</span>
                                    <span className="text-white text-[0.8rem] font-bold">₹3.2L</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-['Sora'] font-bold text-[0.95rem] text-gray-800 mb-1">Inventory Dashboard</h4>
                                <p className="text-[0.82rem] text-gray-500 leading-[1.6]">Know exactly what's in stock, get alerts before you run out, and manage purchase orders seamlessly.</p>
                            </div>
                        </div>
                        <div className="rounded-[20px] overflow-hidden border border-gray-200 relative transition-all duration-300 hover:-translate-y-[6px] hover:shadow-xl">
                            <div className="aspect-[4/3] flex flex-col p-4 bg-[linear-gradient(135deg,#3D0A0D_0%,#A01520_100%)]">
                                <div className="text-white/75 text-[0.7rem] font-semibold mb-3 font-['Sora']">📱 Mobile App View</div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">Today's Sales</span>
                                    <span className="text-white text-[0.8rem] font-bold">₹48,250</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">Pending Dues</span>
                                    <span className="text-white text-[0.8rem] font-bold">₹8,900</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 mb-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">Quick Collect UPI</span>
                                    <span className="text-[0.62rem] px-2 py-[2px] rounded-full bg-white/20 text-white">Active</span>
                                </div>
                                <div className="bg-white/10 rounded-lg px-3 py-2 flex justify-between">
                                    <span className="text-white text-[0.75rem]">GSTR-3B Status</span>
                                    <span className="text-[0.62rem] px-2 py-[2px] rounded-full bg-[rgba(27,140,78,0.4)] text-white">Ready</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-['Sora'] font-bold text-[0.95rem] text-gray-800 mb-1">Mobile App</h4>
                                <p className="text-[0.82rem] text-gray-500 leading-[1.6]">Run your entire business from your phone. Bill, collect payment, and check reports anywhere, anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="bg-[#FFF9F0] py-24 px-6" id="whyus">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase mb-4">
                            WHY BILLING MITRA
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            Stop Doing Business <br /> the Old Way
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
                            Say goodbye to manual ledgers, lost invoices, and missed GST
                            deadlines. Billing Mitra puts you in complete control.
                        </p>
                        <div className="space-y-6">
                            {[
                                { icon: "⏱️", title: "Save 4+ Hours Every Day", desc: "Auto calculations, recurring invoices, and instant reports eliminate manual work." },
                                { icon: "🎯", title: "Zero GST Errors", desc: "Auto-correct tax slabs, GSTR filings, and e-way bill generation keep you compliant." },
                                { icon: "📱", title: "Incredibly Easy to Use", desc: "Designed for non-tech savvy business owners. Start billing in under 5 minutes." },
                                { icon: "💸", title: "Unbeatable Pricing", desc: "Starting at just ₹499/month — less than a chai per day for your entire business." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition group hover:border-red-200">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-xl flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { num: "10K+", label: "Active Businesses" },
                            { num: "50L+", label: "Invoices Generated" },
                            { num: "99.9%", label: "Uptime Guarantee" },
                            { num: "4.8★", label: "Average Rating" }
                        ].map((stat, i) => (
                            <div key={i} className="relative group overflow-hidden bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg">
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#5D4037] rounded-full scale-0 group-hover:scale-[3] transition-transform duration-700 ease-in-out opacity-[0.05]"></div>
                                <div className="relative z-10">
                                    <p className="text-3xl font-bold text-orange-600 transition-colors duration-300 group-hover:text-orange-700">{stat.num}</p>
                                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase mb-4">
                            How It Works
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Started in 3 Simple Steps</h2>
                        <p className="text-gray-500 text-lg">No training needed. Start billing professionally from day one.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 z-0"></div>
                        {[
                            { step: 1, title: "Add Your Products", desc: "Import your product catalogue, set HSN codes and GST rates. Scan barcodes to add instantly." },
                            { step: 2, title: "Create Invoice", desc: "Select customer, add items — GST is auto-calculated. Share via WhatsApp in one tap." },
                            { step: 3, title: "Track & Reports", desc: "Monitor dues, collect UPI payments, and download GSTR reports for filing — all in one screen." }
                        ].map((item, i) => (
                            <div key={i} className="text-center relative z-10">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center text-3xl font-extrabold shadow-lg mx-auto mb-6">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-[#FFF9F0] py-24 px-6" id="pricing">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase mb-4">
                            Pricing
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-gray-500 text-lg">No hidden fees. No surprises. Start free and upgrade when you're ready.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-500 mb-2">Basic</h3>
                            <div className="text-5xl font-extrabold text-gray-800 mb-2">₹499<span className="text-lg font-medium text-gray-400">/month</span></div>
                            <p className="text-gray-500 text-sm mb-8">Perfect for small shops and kirana stores</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> GST Invoicing (unlimited)</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Inventory Management</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Digital Ledger (Khata)</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> WhatsApp Sharing</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> 1 User Access</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Offline Mode</li>
                            </ul>
                            <a href="#signup" className="block w-full py-3 rounded-xl border border-gray-200 font-bold text-gray-800 hover:border-red-500 hover:text-red-500 transition text-center no-underline">Get Started</a>
                        </div>
                        <div className="bg-white rounded-3xl border-2 border-red-500 p-8 shadow-2xl scale-105 relative z-10">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-1 rounded-full text-xs font-bold whitespace-nowrap">⭐ Most Popular</div>
                            <h3 className="text-xl font-bold text-red-600 mb-2">Pro</h3>
                            <div className="text-5xl font-extrabold text-gray-800 mb-2">₹999<span className="text-lg font-medium text-gray-400">/month</span></div>
                            <p className="text-gray-500 text-sm mb-8">For growing businesses needing full control</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Everything in Basic</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> GSTR-1, 2, 3B Reports</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> E-way Bill Generation</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Barcode / QR Scanning</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> UPI / QR Payment Collection</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> 3 User Access</li>
                            </ul>
                            <a href="#signup" className="block w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-bold shadow-lg hover:shadow-xl transition text-center no-underline">Start Free Trial</a>
                        </div>
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-500 mb-2">Business</h3>
                            <div className="text-5xl font-extrabold text-gray-800 mb-2">₹1,999<span className="text-lg font-medium text-gray-400">/month</span></div>
                            <p className="text-gray-500 text-sm mb-8">For distributors, chains, and large SMEs</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Everything in Pro</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Multiple Business Handling</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Unlimited User Access</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Online Store Integration</li>
                                <li className="flex items-center gap-3 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Dedicated Account Manager</li>
                            </ul>
                            <a href="#contact" className="block w-full py-3 rounded-xl border border-gray-200 font-bold text-gray-800 hover:border-red-500 hover:text-red-500 transition text-center no-underline">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-24 px-6" id="reviews">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase mb-4">
                            Success Stories
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Loved by Indian Business Owners</h2>
                        <p className="text-gray-500 text-lg">Real stories from real businesses across India.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Ramesh Sharma", role: "Kirana Store Owner, Jaipur", initial: "RS", text: "\"Billing Mitra ne mera GST filing ka sab tension khatam kar diya. Pehle 2 ghante lagte the, ab 10 minute mein ho jaata hai. Bahut accha software hai!\"" },
                            { name: "Priya Mehta", role: "Restaurant Owner, Pune", initial: "PM", text: "\"I run 3 restaurants and Billing Mitra manages all of them from one app. The inventory alerts and instant WhatsApp billing have been a complete game changer for us.\"" },
                            { name: "Amit Gupta", role: "Wholesale Distributor, Delhi", initial: "AG", text: "\"As a distributor handling 500+ customers, I needed something robust. GSTR reports, party-wise ledger, e-way bills — everything in one place. Highly recommended!\"" }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#FFF9F0] rounded-[20px] border border-gray-200 p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
                                <p className="text-gray-700 italic leading-relaxed mb-6">{item.text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center font-bold">
                                        {item.initial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-24 px-6" id="contact">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#FEF3DC] text-[#C8952A] border border-[#F5D98B] rounded-full px-4 py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase mb-4">
                            Contact Us
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch With Us</h2>
                        <p className="text-gray-500 text-lg">Have questions? Our team is here to help you grow your business.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Form */}
                        <div className="bg-[#FFF9F0] rounded-[30px] p-8 md:p-10 border border-gray-200 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-[#C8202D] focus:ring-2 focus:ring-[#C8202D]/10 outline-none transition" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-[#C8202D] focus:ring-2 focus:ring-[#C8202D]/10 outline-none transition" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-[#C8202D] focus:ring-2 focus:ring-[#C8202D]/10 outline-none transition" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                    <textarea rows="4" placeholder="How can we help you?" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-[#C8202D] focus:ring-2 focus:ring-[#C8202D]/10 outline-none transition resize-none"></textarea>
                                </div>
                                <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-10">
                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 text-2xl flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-xl mb-1">Our Office</h4>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=MG+Road+Bengaluru+Karnataka+India"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 leading-relaxed hover:text-[#C8202D] transition-colors no-underline"
                                        >
                                            123 Business Hub, MG Road, <br />Bengaluru, Karnataka 560001, India
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 text-2xl flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-xl mb-1">Call Us</h4>
                                        <p className="text-gray-500">Sales: +91 1800-000-0000 (Toll Free)</p>
                                        <p className="text-gray-500">Support: +91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600 text-2xl flex-shrink-0">
                                        ✉️
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-xl mb-1">Email Us</h4>
                                        <p className="text-gray-500">support@billingmitra.com</p>
                                        <p className="text-gray-500">sales@billingmitra.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Real Google Map Embed */}
                            <div className="h-[300px] w-full rounded-[30px] overflow-hidden border border-gray-200 shadow-inner group relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.925562725458!2d77.6019688!3d12.9763784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679093e0987%3A0x6a2c3098e6c7104b!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715525500000!5m2!1sen!2sin"
                                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Billing Mitra Office Location"
                                ></iframe>

                                {/* View on Google Maps Button */}
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=MG+Road+Bengaluru+Karnataka+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-800 shadow-lg hover:bg-white hover:text-[#C8202D] transition-all no-underline flex items-center gap-2"
                                >
                                    <span>📍 View on Google Maps</span>
                                </a>

                                <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:pointer-events-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 py-24 px-6 text-center text-white relative overflow-hidden" id="signup">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-white rounded-full"></div>
                    <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-yellow-400 rounded-full"></div>
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Start Managing Your Business Smarter Today</h2>
                    <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto">Join 10,000+ Indian businesses already saving time, reducing errors, and staying GST-compliant with Billing Mitra.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#signup" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition no-underline">🚀 Start Free Trial — No Card Needed</a>
                        <a href="#contact" className="bg-transparent border-2 border-white/60 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition no-underline">▶ Book a Free Demo</a>
                    </div>
                </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-[#C8952A] via-[#E8B84B] to-[#C8952A]"></div>



            {/* Footer */}
            <footer className="bg-[#1A0500] text-gray-400 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 text-white font-bold text-2xl mb-6">
                                <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">B</div>
                                BillingMitra
                            </div>
                            <p className="text-sm leading-relaxed mb-6">India's most trusted GST billing and business management software. Built for retailers, restaurants, wholesalers, and SMEs across India.</p>
                            <div className="flex gap-4">
                                {['f', '𝕏', 'in', '▶', 'li'].map((social, i) => (
                                    <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition">{social}</a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-6">Product</h5>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#features" className="hover:text-yellow-400 no-underline">Features</a></li>
                                <li><a href="#pricing" className="hover:text-yellow-400 no-underline">Pricing</a></li>
                                <li><a href="#signup" className="hover:text-yellow-400 no-underline">Mobile App</a></li>
                                <li><a href="#signup" className="hover:text-yellow-400 no-underline">Desktop App</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-6">Solutions</h5>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#features" className="hover:text-yellow-400 no-underline">Retail Shops</a></li>
                                <li><a href="#features" className="hover:text-yellow-400 no-underline">Restaurants</a></li>
                                <li><a href="#features" className="hover:text-yellow-400 no-underline">Wholesalers</a></li>
                                <li><a href="#features" className="hover:text-yellow-400 no-underline">Kirana Stores</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-6">Support</h5>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#contact" className="hover:text-yellow-400 no-underline">Help Center</a></li>
                                <li><a href="https://wa.me/919876543210" className="hover:text-yellow-400 no-underline">WhatsApp Support</a></li>
                                <li><a href="#contact" className="hover:text-yellow-400 no-underline">Video Tutorials</a></li>
                                <li className="hover:text-yellow-400 no-underline">+91-9044425858</li>
                                <li className="hover:text-yellow-400 no-underline">+91-6209688930</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs">
                        <p>© 2024 BillingMitra. All rights reserved. 🇮🇳 Made with ❤️ in India</p>
                        <div className="flex gap-6">
                            <div onClick={() => navigate("/privacy-policy")} className="hover:text-white">Privacy Policy</div>
                            <div onClick={() => navigate("/refund-policy")} className="hover:text-white">Terms of Service</div>
                            <div onClick={() => navigate("/terms-of-service")} className="hover:text-white">Refund Policy</div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating CTA */}
            <a href="#signup" className="fixed bottom-8 right-8 z-[999] bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3.5 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:scale-105 transition-all animate-bounce-slow">
                🚀 Start Free Trial
            </a>
        </>
    );
};

export default HeroPage;
