<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 



Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/category/{category}', [HomeController::class, 'category'])->name('home.category');
Route::get('/search/{search}', [HomeController::class, 'search'])->name('home.search');

Route::get('contact', [ContactController::class, '__invoke'])->name('contact');

Route::middleware('guest')->group(function() 
{
    Route::post('register',[ RegisterController::class, '__invoke'])->name('register');
    Route::post('login', [LoginController::class, '__invoke'])->name('login');
});
    
Route::middleware('auth')->group(function() 
{
    Route::post('logout',[ LogoutController::class, '__invoke'])->name('logout');

    Route::prefix('cart')->group(function() {
        Route::get('/', [CartController::class, 'index'])->name('cart.index');
        Route::post('/', [CartController::class, 'store'])->name('cart.store');
        Route::post('/{id}', [CartController::class, 'order'])->name('cart.order');
        Route::delete('/{id}', [CartController::class, 'delete'])->name('cart.delete');
    });
        
    Route::prefix('order')->group(function() {
        Route::get('/', [OrderController::class, 'index'])->name('order.index');
        Route::post('/', [OrderController::class, 'store'])->name('order.store'); 
        Route::delete('/{id}', [OrderController::class, 'delete'])->name('order.delete');
    });
});
    
Route::middleware('admin')->group(function() {

    Route::prefix('admin')->group(function() 
    {
        Route::get('/', function() {
            return Inertia::render('Admin/AdminPage');
        })->name('admin');

        Route::get('/user', [UserController::class, '__invoke'])->name('admin.user');
        
        Route::prefix('product')->group(function() 
        {
            Route::get('/', [ProductController::class, 'index'])->name('product.index');
            Route::get('/create', [ProductController::class, 'create'])->name('product.create');
            Route::post('/', [ProductController::class, 'store'])->name('product.store');
            Route::get('/{id}/edit', [ProductController::class, 'edit'])->name('product.edit');
            Route::put('/{id}', [ProductController::class, 'update'])->name('product.update');
            Route::delete('/{id}', [ProductController::class, 'delete'])->name('product.delete');
        });
    });
});

Route::fallback([HomeController::class, 'index']);
