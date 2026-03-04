import React, { ReactNode } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Wallet,
    LayoutDashboard,
    Search,
    ArrowDownToLine,
    Receipt,
    Sparkles,
    Trophy,
    Users,
    User,
    CreditCard,
    Info,
    Settings,
    LifeBuoy,
    Coins,
    Bell,
    ChevronDown,
    LogOut,
    Check
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';

interface DashboardLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function DashboardLayout({ children, title = 'Dashboard - Backcash' }: DashboardLayoutProps) {
    const { url, props } = usePage();
    const { auth } = props as any;
    const getInitials = useInitials();

    const isActive = (path: string) => {
        return url.startsWith(path);
    };

    const linkClass = (path: string) => {
        const baseClass = "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors";
        return isActive(path)
            ? `${baseClass} bg-brand-50 text-brand-600 font-bold`
            : `${baseClass} text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium`;
    };

    return (
        <div className="text-slate-800 antialiased selection:bg-brand-500 selection:text-white flex h-screen overflow-hidden bg-gray-50 font-sans">
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>

            {/* Desktop Sidebar (Hidden on mobile) */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-100 h-full flex-shrink-0 relative z-20">
                {/* Logo Area */}
                <div className="h-20 flex items-center px-6 border-b border-gray-50">
                    <Link href="/member" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-sm">
                            <Wallet className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">Backcash</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 [scrollbar-width:none]">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">Menu</div>

                    <Link href="/member" className={linkClass('/member')}>
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>

                    <Link href="/member/cashback" className={linkClass('/member/cashback')}>
                        <Search className="w-5 h-5" />
                        <span>Cashback Home</span>
                    </Link>

                    <Link href="/member/withdraw" className={linkClass('/member/withdraw')}>
                        <ArrowDownToLine className="w-5 h-5" />
                        <span>Withdraw</span>
                    </Link>

                    <a href="#" className={linkClass('/member/transactions')}>
                        <Receipt className="w-5 h-5" />
                        <span>Transactions</span>
                    </a>

                    <Link href="/member/products" className={linkClass('/member/products')}>
                        <Sparkles className="w-5 h-5" />
                        <span>Top Products</span>
                    </Link>

                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-8 px-3">Community</h3>

                    <Link href="/member/leaderboard" className={linkClass('/member/leaderboard')}>
                        <Trophy className="w-5 h-5" />
                        <span>Leaderboard</span>
                    </Link>

                    <Link href="/member/referral" className={linkClass('/member/referral')}>
                        <Users className="w-5 h-5" />
                        <span>Refer & Earn</span>
                    </Link>

                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-8 px-3">Account</div>

                    <Link href="/member/profile" className={linkClass('/member/profile')}>
                        <User className="w-5 h-5" />
                        <span>Profile</span>
                    </Link>

                    <Link href="/member/payment" className={linkClass('/member/payment')}>
                        <CreditCard className="w-5 h-5" />
                        <span>Payment Methods</span>
                    </Link>

                    <Link href="/member/about" className={linkClass('/member/about')}>
                        <Info className="w-5 h-5" />
                        <span>About Platform</span>
                    </Link>
                </div>

                {/* Bottom Settings/Help */}
                <div className="p-4 border-t border-gray-50">
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium transition-colors">
                        <LifeBuoy className="w-5 h-5" />
                        <span>Help Center</span>
                    </a>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full bg-slate-50 relative overflow-hidden">

                {/* Top Header (Desktop & Mobile) */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-10 flex-shrink-0">
                    {/* Mobile Logo (Visible only on mobile) */}
                    <div className="md:hidden flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-orange-500 rounded-lg flex items-center justify-center text-white shadow-sm">
                            <Wallet className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Search Bar (Desktop only) */}
                    <div className="hidden md:flex max-w-md w-full relative">
                        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" placeholder="Search stores, products..." className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-sm rounded-full focus:ring-brand-500 focus:border-brand-500 block pl-10 p-2.5 transition-all outline-none pb-2.5 pt-2.5 placeholder-slate-400 hover:bg-white hover:border-gray-300" />
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 md:gap-5 flex-1 justify-end">

                        {/* Mobile Search Icon */}
                        <button className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-gray-100">
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Balance Badge (Hidden on very small screens) */}
                        <div className="hidden sm:flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                            <Coins className="w-4 h-4 text-green-600" />
                            <span className="font-bold text-green-700 text-sm">$340.50</span>
                        </div>

                        {/* Notifications */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="relative w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-gray-100 focus:outline-none transition-colors">
                                    <Bell className="w-5 h-5" />
                                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-brand-500 rounded-full border-2 border-white"></span>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80">
                                <DropdownMenuLabel className="font-bold">Notifications</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <div className="p-4 text-center text-sm text-slate-500">
                                    <Bell className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                                    <p>No new notifications right now.</p>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Avatar Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-2 focus:outline-none pl-2 border-l border-gray-200 ml-2">
                                    {auth?.user ? (
                                        <Avatar className="w-9 h-9 rounded-full border-2 border-white shadow-sm box-content">
                                            <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                            <AvatarFallback className="bg-brand-100 text-brand-600 font-bold text-xs">
                                                {getInitials(auth.user.name)}
                                            </AvatarFallback>
                                        </Avatar>
                                    ) : (
                                        <img src="https://i.pravatar.cc/150?img=11" alt="User Avatar" className="w-9 h-9 rounded-full border-2 border-white shadow-sm box-content" />
                                    )}
                                    <div className="hidden md:block text-left">
                                        <div className="text-sm font-bold text-slate-900 leading-tight">
                                            {auth?.user?.name || 'Alex Mitchell'}
                                        </div>
                                        <div className="text-[11px] text-slate-500 font-medium">Free Member</div>
                                    </div>
                                    <ChevronDown className="hidden md:block w-4 h-4 text-slate-400" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">{auth?.user?.name || 'Alex Mitchell'}</p>
                                        <p className="text-xs leading-none text-muted-foreground">{auth?.user?.email || 'alex@example.com'}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={edit()} className="cursor-pointer flex w-full">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={logout()} method="post" as="button" className="cursor-pointer flex w-full w-full">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Page Content Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 flex flex-col [scrollbar-width:none]">
                    <div className="max-w-6xl mx-auto space-y-6 flex-1 w-full">
                        {children}
                    </div>

                    {/* Footer */}
                    <footer className="mt-auto pt-10 pb-4">
                        <div className="max-w-6xl mx-auto border-t border-gray-100 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-700">HoanTienNhanh</span>
                                <span>© {new Date().getFullYear()}</span>
                            </div>
                            <div className="flex items-center gap-6 font-medium">
                                <a href="#" className="hover:text-brand-500 transition-colors">Terms</a>
                                <a href="#" className="hover:text-brand-500 transition-colors">Privacy</a>
                                <a href="#" className="hover:text-brand-500 transition-colors">Help</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>

            {/* Mobile Bottom Navigation (Visible only on mobile) */}
            <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
                <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-3xl p-2 flex justify-between items-center px-4">

                    <Link href="/member" className={`flex flex-col items-center justify-center w-14 h-14 ${isActive('/member') && url === '/member' ? 'text-brand-500' : 'text-slate-400 hover:text-slate-900'} transition-colors`}>
                        <div className="relative">
                            <LayoutDashboard className="w-6 h-6 mb-1" />
                            {isActive('/member') && url === '/member' && (
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                            )}
                        </div>
                    </Link>

                    <Link href="/member/cashback" className={`flex flex-col items-center justify-center w-14 h-14 ${isActive('/member/cashback') ? 'text-brand-500' : 'text-slate-400 hover:text-slate-900'} transition-colors`}>
                        <div className="relative">
                            <Search className="w-6 h-6" />
                            {isActive('/member/cashback') && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                            )}
                        </div>
                    </Link>

                    <Link href="/member/leaderboard" className={`flex flex-col items-center justify-center w-12 h-12 ${isActive('/member/leaderboard') ? 'text-brand-500' : 'text-slate-400 hover:text-slate-900'} transition-colors`}>
                        <div className="relative">
                            <Trophy className="w-6 h-6" />
                            {isActive('/member/leaderboard') && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                            )}
                        </div>
                    </Link>

                    <Link href="/member/referral" className={`flex flex-col items-center justify-center w-12 h-12 ${isActive('/member/referral') ? 'text-brand-500' : 'text-slate-400 hover:text-slate-900'} transition-colors`}>
                        <div className="relative">
                            <Users className="w-6 h-6" />
                            {isActive('/member/referral') && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                            )}
                        </div>
                    </Link>

                    <Link href="/member/profile" className={`flex flex-col items-center justify-center w-14 h-14 ${isActive('/member/profile') ? 'text-brand-500' : 'text-slate-400 hover:text-slate-900'} transition-colors`}>
                        <div className="relative">
                            <User className="w-6 h-6" />
                            {isActive('/member/profile') && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
                            )}
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
