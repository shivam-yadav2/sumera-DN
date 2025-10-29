<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use App\Models\Service;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class OfferController extends Controller
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
                'is_front' => 'required',
                'service_id' => 'required',
            ];

            $customMessages = [
                'image.required' => 'The slider image is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The slider image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The slider image size must not exceed 2MB.',
                'title.max' => 'The alt text may not be greater than 255 characters.',
                'title.required' => 'The title is required.',
                'is_front.required' => 'The is front is required.',
                'service_id.required' => 'The Offer service is required.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/offers/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $originalName = pathinfo($uploadedImage->getClientOriginalName(), PATHINFO_FILENAME);
                $safeName = preg_replace('/[^A-Za-z0-9_\-]/', '_', $originalName);
                $timestamp = time();
                $image = $manager->read($uploadedImage);
                
                // Resize image to 900x1600 (portrait dimension)
                $image->resize(900, 1600);
                
                $image->encode(new WebpEncoder(quality: 65));
                $filename = $timestamp . '_' . $safeName . '.webp';
                $image->save($path.$filename);
                $data['image'] = $path.$filename;
            }

            $data['is_active'] = 1;
            Offer::create($data);
            return redirect()->back()->with('success_msg', 'Offer created successfully');
        }
        $title= 'Add Offers';
        $data = Offer::where('is_active', 1)->get();
        $services = Service::where('is_active', 1)->get();
        return view('offer.create', compact('title', 'data', 'services'));

    }


    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        // Find the offer by ID
        $offer = Offer::find($id);

        if (!$offer) {
            // Handle case where the offer is not found
            return response()->json(['message' => 'Offer not found'], 404);
        }

        // Toggle the is_front field: If 1, set to 2; if 2, set to 1
        // Toggle the is_front field: If 1, set to 2; if 2, set to 1
        if ($offer->is_front === 'yes') {
            $offer->is_front = 'no';
        } elseif ($offer->is_front === 'no') {
            $offer->is_front = 'yes';
        } else {
            // Optional: Handle unexpected values
            return response()->json(['message' => 'Invalid is_front value'], 400);
        }


        // Save the updated offer
        $offer->save();

        return redirect()->back()->with('success_msg', 'Offer Update Status successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $offer = Offer::find($id);
        if ($offer) {
            if (!empty($offer->image) && file_exists(public_path($offer->image))) {
                unlink(public_path($offer->image));
            }
            $offer->delete();
            return redirect()->back()->with('success_msg', 'Offer deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'Offer not found');
    }
}
