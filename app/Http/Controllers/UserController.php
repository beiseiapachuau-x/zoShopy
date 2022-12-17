<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{

    public function __invoke()
    { 
        return Inertia::render('Admin/UserPage', 
        [
            'users' => User::all()->map(function($user) 
            {
                return 
                [
                    'key' => $user->id,
                    'username' => $user->name,
                    'email' => $user->email,
                    'phone' => $user->phone,
                    'created_at' => $user->created_at->diffForHumans(),
                    'updated_at' => $user->updated_at->diffForHumans()
                ];
            })
        ]);   
    }
}
