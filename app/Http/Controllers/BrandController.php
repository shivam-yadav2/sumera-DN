<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands = Brand::get();
        return view('brand.index', compact('brands'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, $id = null)
    {
        // Initialize variables
        $title = $id ? 'Edit Brand' : 'Add Brand';
        $brand = $id ? Brand::findOrFail($id) : new Brand;
        $data = Brand::all();
        if ($request->isMethod('post')) {
            // Gather all request data
            $data = $request->all();
            // Validation rules
            $rules = [
                'title' => 'required|string|max:255|unique:brands,title,' . $id,
                'image' => $id ? 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048' : 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
            ];

            // Custom error messages
            $customMessages = [
                'title.required' => 'The Brand name is required.',
                'title.unique' => 'The Brand name already exists. Please choose a different name.',
                'image.required' => 'The Brand image is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The image size must not exceed 2MB.',

            ];

            // Validate the data
            $validator = Validator::make($data, $rules, $customMessages);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            // Save Brand data
            $brand->title = $data['title'];
            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/brand/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $image = $manager->read($uploadedImage);
//                $image->resize(900, 1600);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.' .'webp';
                $image->save($path.$filename);
                $brand['image'] = $path.$filename;
            }
            $brand->is_active = $data['is_active'] ?? '1'; // Default active status
            // Save the Brand
            if ($brand->save()) {
                return redirect()->back()->with('success', $id ? 'Banner updated successfully' : 'Banner added successfully');
            } else {
                return redirect()->back()->with('error', 'Something went wrong. Please try again.');
            }
        }

        return view('brand.create', compact('title', 'brand', 'data'));
    }




    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $brand = Brand::find($id);
        if ($brand) {
            if(!empty($brand->image) && file_exists(public_path($brand->image))){
                unlink(public_path($brand->image));
            }
            $brand->delete();
            return redirect()->back()->with('success', 'Brand deleted successfully');
        }

        return redirect()->back()->with('error', 'Something went wrong. Please try again.');
    }
}
