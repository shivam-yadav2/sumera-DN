<?php

namespace App\Http\Controllers;

use App\Models\ServiceBrand;
use App\Models\Service;
use App\Models\Brand;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ServiceBrandController extends Controller
{

    public function create($id)
    {
        //return $request;
        $check = Service::find(base64_decode($id));
        //return $check->id;
        if (!$check) {
            return redirect()->back()->with('error', 'Service not found');
        }
        $id = $check->id;
        $title =  "Add Service Brand";
        $brand = Brand::where('is_active', '1')->get();
        $service_brand = ServiceBrand::with('brand:id,title,image','service:id,title')->where('service_id', $id)->get();
        //return $service_brand;
        return view('service.add-service-brand', compact('title',  'id', 'brand', 'service_brand'));
    }


    public function store(Request $request)
    {
        $rules = [
            'brand_id' => 'required|array',
            'brand_id.*' => 'exists:brands,id',
            'service_id' => 'required|string',
        ];
        // Custom validation messages
        $customMessages = [
            'brand_id.required' => 'Please select at least one brand.',
            'brand_id.array' => 'Brand IDs must be an array.',
            'brand_id.*.exists' => 'One or more of the selected brands do not exist.',
            'service_id.required' => 'Service ID is required.',
            'service_id.string' => 'Service ID must be a valid string.',
        ];
        $validator = Validator::make($request->all(), $rules, $customMessages);
        // If validation fails, redirect back with errors
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        foreach ($request->brand_id as $brand_id) {
            ServiceBrand::create([
                'brand_id' => $brand_id,
                'service_id' => $request->service_id,
                'is_active' => '1',
            ]);
        }
        return redirect()->back()->with('success_msg', 'Brands successfully added to the service!');
    }
}
