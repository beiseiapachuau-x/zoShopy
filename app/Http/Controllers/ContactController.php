<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ContactController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('ContactPage', 
            [
                'auth' => session('auth', false),
                'cart' => session('cart', false),
                'order' => session('order', false),
            ]
        );
    }
}
