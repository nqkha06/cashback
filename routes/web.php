<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Index', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/member', 'Member/Index')->name('member');
    Route::inertia('/member/cashback', 'Member/Cashback')->name('member.cashback');
    Route::inertia('/member/withdraw', 'Member/Withdraw')->name('member.withdraw');
    Route::inertia('/member/products', 'Member/Products')->name('member.products');
    Route::inertia('/member/profile', 'Member/Profile')->name('member.profile');
    Route::inertia('/member/payment', 'Member/Payment')->name('member.payment');
    Route::inertia('/member/about', 'Member/About')->name('member.about');
    Route::inertia('/member/referral', 'Member/Referral')->name('member.referral');
    Route::inertia('/member/leaderboard', 'Member/Leaderboard')->name('member.leaderboard');
});

require __DIR__.'/settings.php';
