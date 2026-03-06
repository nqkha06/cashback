import React, { FormEventHandler, useState } from 'react';
import DashboardLayout from '@/components/Member/DashboardLayout';
import { Camera, Mail, Phone, ChevronDown, Eye, EyeOff } from 'lucide-react';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';

interface User {
    name: string;
    first_name: string | null;
    last_name: string | null;
    email: string;
    phone_number: string | null;
}

interface Props {
    mustVerifyEmail: boolean;
    status?: string;
    user: User;
}

export default function DashboardProfile({ mustVerifyEmail, status, user }: Props) {
    const profileForm = useForm({
        first_name: user?.first_name ?? '',
        last_name: user?.last_name ?? '',
        email: user?.email ?? '',
        phone_number: user?.phone_number ?? '',
    });

    const submitProfile: FormEventHandler = (e) => {
        e.preventDefault();
        profileForm.patch('/member/profile', {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Profile updated successfully!');
            },
        });
    };

    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submitPassword: FormEventHandler = (e) => {
        e.preventDefault();
        passwordForm.put('/member/password', {
            preserveScroll: true,
            onSuccess: () => {
                passwordForm.reset();
                setShowCurrentPassword(false);
                setShowNewPassword(false);
                setShowConfirmPassword(false);
                toast.success('Password updated successfully!');
            },
            onError: (errors) => {
                if (errors.password) {
                    passwordForm.reset('password', 'password_confirmation');
                }
                if (errors.current_password) {
                    passwordForm.reset('current_password');
                }
            },
        });
    };

    return (
        <DashboardLayout title="Profile Settings - Backcash">
            {/* Page Header (Desktop) */}
            <div className="hidden md:flex justify-between items-end mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
            </div>

            {status === 'profile-updated' && (
                <div className="mb-4 p-4 text-sm text-green-800 rounded-lg bg-green-50">
                    Your profile has been updated.
                </div>
            )}

            <div className="space-y-6">
                {/* User Info Settings */}
                <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-slate-900 text-lg mb-6 tracking-tight">Personal Information</h3>

                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                        {/* Avatar Column */}
                        <div className="flex flex-col items-center gap-4 shrink-0">
                            <div className="relative group">
                                <img src={`https://ui-avatars.com/api/?name=${user?.name}&background=random`} alt="Avatar" className="w-32 h-32 rounded-full border-4 border-gray-50 object-cover shadow-sm" />
                                <button className="absolute bottom-0 right-0 w-10 h-10 bg-brand-500 hover:bg-brand-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors border-2 border-white">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">JPEG or PNG. Max 2MB.</span>
                        </div>

                        {/* Form Fields Column */}
                        <form className="flex-1 w-full space-y-5" onSubmit={submitProfile}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="first_name" className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input
                                        id="first_name"
                                        type="text"
                                        value={profileForm.data.first_name}
                                        onChange={(e) => profileForm.setData('first_name', e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300"
                                        placeholder="First Name"
                                    />
                                    {profileForm.errors.first_name && <p className="mt-1 text-sm text-red-600">{profileForm.errors.first_name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input
                                        id="last_name"
                                        type="text"
                                        value={profileForm.data.last_name}
                                        onChange={(e) => profileForm.setData('last_name', e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 outline-none transition-colors hover:border-gray-300"
                                        placeholder="Last Name"
                                    />
                                    {profileForm.errors.last_name && <p className="mt-1 text-sm text-red-600">{profileForm.errors.last_name}</p>}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            value={profileForm.data.email}
                                            onChange={(e) => profileForm.setData('email', e.target.value)}
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 pl-11 outline-none transition-colors hover:border-gray-300"
                                            placeholder="you@example.com"
                                        />
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                    {profileForm.errors.email && <p className="mt-1 text-sm text-red-600">{profileForm.errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone_number" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <input
                                            id="phone_number"
                                            type="tel"
                                            value={profileForm.data.phone_number}
                                            onChange={(e) => profileForm.setData('phone_number', e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 pl-11 outline-none transition-colors hover:border-gray-300"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    </div>
                                    {profileForm.errors.phone_number && <p className="mt-1 text-sm text-red-600">{profileForm.errors.phone_number}</p>}
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end items-center gap-4">
                                <button type="submit" disabled={profileForm.processing} className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm disabled:opacity-50">
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

                        <form className="flex flex-col flex-1" onSubmit={submitPassword}>
                            <div className="space-y-4 flex-1">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Password</label>
                                    <div className="relative">
                                        <input
                                            type={showCurrentPassword ? "text" : "password"}
                                            value={passwordForm.data.current_password}
                                            onChange={(e) => passwordForm.setData('current_password', e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 pr-11 outline-none transition-colors hover:border-gray-300"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCurrentPassword((prev) => !prev)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-500 transition-colors"
                                        >
                                            {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {passwordForm.errors.current_password && <p className="mt-1 text-sm text-red-600">{passwordForm.errors.current_password}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            value={passwordForm.data.password}
                                            onChange={(e) => passwordForm.setData('password', e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 pr-11 outline-none transition-colors hover:border-gray-300"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword((prev) => !prev)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-500 transition-colors"
                                        >
                                            {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {passwordForm.errors.password && <p className="mt-1 text-sm text-red-600">{passwordForm.errors.password}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Confirm New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={passwordForm.data.password_confirmation}
                                            onChange={(e) => passwordForm.setData('password_confirmation', e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm font-medium rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3.5 pr-11 outline-none transition-colors hover:border-gray-300"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-500 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 flex justify-end items-center gap-4">
                                <button type="submit" disabled={passwordForm.processing} className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm disabled:opacity-50">
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

