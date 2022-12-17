<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        session(['admin' => false]);
        
        $credentials = $request->validate(
            [
                'name' => ['required'],
                'password' => ['required'],
            ]
        );

        if($request->name == 'admin' && $request->password == 'admin')
        {
            session(['admin' => true]);

            return redirect(route('admin'));
        }
        
        if(Auth::attempt($credentials))
        {
            session(['auth' => true]);
        }

        return redirect(route('home.index'));
    }
}
