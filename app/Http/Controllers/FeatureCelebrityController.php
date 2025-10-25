<?php

namespace App\Http\Controllers;

use App\Models\FeatureCelebrity;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class FeatureCelebrityController extends Controller
{
    public function index( Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            $rules = [
                'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:500',
                'title'     => 'required|string|max:255',
                'page' => 'required',
                'is_front' => 'required',

            ];

            $customMessages = [
                'image.required' => 'The Feature and Celebrity image is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The Feature and Celebrity image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The Feature and Celebrity image size must not exceed 300kb.',
                'title.max' => 'The alt text may not be greater than 255 characters.',
                'title.required' => 'The title is required.',
                'page.required' => 'The Image for page select celebrity and feature is required.',
                'is_front.required' => 'The is front is required.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            
            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/celebrity/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $originalName = pathinfo($uploadedImage->getClientOriginalName(), PATHINFO_FILENAME);
                $safeName = preg_replace('/[^A-Za-z0-9_\-]/', '_', $originalName);
                $timestamp = time();
                $image = $manager->read($uploadedImage);
                $image->resize(500, 500);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = $timestamp . '_' . $safeName . '.webp';
                $image->save($path.$filename);
                $data['image'] = $path.$filename;
            }

            $data['is_active'] = 1;
            FeatureCelebrity::create($data);
            return redirect()->back()->with('success_msg', 'Feature and Celebrity  created successfully');
        }
        $title= 'Add Celebrity and Feature';
        $data = FeatureCelebrity::where('is_active', 1)->get();
        $services = FeatureCelebrity::where('is_active', 1)->get();
        return view('celebrity.create', compact('title', 'data', 'services'));

    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Offer $offer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $offer = FeatureCelebrity::find($id);
        if ($offer) {
            if (!empty($offer->image) && file_exists(public_path($offer->image))) {
                unlink(public_path($offer->image));
            }
            $offer->delete();
            return redirect()->back()->with('success_msg', 'Feature and Celebrity deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'Feature and Celebrity not found');
    }
}
