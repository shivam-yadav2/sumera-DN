<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceAbout;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;


class ServiceAboutController extends Controller
{
    public function index()
    {
        $about = ServiceAbout::get();
        return view('service.service-about-list', compact('about'));
    }


    public function create($id)
    {
        //return $request;
        $check = Service::find(base64_decode($id));
        //return $check->id;
        if (!$check) {
            return redirect()->back()->with('error', 'Service not found');
        }
        $id = $id ;
        $title =  "Add Service About";
        return view('service.service-about', compact('title',  'id'));
    }

    public function store(Request $request)
    {
        //return $request;
        $data = $request->all();
        $rules = [
            'title' => 'required|string|max:255',
//          'page' => 'required|in:academy,course',
            'description' => 'required',
        ];
        $customMessages = [
            'title.required' => 'The Service About Title is required.',
            'title.unique' => 'The Service About name already exists. Please choose a different name.',
            'page.required' => 'The Service About Page selection is required.',
            'description.required' => 'The ServiceAbout About description is required.',
        ];
        $validator = Validator::make($data, $rules, $customMessages);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
            // Handle file upload
        if ($request->hasFile('file')) {
                $uploadedFile = $request->file('file');
                $mimeType = $uploadedFile->getMimeType();

                if (str_starts_with($mimeType, 'image/')) {
                    // Handle image upload
                    $manager = new ImageManager(new Driver());
                    $path = 'assets/images/ServiceAbout/';
                    if (!is_dir($path)) {
                        mkdir($path, 0755, true);
                    }

                    $image = $manager->read($uploadedFile);
//                    $image->resize(1080, 1080);
                    $image->encode(new WebpEncoder(quality: 65));
                    $filename = uniqid() . '.' . 'webp';
                    $image->save($path . $filename);
                    $data['file'] = $path . $filename;
                } elseif (str_starts_with($mimeType, 'video/')) {
                    // Handle video upload
                    $path = 'assets/videos/ServiceAbout/';
                    if (!is_dir($path)) {
                        mkdir($path, 0755, true);
                    }

                    $filename = uniqid() . '.' . $uploadedFile->getClientOriginalExtension();
                    $uploadedFile->move($path, $filename);
                    $data['file'] = $path . $filename;
                } else {
                    return redirect()->back()->withErrors(['file' => 'Invalid file type. Only images and videos are allowed.'])->withInput();
                }
            }

        $service = [
            'title' => $data['title'],
            'service_id' => $data['service_id'],
            'page' => $data['page'],
            'position' => $data['position'],
            'description' => $data['description'],
            'is_active' => 1,
        ] ;
        if (isset($data['file'])) {
            $service['image'] = $data['file'];
        }
        ServiceAbout::create($service);
        return redirect()->back()->with('success', 'Service About Submit successfully');
    }




    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $title =  "Update Service About";
        $about = ServiceAbout::find($id) ;
        $message = "Service About updated successfully";

        if ($request->isMethod('post')) {
            $data = $request->all();

            // Dynamic validation for uniqueness
            $rules = [
                'title' => 'required|string|max:255|unique:academies,title' . ($id ? ",$id" : ''),
//                'page' => 'required|in:academy,course',
                'description' => 'required',
            ];
            $customMessages = [
                'title.required' => 'The Service About Title is required.',
                'title.unique' => 'The Service About name already exists. Please choose a different name.',
                'page.required' => 'The Service About Page selection is required.',
                'description.required' => 'The ServiceAbout About description is required.',
            ];

            $validator = Validator::make($data, $rules, $customMessages);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            // Handle file upload
            if ($request->hasFile('file')) {
                $uploadedFile = $request->file('file');
                $mimeType = $uploadedFile->getMimeType();

                if (str_starts_with($mimeType, 'image/')) {
                    // Handle image upload
                    $manager = new ImageManager(new Driver());
                    $path = 'assets/images/ServiceAbout/';
                    if (!is_dir($path)) {
                        mkdir($path, 0755, true);
                    }

                    $image = $manager->read($uploadedFile);
//                    $image->resize(1080, 1080);
                    $image->encode(new WebpEncoder(quality: 65));
                    $filename = uniqid() . '.' . 'webp';
                    $image->save($path . $filename);
                    $data['file'] = $path . $filename;
                } elseif (str_starts_with($mimeType, 'video/')) {
                    // Handle video upload
                    $path = 'assets/videos/ServiceAbout/';
                    if (!is_dir($path)) {
                        mkdir($path, 0755, true);
                    }

                    $filename = uniqid() . '.' . $uploadedFile->getClientOriginalExtension();
                    $uploadedFile->move($path, $filename);
                    $data['file'] = $path . $filename;
                } else {
                    return redirect()->back()->withErrors(['file' => 'Invalid file type. Only images and videos are allowed.'])->withInput();
                }
            }


            // Save or update the `About` model
            $about->title           = $data['title'];
            $about->service_id      = $data['service_id'];
//            $about->page          = $data['page'];
            $about->position        = $data['position'];
            $about->description     = $data['description'];
            if (isset($data['file'])) {
                $about->image       = $data['file'];
            }
            $about->is_active       = 1;
            $about->save();

            return redirect()->back()->with('success', $message);
        }

        return view('service.service-about', compact('title', 'about'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $about = ServiceAbout::find($id);
        if($about){
            if(!empty($about->image) && file_exists(public_path($about->image))){
                unlink(public_path($about->image));
            }
            $about->delete();
            return redirect()->back()->with('success', 'Service  About deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'About not found');
    }
}
