import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    Info,
    ChevronDown,
    ArrowRight,
    Landmark,
    Cast
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function DashboardWithdraw() {
    return (
        <DashboardLayout title="Withdraw Funds - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Withdraw Funds</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Balance Overview Card */}
                <div className="bg-gradient-to-br from-brand-500 to-orange-400 rounded-3xl p-8 text-white shadow-sm relative overflow-hidden">
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <div className="text-white/80 font-medium text-sm mb-2 uppercase tracking-wider">Available to Withdraw</div>
                        <div className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">$340.50</div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 w-max">
                            <Info className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Minimum withdrawal amount: $10.00</span>
                        </div>
                    </div>
                </div>

                {/* Withdraw Form Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Request Withdrawal</h3>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Select Component */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Withdraw To</label>
                            <div className="relative">
                                <select className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-semibold rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 appearance-none outline-none">
                                    <option>Bank Transfer •••• 4892 (Default)</option>
                                    <option>PayPal •••• alex@email.com</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                    <ChevronDown className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="mt-2 text-right">
                                <Link href="/member/payment" className="text-xs font-bold text-brand-600 hover:text-brand-700">
                                    + Add new method
                                </Link>
                            </div>
                        </div>

                        {/* Amount Input */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Amount</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 font-bold">
                                    $
                                </div>
                                <input
                                    type="number"
                                    className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-lg font-bold rounded-xl focus:ring-brand-500 focus:border-brand-500 block pl-8 pr-20 py-3 appearance-none outline-none"
                                    placeholder="0.00"
                                    defaultValue="340.50"
                                />
                                <div className="absolute inset-y-0 right-2 flex items-center">
                                    <button type="button" className="text-xs font-bold bg-gray-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-gray-300 transition-colors">
                                        Max
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-sm transition-colors text-lg flex justify-center items-center gap-2">
                            Confirm Withdrawal
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Withdrawal History */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-900 text-lg">Withdrawal History</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                            <tr className="text-xs text-slate-400 uppercase tracking-wider border-b border-gray-50">
                                <th className="px-4 py-3 font-semibold">Date</th>
                                <th className="px-4 py-3 font-semibold">Method</th>
                                <th className="px-4 py-3 font-semibold text-right">Amount</th>
                                <th className="px-4 py-3 font-semibold text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {/* Row 1 */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">Sep 28, 2025</td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <Landmark className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Bank Transfer</div>
                                            <div className="text-xs text-slate-500">•••• 4892</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-slate-900 font-bold text-right">$150.00</td>
                                <td className="px-4 py-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
                                        Success
                                    </span>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">Aug 15, 2025</td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                            <Cast className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">PayPal</div>
                                            <div className="text-xs text-slate-500">alex@email.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-slate-900 font-bold text-right">$85.20</td>
                                <td className="px-4 py-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
                                        Success
                                    </span>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-4 text-sm text-slate-500 font-medium">Jul 02, 2025</td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <Landmark className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Bank Transfer</div>
                                            <div className="text-xs text-slate-500">•••• 4892</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-slate-900 font-bold text-right">$320.00</td>
                                <td className="px-4 py-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100">
                                        Success
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
