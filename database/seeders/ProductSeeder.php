<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get('database/data/product.json');
        $datas = json_decode($json);

        foreach ($datas as $data) 
        {
            DB::table('products')->insert(
            [
                'category' => $data->category,
                'image' => $data->image, 
                'name' => $data->name,
                'price' => $data->price,
                'brand' => $data->brand,
                'description' => $data->description,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }
    }
}
