<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
    {
        if(Auth::check())
        {
            session(['admin' => false, 'cart' => false]);

            $carts = Cart::where('user_id', Auth::id())->get();
           
            return Inertia::render('User/CartPage', 
                [
                    'carts' =>$carts->map(function($cart) 
                    {
                        return 
                        [
                            'id' => $cart->id,
                            'product' => Product::find($cart->product_id),
                        ];
                    }),
                    'auth' => session('auth', false),
                    'order' => session('order', false)
                ]
            );
        }

        return redirect('home.index');
    }

    public function store(Request $request)
    {
        Cart::create(
            [
                'user_id' => Auth::id(),
                'product_id' => $request->product_id
            ]
        );

        session(['admin' => false, 'cart' => true]);

        return redirect(route('home.index'));
    }

    public function order($id)
    {
        $cart = Cart::find($id);

        session(['order' => true]);

        Order::create(
            [
                'user_id' => Auth::id(),
                'product_id' => $cart->product_id
            ]
        );

        $cart->delete();

        session(['admin' => false]);

        return redirect(route('cart.index'));
    }
   
    public function delete($id) 
    {
        Cart::destroy($id);

        session(['admin' => false]);
        
        return redirect(route('cart.index'));
    }
}
