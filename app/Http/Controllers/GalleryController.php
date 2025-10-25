<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Service;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $gallery = Gallery::where('is_active', 1)->get();
        //return $gallery;
        return view('gallery.index', compact('gallery'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, $id = null)

    {

        // Initialize variables
        $title = $id ? 'Edit Gallery' : 'Add Gallery';
        $gallery = $id ? Gallery::findOrFail($id) : new Gallery;
        $services = Service::where('is_active', 1)->get();
        $data = Gallery::all();
        if ($request->isMethod('post')) {
            $rules = [
                'service_id' => 'required',
                'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            ];
            $customMessages = [
                'service_id.required' => 'The Gallery Service is required.',
                'service_id.exists' => 'The selected product does not exist.',
                'image.required' => 'The gallery image is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be a file of type: jpeg, png, jpg, gif, webp.',
                'image.max' => 'The image may not be greater than 2MB.',
            ];
            $validator = Validator::make($request->all(), $rules, $customMessages);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            if ($request->hasFile('image')) {
    $manager = new ImageManager(new Driver());
    $path = 'assets/images/gallery/';

    if (!is_dir($path)) {
        mkdir($path, 0755, true);
    }

    foreach ($request->file('image') as $uploadedImage) {
                    $image = $manager->read($uploadedImage);
                    // $image->resize(1500, 1500);
                    $image->encode(new WebpEncoder(quality: 65));

                    // ✅ Get and sanitize original name (without extension)
                    $originalName = pathinfo($uploadedImage->getClientOriginalName(), PATHINFO_FILENAME);
                    $safeName = preg_replace('/[^A-Za-z0-9_\-]/', '_', $originalName);

                    // ✅ Create filename with sanitized original name
                    $filename =  uniqid() .'_' .$safeName. '.webp';
                    $image->save($path . $filename);

                    // ✅ Save to DB
                    Gallery::create([
                        'title' => $request->title,
                        'service_id' => $request->service_id,
                        'image' => $path . $filename,
                        'is_front' => $request->is_front,
                        'is_active' => 1,
                    ]);
                }
}
            return redirect()->back()->with('success_msg', 'Gallery images uploaded successfully!');
        }
        return view('gallery.create', compact('title', 'gallery', 'services', 'data'));
    }




    public function update($id)
    {
        // Find the offer by ID
        $offer = Gallery::find($id);
        if (!$offer) {
            // Handle case where the offer is not found
            return response()->json(['message' => 'Gallery not found'], 404);
        }
        // Toggle the is_front field: If 1, set to 2; if 2, set to 1
        if (in_array($offer->is_front, ['yes', 'no'])) {
            $offer->is_front = $offer->is_front === 'yes' ? 'no' : 'yes';
        } else {
            // Handle unexpected values of is_front
            return response()->json(['message' => 'Invalid is_front value'], 400);
        }

        // Save the updated offer
        if ($offer->save()) {
            return redirect()->back()->with('success_msg', 'Gallery Update Status successfully');
        } else {
            return response()->json(['message' => 'Failed to update gallery'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
      public function destroy($id)
        {
            $gallery = Gallery::find($id);
        
            if ($gallery) {
                $imagePath = public_path($gallery->image); // ✅ Correct: get real path on disk
        
                if (!empty($gallery->image) && file_exists($imagePath)) {
                    unlink($imagePath);
                }
        
                $gallery->delete();
        
                return redirect()->back()->with('success_msg', 'Gallery image deleted successfully');
            }
        
            return redirect()->back()->with('error_msg', 'Gallery image not found');
        }

}
