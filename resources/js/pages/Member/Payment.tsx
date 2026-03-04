import React, { useState } from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    Landmark,
    Cast,
    Trash2,
    Pencil,
    Bitcoin,
    ShieldCheck,
    Plus
} from 'lucide-react';

export default function DashboardPayment() {
    const [selectedMethod, setSelectedMethod] = useState('bank');

    return (
        <DashboardLayout title="Payment Methods - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Payment Methods</h1>
            </div>

            <div className="space-y-8">
                {/* Saved Payment Methods */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Saved Methods</h2>
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* Bank Card */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-brand-200 relative group overflow-hidden">
                            <div className="absolute top-4 right-4 bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1 rounded-full">
                                Primary
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-gray-100 text-slate-600">
                                    <Landmark className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium">Bank Transfer</div>
                                    <div className="font-bold text-slate-900 text-lg">JPMorgan Chase</div>
                                </div>
                            </div>

                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-xs text-slate-400 mb-1">Account Number</div>
                                    <div className="font-mono font-bold text-slate-700 tracking-widest">•••• •••• 4892</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-colors">
                                        <Pencil className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* PayPal Card */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 relative group overflow-hidden hover:border-gray-200 transition-colors">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-gray-100 text-slate-600">
                                    <Cast className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-medium">Digital Wallet</div>
                                    <div className="font-bold text-slate-900 text-lg">PayPal</div>
                                </div>
                            </div>

                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-xs text-slate-400 mb-1">Email Address</div>
                                    <div className="font-medium text-slate-700">alex.mitchell@example.com</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Add New Payment Method Form */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-slate-900 text-lg mb-6">Add New Payment Method</h3>

                    {/* Method Selector */}
                    <div className="flex flex-wrap gap-4 mb-8 text-sm font-bold">
                        <label className="cursor-pointer">
                            <input
                                type="radio"
                                name="method"
                                value="bank"
                                className="peer sr-only"
                                checked={selectedMethod === 'bank'}
                                onChange={() => setSelectedMethod('bank')}
                            />
                            <div className="px-6 py-3 rounded-xl border border-gray-200 text-slate-500 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-600 transition-all flex items-center gap-2">
                                <Landmark className="w-4 h-4" />
                                Bank Transfer
                            </div>
                        </label>
                        <label className="cursor-pointer">
                            <input
                                type="radio"
                                name="method"
                                value="paypal"
                                className="peer sr-only"
                                checked={selectedMethod === 'paypal'}
                                onChange={() => setSelectedMethod('paypal')}
                            />
                            <div className="px-6 py-3 rounded-xl border border-gray-200 text-slate-500 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-600 transition-all flex items-center gap-2">
                                <Cast className="w-4 h-4" />
                                PayPal
                            </div>
                        </label>
                        <label className="cursor-pointer">
                            <input
                                type="radio"
                                name="method"
                                value="crypto"
                                className="peer sr-only"
                                checked={selectedMethod === 'crypto'}
                                onChange={() => setSelectedMethod('crypto')}
                            />
                            <div className="px-6 py-3 rounded-xl border border-gray-200 text-slate-500 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-600 transition-all flex items-center gap-2">
                                <Bitcoin className="w-4 h-4" />
                                Crypto Wallet
                            </div>
                        </label>
                    </div>

                    {/* Dynamic Form (Bank default shown) */}
                    <form className="space-y-6 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                        {selectedMethod === 'bank' && (
                            <>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Bank Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="e.g. Chase Bank" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Account Holder Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="As it appears on account" />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Account Number</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="Account Number" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Routing Number (or SWIFT)</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="Routing / BIC" />
                                    </div>
                                </div>
                            </>
                        )}

                        {selectedMethod === 'paypal' && (
                            <div className="grid sm:grid-cols-1 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">PayPal Email</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="e.g. email@example.com" />
                                </div>
                            </div>
                        )}

                        {selectedMethod === 'crypto' && (
                            <div className="grid sm:grid-cols-1 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Wallet Address</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="e.g. 0x..." />
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-3 bg-blue-50 text-blue-800 p-4 rounded-xl text-sm border border-blue-100 mt-6">
                            <ShieldCheck className="w-5 h-5 shrink-0" />
                            <p>Your details are encrypted and securely stored. We only use this information to process your withdrawals.</p>
                        </div>

                        <div className="pt-2">
                            <button type="button" className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 px-8 rounded-xl transition-colors shadow-sm inline-flex items-center gap-2">
                                <Plus className="w-5 h-5" />
                                Save Payment Method
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </DashboardLayout>
    );
}
