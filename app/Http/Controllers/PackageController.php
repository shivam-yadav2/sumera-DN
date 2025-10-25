<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Service;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index( Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            $rules = [
                'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:1024',
                'title'     => 'required|string|max:255',
            ];

            $customMessages = [
                'image.required' => 'The slider image is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The slider image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The slider image size must not exceed 2MB.',
                'title.max' => 'The alt text may not be greater than 255 characters.',
                'title.required' => 'The title is required.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/package/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $image = $manager->read($uploadedImage);
                $image->resize(500, 500);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.' .'webp';
                $image->save($path.$filename);
                $data['image'] = $path.$filename;
            }

            $data['is_active'] = 1;
            Package::create($data);
            return redirect()->back()->with('success_msg', 'Package created successfully');
        }
        $title= 'Add Package';
        $data = Package::where('is_active', 1)->get();
        $services = Service::where('is_active', 1)->get();
        return view('package.create', compact('title', 'data'));

    }


    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $package = Package::find($id);
        if (!$package) {
            // Handle case where the package is not found
            return response()->json(['message' => 'Package not found'], 404);
        }
        // Toggle the is_active field
        $package->is_active = $package->is_active == 1 ? 2 : 1;

        // Save the updated package
        $package->save();

        return response()->json(['message' => 'Package Staus updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $package = Package::find($id);
        if ($package) {
            if (!empty($package->image) && file_exists(public_path($package->image))) {
                unlink(public_path($package->image));
            }
            $package->delete();
            return redirect()->back()->with('success_msg', 'Package deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'Package not found');
    }
}
