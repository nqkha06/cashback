import React from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import {
    Camera,
    Mail,
    Phone,
    ChevronDown
} from 'lucide-react';

export default function DashboardProfile() {
    return (
        <DashboardLayout title="Profile Settings - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
            </div>

            <div className="space-y-6">
                {/* User Info Settings */}
                <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-slate-900 text-lg mb-6 tracking-tight">Personal Information</h3>

                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                        {/* Avatar Column */}
                        <div className="flex flex-col items-center gap-4 shrink-0">
                            <div className="relative group">
                                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-32 h-32 rounded-full border-4 border-gray-50 object-cover shadow-sm" />
                                <button className="absolute bottom-0 right-0 w-10 h-10 bg-brand-500 hover:bg-brand-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors border-2 border-white">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">JPEG or PNG. Max 2MB.</span>
                        </div>

                        {/* Form Fields Column */}
                        <form className="flex-1 w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" defaultValue="Alex" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" defaultValue="Mitchell" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <div className="relative">
                                        <input type="email" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 pl-11 outline-none transition-colors hover:border-gray-300" defaultValue="alex.mitchell@example.com" />
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <input type="tel" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 pl-11 outline-none transition-colors hover:border-gray-300" defaultValue="+1 (555) 000-0000" />
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button type="submit" className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Password Update */}
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col h-full">
                        <h3 className="font-bold text-slate-900 text-lg mb-6 tracking-tight">Security</h3>

                        <form className="flex flex-col flex-1" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4 flex-1">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Password</label>
                                    <input type="password" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="••••••••" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                                    <input type="password" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="••••••••" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Confirm New Password</label>
                                    <input type="password" className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300" placeholder="••••••••" />
                                </div>
                            </div>

                            <div className="pt-6">
                                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Preferences */}
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col h-full">
                        <h3 className="font-bold text-slate-900 text-lg mb-6 tracking-tight">Preferences</h3>

                        <div className="space-y-6 flex-1">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Language</label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300 appearance-none cursor-pointer">
                                        <option>English (US)</option>
                                        <option>Vietnamese</option>
                                        <option>Spanish</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-700">Notifications</label>

                                <label className="flex items-center justify-between cursor-pointer group">
                                    <div>
                                        <div className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Cashback Updates</div>
                                        <div className="text-xs text-slate-500">Get notified when cashback is tracked or available.</div>
                                    </div>
                                    <div className="relative">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                                    </div>
                                </label>

                                <label className="flex items-center justify-between cursor-pointer group">
                                    <div>
                                        <div className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Promotional Emails</div>
                                        <div className="text-xs text-slate-500">Receive special offers and hot deals.</div>
                                    </div>
                                    <div className="relative">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
