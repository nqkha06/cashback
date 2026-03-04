import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    Gift,
    MessageCircle,
    Facebook,
    Twitter,
    Mail,
    DollarSign,
    Users,
    Clock,
    Info,
    CheckCircle2
} from 'lucide-react';

export default function DashboardReferral() {
    return (
        <DashboardLayout title="Refer & Earn - Backcash">
            {/* Page Title (Desktop only) */}
            <div className="hidden md:flex max-w-md w-full relative items-center mb-6">
                <h1 className="text-xl font-bold text-slate-900">Refer & Earn</h1>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">

                {/* Share Hero Banner */}
                <div className="bg-gradient-to-br from-brand-500 to-orange-400 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg shadow-brand-500/20">
                    {/* Abstract circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full mix-blend-overlay filter blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4 backdrop-blur-sm">
                                <Gift className="w-4 h-4" />
                                LIMITED TIME
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                                Give $10, <br /> Get $25.
                            </h2>
                            <p className="text-brand-50 text-lg mb-0 font-medium opacity-90">
                                Invite your friends. When they make their first qualifying purchase, you both get a cash bonus!
                            </p>
                        </div>

                        {/* Copy Link Block */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl w-full text-slate-800">
                            <h3 className="text-slate-900 font-bold mb-3">Your unique referral link</h3>
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-1 mb-4">
                                <input
                                    type="text"
                                    defaultValue="https://backcash.com/invite/alexm24"
                                    className="bg-transparent flex-1 px-3 text-slate-600 font-medium outline-none text-sm"
                                    readOnly
                                />
                                <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors">
                                    Copy
                                </button>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Share via</span>
                                <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors tooltip">
                                    <MessageCircle className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition-colors tooltip">
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-100 transition-colors tooltip">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 text-slate-600 flex items-center justify-center hover:bg-gray-200 transition-colors tooltip">
                                    <Mail className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Referral Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <div className="text-slate-500 text-sm font-medium mb-1">Total Earned</div>
                        <div className="text-3xl font-extrabold text-slate-900">$125.00</div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <div className="text-slate-500 text-sm font-medium mb-1">Friends Joined</div>
                        <div className="text-3xl font-extrabold text-slate-900">8</div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div className="text-slate-500 text-sm font-medium mb-1">Pending Bonuses</div>
                        <div className="text-3xl font-extrabold text-slate-900">
                            $75.00 <span className="text-sm text-slate-400 font-medium">/ 3 friends</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* How it works */}
                    <div className="md:col-span-1 bg-white rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Info className="w-5 h-5 text-slate-400" />
                            How it works
                        </h3>

                        <div className="relative border-l-2 border-dashed border-gray-200 ml-4 space-y-8 py-2">

                            {/* Step 1 */}
                            <div className="relative pl-6">
                                <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-white border-2 border-brand-500 rounded-full"></div>
                                <h4 className="font-bold text-slate-900 text-sm">Send Invite</h4>
                                <p className="text-sm text-slate-500 mt-1">Share your link via message or social media.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative pl-6">
                                <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
                                <h4 className="font-bold text-slate-900 text-sm">Friend Shops</h4>
                                <p className="text-sm text-slate-500 mt-1">They must create an account and spend $25 within 30 days.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pl-6">
                                <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-white border-2 border-green-500 rounded-full"></div>
                                <h4 className="font-bold text-slate-900 text-sm">Get Paid!</h4>
                                <p className="text-sm text-slate-500 mt-1">Both of your accounts get credited 48h after purchase confirmation.</p>
                            </div>

                        </div>
                    </div>

                    {/* History / List */}
                    <div className="md:col-span-2 bg-white rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                        <h3 className="font-bold text-slate-900 mb-6 flex items-center justify-between">
                            <span>Your Referrals</span>
                            <span className="text-sm font-medium text-slate-500 bg-gray-50 px-3 py-1 rounded-full">8 Total</span>
                        </h3>

                        <div className="space-y-4">

                            {/* Item 1 (Pending) */}
                            <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
                                        TM
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Tom Miller</div>
                                        <div className="text-xs text-slate-500">Joined Oct 24</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-1">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                        Pending
                                    </div>
                                    <div className="text-xs text-slate-400">Awaiting purchase</div>
                                </div>
                            </div>

                            {/* Item 2 (Completed) */}
                            <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
                                        JS
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Jane Smith</div>
                                        <div className="text-xs text-slate-500">Joined Oct 12</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold mb-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Completed
                                    </div>
                                    <div className="text-xs text-green-600 font-bold">+$25.00</div>
                                </div>
                            </div>

                            {/* Item 3 (Completed) */}
                            <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
                                        EK
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Elena Kuris</div>
                                        <div className="text-xs text-slate-500">Joined Sep 28</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold mb-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Completed
                                    </div>
                                    <div className="text-xs text-green-600 font-bold">+$25.00</div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4 text-center">
                            <button className="text-sm font-bold text-brand-600 hover:text-brand-700">View All Log</button>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
