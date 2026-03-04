import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    Wallet,
    Clock,
    MoreHorizontal,
    PiggyBank,
    ShoppingBag,
    ArrowDownToLine,
    Store,
    Package,
    Plane
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function DashboardIndex() {
    return (
        <DashboardLayout title="Dashboard Overview - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Overview</h1>
            </div>

            {/* Welcome Row & Main Cards */}
            <div className="flex flex-col xl:flex-row gap-6 mb-6">

                {/* Balance Main Card */}
                <div className="flex-1 bg-gradient-to-br from-brand-500 to-orange-400 rounded-[2rem] p-8 text-white shadow-[0_15px_40px_-15px_rgba(255,112,67,0.4)] relative overflow-hidden">
                    {/* Abstract shapes */}
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <div className="text-white/80 font-medium text-sm mb-1 uppercase tracking-wider">Available Balance</div>
                                <div className="text-4xl md:text-5xl font-extrabold tracking-tight">$340.50</div>
                            </div>
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                                <Wallet className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3 border border-white/20 w-full sm:w-auto">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <Clock className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-white/70 font-medium">Pending Cashback</div>
                                    <div className="font-bold">$45.20</div>
                                </div>
                            </div>
                            <Link href="/member/withdraw" className="w-full sm:w-auto bg-white text-brand-600 hover:bg-gray-50 px-6 py-3 rounded-xl font-bold transition-colors text-center shadow-sm">
                                Withdraw Funds
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Earnings Analytics Card (Mock Chart) */}
                <div className="xl:w-1/3 bg-white rounded-[2rem] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-900 text-lg">Earnings Activity</h3>
                        <button className="text-slate-400 hover:text-slate-600">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Simple CSS Bar Chart */}
                    <div className="flex-1 flex items-end justify-between gap-2 h-32 mb-4 px-2">
                        <div className="w-1/6 bg-brand-100 rounded-t-sm h-[30%] hover:bg-brand-200 transition-colors relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$12</div>
                        </div>
                        <div className="w-1/6 bg-brand-100 rounded-t-sm h-[50%] hover:bg-brand-200 transition-colors relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$24</div>
                        </div>
                        <div className="w-1/6 bg-brand-100 rounded-t-sm h-[40%] hover:bg-brand-200 transition-colors relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$18</div>
                        </div>
                        <div className="w-1/6 bg-brand-100 rounded-t-sm h-[80%] hover:bg-brand-200 transition-colors relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$42</div>
                        </div>
                        <div className="w-1/6 bg-brand-500 rounded-t-sm h-[60%] shadow-[0_0_15px_-3px_#FF7043] relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$31</div>
                        </div>
                        <div className="w-1/6 bg-brand-100 rounded-t-sm h-[40%] hover:bg-brand-200 transition-colors relative group">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$19</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-400 px-2 uppercase border-t border-gray-50 pt-3">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span className="text-brand-500 font-bold">Fri</span>
                        <span>Sat</span>
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                        <PiggyBank className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[11px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Total Earned</div>
                        <div className="text-lg md:text-xl font-bold text-slate-900">$1,245.50</div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[11px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Total Orders</div>
                        <div className="text-lg md:text-xl font-bold text-slate-900">42</div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                        <ArrowDownToLine className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[11px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Total Withdrawn</div>
                        <div className="text-lg md:text-xl font-bold text-slate-900">$860.00</div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                        <Store className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[11px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Active Stores</div>
                        <div className="text-lg md:text-xl font-bold text-slate-900">12</div>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6 px-2">
                    <h3 className="font-bold text-slate-900 text-lg">Recent Cashback</h3>
                    <a href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-700">View All</a>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="text-xs text-slate-400 uppercase tracking-wider border-b border-gray-50">
                                <th className="px-4 py-3 font-semibold">Store</th>
                                <th className="px-4 py-3 font-semibold">Date</th>
                                <th className="px-4 py-3 font-semibold text-right">Order Amount</th>
                                <th className="px-4 py-3 font-semibold text-right">Cashback</th>
                                <th className="px-4 py-3 font-semibold text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {/* Row 1 */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                            <ShoppingBag className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Shopee Mall</div>
                                            <div className="text-xs text-slate-500">Order #849201</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">Oct 12, 2025</td>
                                <td className="px-4 py-4 text-sm text-slate-900 font-bold text-right">$450.00</td>
                                <td className="px-4 py-4 text-sm text-green-600 font-bold text-right">+$45.00</td>
                                <td className="px-4 py-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
                                        Available
                                    </span>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                            <Package className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Lazada</div>
                                            <div className="text-xs text-slate-500">Order #339102</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">Oct 10, 2025</td>
                                <td className="px-4 py-4 text-sm text-slate-900 font-bold text-right">$125.50</td>
                                <td className="px-4 py-4 text-sm text-orange-500 font-bold text-right">+$12.55</td>
                                <td className="px-4 py-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-bold rounded-lg border border-orange-100">
                                        Pending
                                    </span>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                                            <Plane className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Agoda Hotels</div>
                                            <div className="text-xs text-slate-500">Booking #A9912</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">Oct 05, 2025</td>
                                <td className="px-4 py-4 text-sm text-slate-900 font-bold text-right">$850.00</td>
                                <td className="px-4 py-4 text-sm text-green-600 font-bold text-right">+$68.00</td>
                                <td className="px-4 py-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
                                        Available
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
