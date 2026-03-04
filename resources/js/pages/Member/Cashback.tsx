import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    Link as LinkIcon,
    ShoppingBag,
    Package,
    Smartphone,
    Music
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function DashboardCashback() {
    return (
        <DashboardLayout title="Earn Cashback - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Earn Cashback</h1>
            </div>

            {/* Hero Search Box */}
            <div className="bg-gradient-to-br from-brand-50 to-orange-50 rounded-[2rem] p-8 md:p-12 text-center border border-brand-100 shadow-sm relative overflow-hidden mb-10">
                {/* Decor */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-200 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Paste Link, Get Cash.</h2>
                    <p className="text-slate-500 mb-8 font-medium">Found something you want to buy? Paste the product or store link below to instantly generate your cashback tracking link.</p>

                    <div className="relative max-w-xl mx-auto flex items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-brand-500">
                            <LinkIcon className="w-5 h-5" />
                        </div>
                        <input type="text" className="block w-full p-4 pl-12 text-sm text-slate-900 bg-white rounded-l-2xl border border-r-0 border-gray-200 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="e.g. shopee.vn/product-name..." />
                        <button type="submit" className="text-white bg-brand-500 hover:bg-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-300 font-bold rounded-r-2xl text-sm px-6 py-4 transition-colors">
                            Check Cashback
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm text-slate-500">
                        <span>Try:</span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200 cursor-pointer hover:border-brand-300 hover:text-brand-600 transition-colors">shopee.vn</span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200 cursor-pointer hover:border-brand-300 hover:text-brand-600 transition-colors">lazada.vn</span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200 cursor-pointer hover:border-brand-300 hover:text-brand-600 transition-colors">tiktok.com</span>
                    </div>
                </div>
            </div>

            {/* Trending Stores Grid */}
            <div className="mb-10">
                <div className="flex justify-between items-end mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Trending Stores</h3>
                    <a href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-700">View all stores</a>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Store Card 1 */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all cursor-pointer group flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#FF5722] rounded-2xl flex items-center justify-center text-white font-extrabold text-xl mb-4 group-hover:-translate-y-1 transition-transform">
                            S
                        </div>
                        <div className="font-bold text-slate-900">Shopee</div>
                        <div className="text-xs text-slate-500 mb-2">E-commerce</div>
                        <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">Up to 15%</div>
                    </div>

                    {/* Store Card 2 */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all cursor-pointer group flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0F146D] to-[#FF0A54] rounded-2xl flex items-center justify-center text-white font-extrabold text-xl italic mb-4 group-hover:-translate-y-1 transition-transform">
                            L
                        </div>
                        <div className="font-bold text-slate-900">Lazada</div>
                        <div className="text-xs text-slate-500 mb-2">E-commerce</div>
                        <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">Up to 12%</div>
                    </div>

                    {/* Store Card 3 */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all cursor-pointer group flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 font-extrabold text-xl mb-4 group-hover:-translate-y-1 transition-transform">
                            a
                        </div>
                        <div className="font-bold text-slate-900">Agoda</div>
                        <div className="text-xs text-slate-500 mb-2">Travel</div>
                        <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">Up to 8%</div>
                    </div>

                    {/* Store Card 4 */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all cursor-pointer group flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute -top-4 -right-4 bg-brand-500 text-white text-[10px] font-bold px-6 py-1 rotate-45">HOT</div>
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl mb-4 group-hover:-translate-y-1 transition-transform">
                            <Music className="w-6 h-6" />
                        </div>
                        <div className="font-bold text-slate-900">TikTok Shop</div>
                        <div className="text-xs text-slate-500 mb-2">Social</div>
                        <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">Up to 10%</div>
                    </div>
                </div>
            </div>

            {/* Top Cashback Products */}
            <div>
                <div className="flex justify-between items-end mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Top Cashback Products</h3>
                    <Link href="/member/products" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Explore products</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                        <div className="h-48 bg-gray-100 border-b border-gray-100 relative p-4 flex items-center justify-center">
                            <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">15% Cashback</div>
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center z-10 shadow-sm">
                                <ShoppingBag className="w-4 h-4" />
                            </div>
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" alt="Headphones" className="w-full h-full object-contain mix-blend-multiply opacity-80" />
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Electronics • Shopee</div>
                                <h4 className="font-bold text-slate-900 line-clamp-2 mb-2">Sony Wireless Noise Cancelling Headphones WH-1000XM5</h4>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="text-xl font-extrabold text-slate-900">$298.00</div>
                                    <div className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Earn $44.70</div>
                                </div>
                            </div>
                            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">Get Deal Linked</button>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                        <div className="h-48 bg-gray-100 border-b border-gray-100 relative p-4 flex items-center justify-center">
                            <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">10% Cashback</div>
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center z-10 shadow-sm">
                                <Package className="w-4 h-4" />
                            </div>
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60" alt="Shoes" className="w-full h-full object-contain mix-blend-multiply opacity-80" />
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Fashion • Lazada</div>
                                <h4 className="font-bold text-slate-900 line-clamp-2 mb-2">Nike Air Max 270 React Running Shoes</h4>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="text-xl font-extrabold text-slate-900">$150.00</div>
                                    <div className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Earn $15.00</div>
                                </div>
                            </div>
                            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">Get Deal Linked</button>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                        <div className="h-48 bg-gray-100 border-b border-gray-100 relative p-4 flex items-center justify-center">
                            <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">12% Cashback</div>
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center z-10 shadow-sm">
                                <Smartphone className="w-4 h-4" />
                            </div>
                            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60" alt="Camera" className="w-full h-full object-contain mix-blend-multiply opacity-80" />
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Photography • TikTok Shop</div>
                                <h4 className="font-bold text-slate-900 line-clamp-2 mb-2">Fujifilm X100V Digital Camera Silver</h4>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="text-xl font-extrabold text-slate-900">$1,399.00</div>
                                    <div className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Earn $167.88</div>
                                </div>
                            </div>
                            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">Get Deal Linked</button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
