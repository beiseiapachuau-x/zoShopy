<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = 
    [
        'category',
        'image',
        'name',
        'price',
        'brand',
        'description',
        'created_at',
        'updated_at'
    ];
}
