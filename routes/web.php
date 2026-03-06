<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SlideController;
use App\Http\Controllers\Admin\MerchantController;
use App\Http\Controllers\Member\CashbackController;
use App\Http\Controllers\Member\ProfileController;
use App\Http\Controllers\Admin\Settings\LanguageController;
use App\Http\Controllers\Admin\Appearance\OptionController;

Route::inertia('/', 'Index', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])
    ->prefix('member')
    ->name('member.')
    ->group(function () {

        Route::inertia('/', 'Member/Index')->name('index');

        Route::get('/cashback', [CashbackController::class, 'index'])->name('cashback');
        Route::inertia('/withdraw', 'Member/Withdraw')->name('withdraw');
        Route::inertia('/products', 'Member/Products')->name('products');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::put('/password', [ProfileController::class, 'updatePassword'])->name('password.update');
        Route::inertia('/payment', 'Member/Payment')->name('payment');
        Route::inertia('/about', 'Member/About')->name('about');
        Route::inertia('/referral', 'Member/Referral')->name('referral');
        Route::inertia('/leaderboard', 'Member/Leaderboard')->name('leaderboard');

    });

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('pages', PageController::class);
    Route::resource('users', UserController::class);
    Route::resource('merchants', MerchantController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('permissions', PermissionController::class);
    Route::resource('posts', PostController::class);
    Route::resource('slides', SlideController::class);
    
    Route::prefix('settings')->name('settings.')->group(function () {
        Route::resource('languages', LanguageController::class);
        Route::get('appearance/options', [OptionController::class, 'index'])->name('appearance.options.index');
        Route::post('appearance/options', [OptionController::class, 'store'])->name('appearance.options.store');
    });
});

require __DIR__.'/settings.php';
