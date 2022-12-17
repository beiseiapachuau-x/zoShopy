<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index()
    {
        session(['admin' => false, 'order' => false]);

        if(Auth::check())
        {
           $orders = Order::where('user_id',Auth::id())->get();

            return Inertia::render('User/OrderPage', 
            [
                'orders' => $orders->map(function($order) 
                {
                    return 
                    [
                        'id' => $order->id,
                        'product' => Product::find($order->product_id),
                    ];
                }),
                'auth' => session('auth', false),
                'cart' => session('cart', false)
            ]);
        }

        return redirect('home.index');
    }

    public function store(Request $request)
    {
        Order::create(
            [
                'user_id' => Auth::id(),
                'product_id' => $request->product_id
            ]
        );

        session(['admin' => false, 'order' => true]);

        return redirect(route('home.index'));
    }
   
    public function delete($id) 
    {
        session(['admin' => false]);

        Order::destroy($id);
        
        return redirect(route('order.index'));
    }
}

