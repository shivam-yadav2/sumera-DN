<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $service = Service::get();
        return view('service.index', compact('service'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, $id = null)
    {
        if($id == ""){
            $title = "Add Service";
            $service = new Service();
            $message = "Service added successfully";
        }else{
            $title = "Update Service";
            $service = Service::find($id);
            $message = "Service updated successfully";
        }
        if($request->isMethod('post')){
            $data = $request->all();
            $rules = [
                'title'     => 'required|string|max:255|unique:services,title,' . $id,
                'slug_url'      => 'required|string|max:255',
                'image'    => $id ? 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048' : 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
                'banner'   => 'nullable|image|mimes:jpeg,jpg,png,webp|max:1024',
                'mobile_banner'     => 'nullable|image|mimes:jpeg,jpg,png,webp|max:1024',
                'description'        => 'nullable|string|max:500',
                'is_front'          => 'required|in:no,yes',
//                'menu_type'          => 'required|in:no,yes',
            ];
            $customMessages = [
                'title.required' => 'The Service name is required.',
                'title.unique' => 'The Service name already exists. Please choose a different name.',
                'slug_url.required' => 'The Service URL is required.',
                'image.required' => 'The Service image is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The image size must not exceed 1MB.',
                'banner.image' => 'The Service banner must be an image.',
                'banner.mimes' => 'The Service banner must be a file of type: jpeg, jpg, png, webp.',
                'banner.max' => 'The Service banner size must not exceed 1MB.',
                'mobile_banner.image' => 'The Service Mobile banner must be an image.',
                'mobile_banner.mimes' => 'The Service Mobile banner must be a file of type: jpeg, jpg, png, webp.',
                'mobile_banner.max' => 'The Service Mobile banner size must not exceed 300kb.',
                'description.required' => 'The Service name is required.',
                'is_front.in' => 'The is_front value must be either "no" or "yes".',
            ];
            $validator = Validator::make($data, $rules, $customMessages);

            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }

            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/service/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $image = $manager->read($uploadedImage);
//                $image->resize(360, 252);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.' .'webp';
                $image->save($path.$filename);
                $data['image'] = $path.$filename;
            }
            if($request->hasFile('banner')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/service/banner';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('banner');
                $image = $manager->read($uploadedImage);
                $image->resize(1920, 300);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.' .'webp';
                $image->save($path.$filename);
                $data['banner'] = $path.$filename;
            }

            if($request->hasFile('mobile_banner')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/service/mobile';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('mobile_banner');
                $image = $manager->read($uploadedImage);
                $image->resize(390, 230);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.' .'webp';
                $image->save($path.$filename);
                $data['mobile_banner'] = $path.$filename;
            }
            if ($id == "") {
                Service::create($data);
            } else {
                $service->update($data);
            }
            return redirect()->back()->with('success_msg', $message);
        }
        return view('service.create', compact('title', 'service'));
    }


    public function update($id)
    {
        // Find the offer by ID
        $data = Service::find($id);
        if (!$data) {
            // Handle case where the offer is not found
            return response()->json(['message' => 'Service not found'], 404);
        }
        // Toggle the is_front field: If 1, set to 2; if 2, set to 1
        if (in_array($data->is_active, ['1', '2'])) {
            $data->is_active = $data->is_active === '1' ? '2' : '1';
        } else {
            // Handle unexpected values of is_front
            return response()->json(['message' => 'Invalid Service id value'], 400);
        }

        // Save the updated offer
        if ($data->save()) {
            return redirect()->back()->with('success_msg', 'Service Update Status successfully');
        } else {
            return response()->json(['message' => 'Failed to update Service'], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service = Service::find($id);
        if($service){
            if(!empty($service->image) && file_exists(public_path($service->image))){
                unlink(public_path($service->image));
            }
            if(!empty($service->banner) && file_exists(public_path($service->banner))){
                unlink(public_path($service->banner));
            }
            if(!empty($service->mobile_banner) && file_exists(public_path($service->mobile_banner))){
                unlink(public_path($service->mobile_banner));
            }
            $service->delete();
            return redirect()->back()->with('success_msg', 'Service deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'Service not found');
    }
}
