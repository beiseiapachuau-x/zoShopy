<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        session(['admin' => false]);

        if(Auth::check())
        {  
            $onCarts = Cart::where('user_id', Auth::id())->get();
            
            return Inertia::render('HomePage', 
                [
                    'products' => Product::all()->map(function($product) 
                    {
                        return 
                        [
                            'id' => $product->id,
                            'category' => $product->category,
                            'image' => asset('storage/'.$product->image),
                            'name' => $product->name,
                            'brand' => $product->brand,
                            'price' => $product->price,
                            'description' => $product->description
                        ];
                    }
                ),
                    'onCarts' => $onCarts->map(function($onCart) 
                    {
                        return ['product_id' => $onCart->product_id];
                    }),
                    'auth' => session('auth', false),
                    'cart' => session('cart', false),
                    'order' => session('order', false)
                ]
            );
        }

        return Inertia::render('HomePage', 
            [
                'products' => Product::all()->map(function($product) 
                {
                    return 
                    [
                        'id' => $product->id,
                        'category' => $product->category,
                        'image' => asset('storage/'.$product->image),
                        'name' => $product->name,
                        'brand' => $product->brand,
                        'price' => $product->price,
                        'description' => $product->description
                    ];
                }),
                'auth' => session('auth', false)
            ]
        );
    }

    public function category($category)
    {
        session(['admin' => false]);

        $products =Product::where('category', $category)->get();
        $onCarts = Cart::where('user_id', Auth::id())->get();

        if(Auth::check())
        {  
            $onCarts = Cart::where('user_id', Auth::id())->get();
            
            return Inertia::render('HomePage', 
            [
                'products' => $products->map(function($product) 
                {
                    return 
                    [
                        'id' => $product->id,
                        'category' => $product->category,
                        'image' => asset('storage/'. $product->image),
                        'name' => $product->name,
                        'brand' => $product->brand,
                        'price' => $product->price,
                        'description' => $product->description
                    ];
                }),
                'onCarts' => $onCarts->map(function($onCart) 
                {
                    return ['product_id' => $onCart->product_id];
                }),
                'auth' => session('auth', false),
                'cart' => session('cart', false),
                'order' => session('order', false)
            ]);
        } else 
        {
            return Inertia::render('HomePage', 
            [
                'products' => $products->map(function($product) 
                {
                    return 
                    [
                        'id' => $product->id,
                        'category' => $product->category,
                        'image' => asset('storage/'. $product->image),
                        'name' => $product->name,
                        'brand' => $product->brand,
                        'price' => $product->price,
                        'description' => $product->description
                    ];
                }),
                'auth' => session('auth', false),
            ]);
        } 

    }
}

