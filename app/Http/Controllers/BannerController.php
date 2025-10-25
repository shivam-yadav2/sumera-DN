<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Service;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    /**
     * Show the form for creating a new resource.
     */

    public function create(Request $request, $id = null)
    {
        // Initialize variables
        $title = $id ? 'Edit Banner' : 'Add Banner';
        $banner = $id ? Banner::findOrFail($id) : new Banner;
        $services = Service::where('is_active', 1)->get();
        $data = Banner::all();
        if ($request->isMethod('post')) {
            // Gather all request data
            $data = $request->all();
            // Validation rules
            $rules = [
                'title' => 'required|string|max:255|unique:banners,title,' . $id,
                'image' => $id ? 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048' : 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
                'service_id' => 'required',
            ];

            // Custom error messages
            $customMessages = [
                'title.required' => 'The Banner name is required.',
                'title.unique' => 'The Banner name already exists. Please choose a different name.',
                'image.required' => 'The Banner image is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The image size must not exceed 2MB.',
                'service_id.required' => 'The Banner service selection is required.',
            ];

            // Validate the data
            $validator = Validator::make($data, $rules, $customMessages);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            // Save banner data
            $banner->title = $data['title'];
            $banner->url = $data['url'] ?? null; // Optional URL field

            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/banner/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $image = $manager->read($uploadedImage);
                $image->resize(1920, 650);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.' .'webp';
                $image->save($path.$filename);
                $banner['image'] = $path.$filename;
            }

            $banner->service_id = $data['service_id'];
            $banner->is_active = $data['is_active'] ?? '1'; // Default active status

//            echo '<pre>';print_r($banner);exit;
            // Save the banner
            if ($banner->save()) {
                return redirect()->back()->with('success', $id ? 'Banner updated successfully' : 'Banner added successfully');
            } else {
                return redirect()->back()->with('error', 'Something went wrong. Please try again.');
            }
        }

        return view('banner.create', compact('title', 'banner', 'services', 'data'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Banner $banner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $banner = Banner::find($id);
        if ($banner) {
            if(!empty($banner->image) && file_exists(public_path($banner->image))){
                unlink(public_path($banner->image));
            }
            $banner->delete();
            return redirect()->back()->with('success', 'Banner deleted successfully');
    }

        return redirect()->back()->with('error', 'Something went wrong. Please try again.');
    }
}
