import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import { Trophy, Crown } from 'lucide-react';

export default function DashboardLeaderboard() {
    return (
        <DashboardLayout title="Leaderboard - Backcash">
            {/* Page Title (Desktop only) */}
            <div className="hidden md:flex max-w-md w-full relative items-center mb-6">
                <h1 className="text-xl font-bold text-slate-900">Leaderboard</h1>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header / Context */}
                <div className="text-center mt-4 mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-100 text-brand-500 rounded-2xl mb-4 shadow-sm">
                        <Trophy className="w-7 h-7" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Top Cashbackers</h2>
                    <p className="text-slate-500 text-sm max-w-md mx-auto">
                        Discover the savvy shoppers earning the most right now. Secure a top spot for monthly bonus rewards!
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 inline-flex">
                        <button className="px-8 py-2 rounded-full text-sm font-bold bg-slate-900 text-white shadow transition-all">Weekly</button>
                        <button className="px-8 py-2 rounded-full text-sm font-bold text-slate-500 hover:text-slate-900 transition-all">Monthly</button>
                    </div>
                </div>

                {/* Top 3 Podium (Responsive Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 items-end pt-8 md:pt-16 max-w-3xl mx-auto px-4">

                    {/* 2nd Place */}
                    <div className="order-2 md:order-1 bg-white rounded-3xl p-6 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative md:h-[95%]">
                        <div className="absolute -top-4 right-1/2 translate-x-1/2 md:-top-3 md:right-4 md:translate-x-0 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
                            2
                        </div>
                        <img src="https://i.pravatar.cc/150?img=33" alt="Avatar" className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3 md:mb-4 border-4 border-slate-100 object-cover shadow-sm mt-2 md:mt-0" />
                        <div className="font-bold text-lg text-slate-900 mb-1">Alex T.</div>
                        <div className="inline-block bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-lg text-sm">
                            +$1,250
                        </div>
                    </div>

                    {/* 1st Place */}
                    <div className="order-1 md:order-2 bg-gradient-to-b from-white to-brand-50/20 rounded-3xl p-8 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-brand-100 relative z-10 scale-100 md:scale-105">
                        <div className="absolute -top-5 right-1/2 translate-x-1/2 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg ring-4 ring-white">
                            <Crown className="w-5 h-5" />
                        </div>
                        <img src="https://i.pravatar.cc/150?img=47" alt="Avatar" className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-3 md:mb-4 border-4 border-amber-100 object-cover shadow-md mt-2 md:mt-0" />
                        <div className="font-black text-xl text-slate-900 mb-1">Sarah M.</div>
                        <div className="hidden md:block text-xs font-medium text-slate-500 mb-3">124 trips</div>
                        <div className="inline-block bg-brand-100 text-brand-600 font-extrabold text-lg px-4 py-1.5 rounded-xl">
                            +$2,480
                        </div>
                    </div>

                    {/* 3rd Place */}
                    <div className="order-3 bg-white rounded-3xl p-6 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative md:h-[90%]">
                        <div className="absolute -top-4 right-1/2 translate-x-1/2 md:-top-3 md:left-4 md:translate-x-0 w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
                            3
                        </div>
                        <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" className="w-16 h-16 md:w-16 md:h-16 rounded-full mx-auto mb-3 md:mb-4 border-4 border-amber-100 object-cover shadow-sm mt-2 md:mt-0" />
                        <div className="font-bold text-lg text-slate-900 mb-1">David L.</div>
                        <div className="inline-block bg-amber-50 text-amber-700 font-bold px-3 py-1 rounded-lg text-sm">
                            +$980
                        </div>
                    </div>

                </div>

                {/* Your Rank Banner */}
                <div className="bg-slate-900 rounded-2xl p-4 flex items-center justify-between text-white shadow-xl max-w-3xl mx-auto shadow-brand-500/10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-300">
                            #42
                        </div>
                        <div>
                            <div className="font-bold">You (Alex Mitchell)</div>
                            <div className="text-xs text-slate-400">18 trips & shops</div>
                        </div>
                    </div>
                    <div className="font-bold text-green-400">+$340.50</div>
                </div>

                {/* List View (4-10) */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <div className="w-12 text-center">Rank</div>
                        <div className="flex-1 pl-2">Member</div>
                        <div className="w-24 text-right">Earned</div>
                    </div>

                    <div className="divide-y divide-gray-50">
                        {/* Rank 4 */}
                        <div className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                            <div className="w-12 text-center font-bold text-slate-400">4</div>
                            <div className="flex-1 flex items-center gap-3 pl-2">
                                <img src="https://i.pravatar.cc/150?img=5" className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-bold text-slate-900 text-sm">Jessica Wong</span>
                            </div>
                            <div className="w-24 text-right font-bold text-green-600 text-sm">+$850.50</div>
                        </div>
                        {/* Rank 5 */}
                        <div className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                            <div className="w-12 text-center font-bold text-slate-400">5</div>
                            <div className="flex-1 flex items-center gap-3 pl-2">
                                <img src="https://i.pravatar.cc/150?img=68" className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-bold text-slate-900 text-sm">Michael C.</span>
                            </div>
                            <div className="w-24 text-right font-bold text-green-600 text-sm">+$720.00</div>
                        </div>
                        {/* Rank 6 */}
                        <div className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                            <div className="w-12 text-center font-bold text-slate-400">6</div>
                            <div className="flex-1 flex items-center gap-3 pl-2">
                                <img src="https://i.pravatar.cc/150?img=43" className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-bold text-slate-900 text-sm">Emily R.</span>
                            </div>
                            <div className="w-24 text-right font-bold text-green-600 text-sm">+$615.20</div>
                        </div>
                        {/* Rank 7 */}
                        <div className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                            <div className="w-12 text-center font-bold text-slate-400">7</div>
                            <div className="flex-1 flex items-center gap-3 pl-2">
                                <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-bold text-slate-900 text-sm">James P.</span>
                            </div>
                            <div className="w-24 text-right font-bold text-green-600 text-sm">+$540.80</div>
                        </div>
                        {/* Rank 8 */}
                        <div className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                            <div className="w-12 text-center font-bold text-slate-400">8</div>
                            <div className="flex-1 flex items-center gap-3 pl-2">
                                <img src="https://i.pravatar.cc/150?img=20" className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-bold text-slate-900 text-sm">Olivia K.</span>
                            </div>
                            <div className="w-24 text-right font-bold text-green-600 text-sm">+$490.50</div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
