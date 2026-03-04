import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    Wallet,
    ShoppingBag,
    Coins,
    ArrowDownToLine,
    Check,
    ArrowRight
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function DashboardAbout() {
    return (
        <DashboardLayout title="About Platform - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">About Platform</h1>
            </div>

            <div className="space-y-8 pb-10">

                {/* Hero Section */}
                <div className="bg-gradient-to-br from-brand-400 to-orange-400 rounded-[2rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-sm">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-900/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-white text-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rotate-3">
                            <Wallet className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Earning Cashback is Easy</h2>
                        <p className="text-lg text-white/90 font-medium max-w-xl mx-auto">
                            We partner with over 20,000 stores to give you actual cash back on your everyday purchases. No points, no gimmicks, just cash.
                        </p>
                    </div>
                </div>

                {/* How it Works Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">How It Works</h3>
                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm text-center transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <ShoppingBag className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-lg text-slate-900 mb-2">1. Shop Normally</h4>
                            <p className="text-sm text-slate-500">
                                Find your store on Backcash, or generate a link. Click through to the store and shop exactly as you normally would.
                            </p>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm text-center transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Coins className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-lg text-slate-900 mb-2">2. Get Cash Added</h4>
                            <p className="text-sm text-slate-500">
                                We earn a commission from the store for sending you there, and we share that commission with you as cashback.
                            </p>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm text-center transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <ArrowDownToLine className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-lg text-slate-900 mb-2">3. Withdraw Funds</h4>
                            <p className="text-sm text-slate-500">
                                Once your cashback is verified, transfer it directly to your bank account, PayPal, or crypto wallet. Completely free.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Benefits Checkmarks */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Why shop with us?</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-bold text-slate-700">Highest cashback rates guaranteed</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-bold text-slate-700">100% Free to use, forever</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-bold text-slate-700">No hidden fees on withdrawals</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-bold text-slate-700">Works with your existing credit card points</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-6 pb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Start earning more today</h3>
                    <Link href="/member/cashback" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm cursor-pointer">
                        Find a store to shop
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </DashboardLayout>
    );
}
