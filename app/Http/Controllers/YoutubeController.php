<?php

namespace App\Http\Controllers;

use App\Models\Youtube;
use App\Models\Service;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class YoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index( Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            $rules = [
                'url' => 'required',
                'service_id'     => 'required|string|max:255',
            ];

            $customMessages = [
                'url.required' => 'The slider image is required.',
                'service_id.required' => 'The title is required.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }


            $data['is_active'] = 1;
            Youtube::create($data);
            return redirect()->back()->with('success_msg', 'Youtube created successfully');
        }
        $title= 'Add Youtube';
        $services = Service::where('is_active', 1)->get();
        $data = Youtube::where('is_active', 1)->with('service')->get();
        return view('youtube.create', compact('title','services', 'data'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $youtube = Youtube::find($id);
        if (!$youtube) {
            // Handle case where the Youtube is not found
            return response()->json(['message' => 'Youtube not found'], 404);
        }
        // Toggle the is_active field
        $youtube->is_active = $youtube->is_active == 1 ? 2 : 1;

        // Save the updated package
        $youtube->save();

        return response()->json(['message' => 'Youtube Staus updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $youtube = Youtube::find($id);
        if ($youtube) {
            if (!empty($package->image) && file_exists(public_path($youtube->image))) {
                unlink(public_path($youtube->image));
            }
            $youtube->delete();
            return redirect()->back()->with('success_msg', 'Youtube deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'Youtube not found');
    }
}
