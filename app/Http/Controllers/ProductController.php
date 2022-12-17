<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin/AdminProductPage', 
        [
            'products' => Product::all()->map(function($product) 
            {
                return 
                [
                    'key' => $product->id,
                    'name' => $product->name,
                    'category' => $product->category,
                    'price' => $product->price,
                    'created_at' => $product->created_at->diffForHumans(),
                    'updated_at' => $product->updated_at->diffForHumans()
                ];
            })
        ]);
        
    }

    public function create()
    {
        return Inertia::render('Admin/Product/Create');
    }

    public function store(Request $request) 
    {
        $image = Storage::disk('public')->put($request->category, $request->file('image'));

        $product = Product::create(
        [
            'category' => $request->category,
            'image' => $image,
            'name' => $request->name,
            'brand' => $request->brand,
            'price' => $request->price,
            'description' => $request->description
        ]);

    }

    public function edit($id)
    {
        $product = Product::find($id);
        
        return Inertia::render('Admin/Product/Edit', 
        [
            'id' => $product->id,
            'category' => $product->category,
            'image' => asset('storage/'.$product->image),
            'name' => $product->name,
            'brand' => $product->brand,
            'price' => $product->price,
            'description' => $product->description
        ]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->category = $request->category;
        $product->name = $request->name;
        $product->brand = $request->brand;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->save();

        return redirect(route('product.index'));
    }

    public function delete($id)
    {
        Product::destroy($id);

        return redirect(route('product.index'));
    }
}
