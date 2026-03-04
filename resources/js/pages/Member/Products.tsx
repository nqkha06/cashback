import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    SlidersHorizontal,
    ShoppingBag,
    Music,
    Package
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function DashboardProducts() {
    return (
        <DashboardLayout title="Top Products - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Top Products</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">

                {/* Filters Sidebar (Desktop) */}
                <div className="w-full md:w-64 bg-white border-r border-gray-100 p-6 hidden md:block flex-shrink-0">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-slate-900">Filters</h3>
                        <button className="text-xs text-brand-600 font-bold hover:text-brand-700">Clear all</button>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-700 mb-3">Category</h4>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded text-brand-500 focus:ring-brand-500 cursor-pointer" defaultChecked />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Electronics</span>
                            </label>
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded text-brand-500 focus:ring-brand-500 cursor-pointer" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Fashion</span>
                            </label>
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded text-brand-500 focus:ring-brand-500 cursor-pointer" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Travel</span>
                            </label>
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded text-brand-500 focus:ring-brand-500 cursor-pointer" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Beauty</span>
                            </label>
                        </div>
                    </div>

                    <hr className="border-gray-100 mb-6" />

                    {/* Store Filter */}
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-700 mb-3">Store</h4>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded text-brand-500 focus:ring-brand-500 cursor-pointer" defaultChecked />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Shopee</span>
                            </label>
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded text-brand-500 focus:ring-brand-500 cursor-pointer" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Lazada</span>
                            </label>
                            <label className="flex items-center gap-3 group cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded text-brand-500 focus:ring-brand-500 cursor-pointer" defaultChecked />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">TikTok Shop</span>
                            </label>
                        </div>
                    </div>

                    <hr className="border-gray-100 mb-6" />

                    {/* Cashback % Filter */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-700 mb-3">Cashback Rate</h4>
                        <input type="range" className="w-full accent-brand-500 mb-2 cursor-pointer" min="1" max="50" defaultValue="10" />
                        <div className="flex justify-between text-xs text-slate-500 font-bold">
                            <span>1%</span>
                            <span>50%</span>
                        </div>
                        <div className="text-sm font-bold text-brand-600 text-center mt-2">10% or more</div>
                    </div>
                </div>

                {/* Products Grid Area */}
                <div className="flex-1 p-6 md:p-8 bg-gray-50/50">

                    {/* Mobile Filter Button & Sort */}
                    <div className="flex justify-between items-center mb-6">
                        <button className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 text-sm font-bold shadow-sm">
                            <SlidersHorizontal className="w-4 h-4" />
                            Filter
                        </button>

                        <div className="flex items-center gap-2 ml-auto max-w-[200px]">
                            <span className="text-sm text-slate-500 hidden sm:block w-max">Sort by:</span>
                            <select className="bg-white border border-gray-200 text-slate-900 text-sm font-bold rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-2 w-full appearance-none outline-none">
                                <option>Highest Cashback</option>
                                <option>Highest Price</option>
                                <option>Lowest Price</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">

                        {/* Product Card 1 */}
                        <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all group flex flex-col">
                            <div className="h-48 bg-gray-100 border-b border-gray-100 relative p-4 flex items-center justify-center overflow-hidden">
                                <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-sm">15% CV</div>
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center z-10 shadow-sm">
                                    <ShoppingBag className="w-4 h-4" />
                                </div>
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" alt="Headphones" className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">Electronics</div>
                                    <h4 className="font-bold text-slate-900 line-clamp-2 mb-2 leading-tight">Sony Wireless Noise Cancelling Headphones WH-1000XM5</h4>
                                    <div className="flex items-center justify-between mb-4 mt-3">
                                        <div className="text-lg font-extrabold text-slate-900">$298.00</div>
                                        <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+ $44.70</div>
                                    </div>
                                </div>
                                <button className="w-full bg-slate-100 group-hover:bg-brand-500 group-hover:text-white text-slate-700 font-bold py-2.5 rounded-xl transition-colors text-sm border border-transparent group-hover:border-brand-600">
                                    Get Link
                                </button>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all group flex flex-col">
                            <div className="h-48 bg-gray-100 border-b border-gray-100 relative p-4 flex items-center justify-center overflow-hidden">
                                <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-sm">25% CV</div>
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center z-10 shadow-sm">
                                    <Music className="w-4 h-4" />
                                </div>
                                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60" alt="Camera" className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">Photography</div>
                                    <h4 className="font-bold text-slate-900 line-clamp-2 mb-2 leading-tight">Fujifilm X100V Digital Camera Silver</h4>
                                    <div className="flex items-center justify-between mb-4 mt-3">
                                        <div className="text-lg font-extrabold text-slate-900">$1,399.00</div>
                                        <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+ $349.75</div>
                                    </div>
                                </div>
                                <button className="w-full bg-slate-100 group-hover:bg-brand-500 group-hover:text-white text-slate-700 font-bold py-2.5 rounded-xl transition-colors text-sm border border-transparent group-hover:border-brand-600">
                                    Get Link
                                </button>
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all group flex flex-col">
                            <div className="h-48 bg-gray-100 border-b border-gray-100 relative p-4 flex items-center justify-center overflow-hidden">
                                <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-sm">10% CV</div>
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center z-10 shadow-sm">
                                    <Package className="w-4 h-4" />
                                </div>
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60" alt="Shoes" className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">Fashion</div>
                                    <h4 className="font-bold text-slate-900 line-clamp-2 mb-2 leading-tight">Nike Air Max 270 React Running Shoes Mens</h4>
                                    <div className="flex items-center justify-between mb-4 mt-3">
                                        <div className="text-lg font-extrabold text-slate-900">$150.00</div>
                                        <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+ $15.00</div>
                                    </div>
                                </div>
                                <button className="w-full bg-slate-100 group-hover:bg-brand-500 group-hover:text-white text-slate-700 font-bold py-2.5 rounded-xl transition-colors text-sm border border-transparent group-hover:border-brand-600">
                                    Get Link
                                </button>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all group flex flex-col">
                            <div className="h-48 bg-gray-100 border-b border-gray-100 relative p-4 flex items-center justify-center overflow-hidden">
                                <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-lg z-10 shadow-sm">18% CV</div>
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center z-10 shadow-sm">
                                    <ShoppingBag className="w-4 h-4" />
                                </div>
                                <img src="https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=500&auto=format&fit=crop&q=60" alt="Audio" className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">Electronics</div>
                                    <h4 className="font-bold text-slate-900 line-clamp-2 mb-2 leading-tight">JBL Flip 6 Portable Bluetooth Speaker</h4>
                                    <div className="flex items-center justify-between mb-4 mt-3">
                                        <div className="text-lg font-extrabold text-slate-900">$129.95</div>
                                        <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+ $23.39</div>
                                    </div>
                                </div>
                                <button className="w-full bg-slate-100 group-hover:bg-brand-500 group-hover:text-white text-slate-700 font-bold py-2.5 rounded-xl transition-colors text-sm border border-transparent group-hover:border-brand-600">
                                    Get Link
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Pagination Placeholder */}
                    <div className="flex justify-center mt-10">
                        <button className="bg-white border border-gray-200 text-slate-700 font-bold px-6 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                            Load More Products
                        </button>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}
