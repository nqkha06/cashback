import React from 'react';
import Layout from '@/components/Layout';
import {
    ArrowRight,
    PlayCircle,
    User,
    ShoppingBag,
    Package,
    Smartphone,
    DollarSign,
    Coins,
    BellRing,
    TrendingUp,
    Plane,
    Pizza,
    Gamepad2,
    Store,
    Shirt,
    ShieldCheck,
    Search,
    Wallet
} from 'lucide-react';

export default function Index() {
    return (
        <Layout title="Backcash - Earn Cashback Everywhere">
            {/* 1. Hero Section */}
            <section className="relative pt-12 lg:pt-20 pb-32 lg:pb-48 overflow-hidden bg-gradient-to-br from-brand-400 to-orange-400">
                {/* Abstract gradient blobs behind hero */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-float-delayed"></div>
                <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-rose-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-float"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Text */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                                Trusted by 55M+ Shoppers
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                                Earn Cashback on <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-100">Every Purchase.</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-lg leading-relaxed font-medium">
                                Shop your favorite brands and get money back automatically. The smarter way to shop, travel, and eat.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#" className="bg-white text-brand-600 px-8 py-4 rounded-full font-bold text-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2">
                                    Start Earning Now
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 text-center flex items-center justify-center gap-2">
                                    <PlayCircle className="w-5 h-5" />
                                    See how it works
                                </a>
                            </div>

                            <div className="mt-10 flex items-center gap-4 text-white/80 text-sm font-medium">
                                <div className="flex -space-x-3">
                                    <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-brand-500" alt="User" />
                                    <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-brand-500" alt="User" />
                                    <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-brand-500" alt="User" />
                                    <img src="https://i.pravatar.cc/100?img=4" className="w-10 h-10 rounded-full border-2 border-brand-500" alt="User" />
                                    <div className="w-10 h-10 rounded-full border-2 border-brand-500 bg-white text-brand-600 flex items-center justify-center text-xs font-bold">+2k</div>
                                </div>
                                <p>Joined this week</p>
                            </div>
                        </div>

                        {/* Right Visuals */}
                        <div className="relative h-[500px] lg:h-[600px] w-full hidden md:flex items-center justify-center">
                            <div className="relative w-[340px] h-[480px]">
                                {/* Main UI Card */}
                                <div style={{ top: '20%' }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-[320px] mx-auto bg-white rounded-[2rem] p-6 shadow-2xl z-20 animate-float">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 font-medium">Total Cashback</div>
                                                <div className="text-xl font-bold text-slate-900">$1,245.50</div>
                                            </div>
                                        </div>
                                        <div className="bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-full">+12%</div>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Shopee */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                                                    <ShoppingBag className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900">Shopee Mall</div>
                                                    <div className="text-xs text-slate-500">Shopee</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-green-600">+$45.20</div>
                                            </div>
                                        </div>
                                        {/* Lazada */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                                    <Package className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900">Electronics</div>
                                                    <div className="text-xs text-slate-500">Lazada</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-green-600">+$12.50</div>
                                            </div>
                                        </div>
                                        {/* Tiktok */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-slate-200 text-slate-800 rounded-xl flex items-center justify-center">
                                                    <Smartphone className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900">Beauty</div>
                                                    <div className="text-xs text-slate-500">TiktokShop</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-green-600">+$4.80</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors">Withdraw to Bank</button>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute top-10 -right-4 lg:-right-10 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10 animate-float-delayed -rotate-6">
                                    <div className="text-center">
                                        <div className="text-brand-600 font-bold text-xl">15%</div>
                                        <div className="text-[10px] text-slate-500 font-semibold uppercase">Cashback</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-12 -left-6 lg:-left-12 w-20 h-20 bg-emerald-100 rounded-2xl shadow-xl flex items-center justify-center z-30 animate-[float_4.5s_ease-in-out_1s_infinite] rotate-12 border border-emerald-200">
                                    <DollarSign className="w-10 h-10 text-emerald-600" />
                                </div>
                                <div className="absolute top-[30%] -left-8 lg:-left-16 w-16 h-16 bg-yellow-100 rounded-full shadow-lg flex items-center justify-center z-10 animate-float border-2 border-yellow-300">
                                    <Coins className="w-8 h-8 text-yellow-600" />
                                </div>
                                <div className="absolute bottom-20 -right-6 lg:-right-8 w-28 h-auto bg-white rounded-2xl shadow-xl p-3 z-30 animate-float-delayed rotate-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BellRing className="w-4 h-4 text-brand-500" />
                                        <span className="text-[10px] font-bold text-slate-700">New Reward!</span>
                                    </div>
                                    <div className="text-sm font-bold text-green-600">+$25.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Social Proof */}
            <section className="max-w-6xl mx-auto px-6 relative -mt-16 lg:-mt-24 z-20">
                <div className="bg-white/95 backdrop-blur-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-white/80 rounded-[2rem] p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
                        <div className="text-center px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">55M+</div>
                            <div className="text-sm md:text-base text-slate-500 font-medium">Happy Users</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">20K+</div>
                            <div className="text-sm md:text-base text-slate-500 font-medium">Partner Stores</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">85M</div>
                            <div className="text-sm md:text-base text-slate-500 font-medium">Yearly Purchases</div>
                        </div>
                        <div className="text-center px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">$650M</div>
                            <div className="text-sm md:text-base text-slate-500 font-medium">Cashback Paid</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Featured Brands */}
            <section id="brands" className="py-20 lg:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Featured Brands</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Earn the highest cashback rates from your favorite stores today.</p>
                    </div>

                    <div className="relative">
                        <div className="flex overflow-x-auto px-2 md:px-4 pb-8 [scrollbar-width:none] snap-x snap-mandatory gap-6 scroll-smooth">
                            {/* Shopee */}
                            <a href="#" className="relative min-w-[260px] shrink-0 snap-start bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition flex flex-col">
                                <div className="absolute -top-3 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3" /> Upsized Cashback
                                </div>
                                <div className="w-full h-32 bg-[#FF5722] rounded-[14px] flex items-center justify-center mb-5 shadow-inner">
                                    <span className="text-white font-extrabold text-2xl">Shopee</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-sm text-slate-500">Shopee</div>
                                    <div className="font-bold text-lg text-slate-900">Cashback up to 15%</div>
                                    <div className="text-sm text-slate-400 line-through">Was 8%</div>
                                    <div className="mt-2 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-lg w-fit">Ends in 8 hours</div>
                                </div>
                            </a>

                            {/* Lazada */}
                            <a href="#" className="relative min-w-[260px] shrink-0 snap-start bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition flex flex-col">
                                <div className="w-full h-32 bg-gradient-to-br from-[#0F146D] to-[#FF0A54] rounded-[14px] flex items-center justify-center mb-5">
                                    <span className="text-white font-extrabold text-2xl italic">Lazada</span>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">Lazada</div>
                                    <div className="font-bold text-lg text-slate-900">Cashback up to 12%</div>
                                    <div className="text-sm text-slate-400">Everyday rate</div>
                                </div>
                            </a>

                            {/* agoda */}
                            <a href="#" className="relative min-w-[260px] shrink-0 snap-start bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition flex flex-col">
                                <div className="absolute -top-3 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">Hot Deal</div>
                                <div className="w-full h-32 bg-gray-100 rounded-[14px] flex items-center justify-center mb-5">
                                    <span className="text-blue-600 font-extrabold text-2xl">agoda</span>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Agoda</div>
                                    <div className="font-bold text-lg text-slate-900">Cashback up to 8%</div>
                                    <div className="text-sm text-slate-400 line-through">Was 4%</div>
                                </div>
                            </a>

                            {/* traveloka */}
                            <a href="#" className="relative min-w-[260px] shrink-0 snap-start bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition flex flex-col">
                                <div className="w-full h-32 bg-[#1BA0E2] rounded-[14px] flex items-center justify-center mb-5">
                                    <span className="text-white font-extrabold text-xl">traveloka</span>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Traveloka</div>
                                    <div className="font-bold text-lg text-slate-900">Cashback up to 6.5%</div>
                                    <div className="text-sm text-slate-400">Flights & Hotels</div>
                                </div>
                            </a>

                            {/* TikTok */}
                            <a href="#" className="relative min-w-[260px] shrink-0 snap-start bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition flex flex-col">
                                <div className="absolute -top-3 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">New Store</div>
                                <div className="w-full h-32 bg-slate-900 rounded-[14px] flex items-center justify-center mb-5">
                                    <span className="text-white font-bold text-xl">TikTok Shop</span>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">TikTok Shop</div>
                                    <div className="font-bold text-lg text-slate-900">Cashback up to 10%</div>
                                    <div className="text-sm text-slate-400">No cap limit</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Categories Section */}
            <section id="categories" className="py-20 lg:py-28 relative bg-white">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Earn in every category</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">From daily essentials to dream vacations. We've got you covered.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="group relative bg-white rounded-[2rem] p-8 text-center transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden flex flex-col items-center">
                            <div className="relative w-20 h-20 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm group-hover:shadow-blue-200">
                                <ShoppingBag className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="relative font-bold text-slate-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">Shopping</h3>
                            <p className="relative text-sm text-slate-500">Clothing, tech, home</p>
                        </div>

                        <div className="group relative bg-white rounded-[2rem] p-8 text-center transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden flex flex-col items-center">
                            <div className="relative w-20 h-20 bg-emerald-50 group-hover:bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm group-hover:shadow-emerald-200">
                                <Plane className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="relative font-bold text-slate-900 text-xl mb-2 group-hover:text-emerald-600 transition-colors">Travel</h3>
                            <p className="relative text-sm text-slate-500">Flights & hotels</p>
                        </div>

                        <div className="group relative bg-white rounded-[2rem] p-8 text-center transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden flex flex-col items-center">
                            <div className="relative w-20 h-20 bg-orange-50 group-hover:bg-orange-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm group-hover:shadow-orange-200">
                                <Pizza className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="relative font-bold text-slate-900 text-xl mb-2 group-hover:text-orange-600 transition-colors">Food</h3>
                            <p className="relative text-sm text-slate-500">Delivery & dining</p>
                        </div>

                        <div className="group relative bg-white rounded-[2rem] p-8 text-center transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden flex flex-col items-center">
                            <div className="relative w-20 h-20 bg-purple-50 group-hover:bg-purple-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm group-hover:shadow-purple-200">
                                <Gamepad2 className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="relative font-bold text-slate-900 text-xl mb-2 group-hover:text-purple-600 transition-colors">Entertainment</h3>
                            <p className="relative text-sm text-slate-500">Gaming & movies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Two Column Feature */}
            <section className="py-20 lg:py-28 bg-brand-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Feature */}
                        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-brand-100 flex flex-col items-center text-center">
                            <div className="relative w-full max-w-xs aspect-square mb-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl"></div>
                                <div className="relative w-full h-full">
                                    <div className="absolute top-0 right-10 w-24 h-24 bg-white shadow-xl rounded-2xl flex items-center justify-center z-20 animate-float">
                                        <ShoppingBag className="w-10 h-10 text-brand-500" />
                                    </div>
                                    <div className="absolute bottom-10 left-10 w-28 h-28 bg-white shadow-xl rounded-full flex items-center justify-center z-20 animate-float-delayed">
                                        <Shirt className="w-12 h-12 text-blue-500" />
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-100 rounded-full flex items-center justify-center z-10 border-4 border-white">
                                        <Store className="w-16 h-16 text-brand-600" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Shop 20,000+ Categories</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">From everyday essentials like groceries to high-end electronics and fashion, we have partnered with all your favorite stores globally and locally.</p>
                            <a href="#" className="inline-flex items-center justify-center gap-2 font-bold text-brand-600 hover:text-white bg-brand-50 hover:bg-brand-600 transition-colors px-8 py-4 rounded-full w-full sm:w-auto">
                                View All Stores <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Right Feature */}
                        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-brand-100 flex flex-col items-center text-center">
                            <div className="relative w-full max-w-xs aspect-square mb-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-green-100/50 rounded-full blur-3xl"></div>
                                <div className="relative w-48 h-full bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-slate-800 flex flex-col z-20">
                                    <div className="w-20 h-5 bg-slate-800 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
                                    <div className="flex-1 bg-gray-50 flex flex-col justify-center px-4">
                                        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 border border-gray-100">
                                            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Total Balance</div>
                                            <div className="text-2xl font-black text-brand-500">$340.50</div>
                                        </div>
                                        <div className="flex items-center justify-between bg-green-100 text-green-700 p-3 rounded-xl mb-2 text-xs font-bold">
                                            <span>+ $12.50</span><span>Received</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-green-100 text-green-700 p-3 rounded-xl text-xs font-bold">
                                            <span>+ $40.00</span><span>Received</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-1/4 right-0 w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center z-30 animate-float-fast">
                                    <Coins className="w-10 h-10 text-yellow-500" />
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Watch your money grow</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">Cashback is automatically added to your wallet 24 hours after purchase. Transfer it to your bank anytime, entirely free.</p>
                            <a href="#" className="inline-flex items-center justify-center gap-2 font-bold text-slate-900 hover:text-white bg-gray-100 hover:bg-slate-900 transition-colors px-8 py-4 rounded-full w-full sm:w-auto">
                                Learn more <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. How It Works Section */}
            <section id="how-it-works" className="py-20 lg:py-28 bg-slate-900 text-white relative">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Earn cash in 3 easy steps</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">No confusing points systems. Just real cash added straight to your account when you shop.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
                        {/* Connecting lines */}
                        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-800 border-t border-dashed border-slate-700 z-0"></div>

                        {/* Step 1 */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-8 border-[6px] border-slate-900">
                                <Search className="w-10 h-10 text-brand-400" />
                            </div>
                            <div className="text-brand-400 font-bold text-sm tracking-widest uppercase mb-3">Step 1</div>
                            <h3 className="text-xl font-bold mb-3">Find your store</h3>
                            <p className="text-slate-400 leading-relaxed">Search for your favorite store on our app or website before you buy anything.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-8 border-[6px] border-slate-900">
                                <ShoppingBag className="w-10 h-10 text-orange-400" />
                            </div>
                            <div className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-3">Step 2</div>
                            <h3 className="text-xl font-bold mb-3">Shop normally</h3>
                            <p className="text-slate-400 leading-relaxed">Click through our link and shop on the brand's website exactly as you usually do.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-8 border-[6px] border-slate-900">
                                <Coins className="w-10 h-10 text-green-400" />
                            </div>
                            <div className="text-green-400 font-bold text-sm tracking-widest uppercase mb-3">Step 3</div>
                            <h3 className="text-xl font-bold mb-3">Get paid</h3>
                            <p className="text-slate-400 leading-relaxed">We get a commission for sending you there, and we share it with you as cashback!</p>
                        </div>
                    </div>

                    <div className="mt-20 flex justify-center">
                        <a href="#" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_30px_-5px_#f9512d] transition-all duration-300 text-center flex items-center gap-2">
                            Create your free account
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* 7. Reward CTA Section */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="bg-gradient-to-br from-brand-50 to-orange-50 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-sm border border-brand-100">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply opacity-50 filter blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply opacity-50 filter blur-3xl"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-8 animate-[bounce-x_1s_infinite]">
                                <Wallet className="w-10 h-10 text-brand-500" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Ready to make your money work harder?</h2>
                            <p className="text-lg text-slate-500 mb-10">Join 55M+ users who are already earning hundreds of dollars every year just by doing their regular shopping.</p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <input type="email" placeholder="Enter your email address" className="px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 w-full sm:w-80 shadow-sm" />
                                <button className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-colors shadow-lg whitespace-nowrap">
                                    Get Started
                                </button>
                            </div>
                            <p className="text-sm text-slate-400 mt-6 flex items-center justify-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-500" />
                                100% Free forever. No credit card required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
