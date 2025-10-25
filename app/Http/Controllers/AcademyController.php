<?php

namespace App\Http\Controllers;

use App\Models\Academy;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class AcademyController extends Controller
{
    public function index()
    {
        $title =  "All  Academy About List";
        $data = Academy::get();
        return view('academy.academy-list', compact('data', 'title'));
    }



    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request, $id = null)
    {
        $title = $id ? "Update Academy About" : "Add Academy About";
        $about = $id ? Academy::find(base64_decode($id)) : new Academy();
        $message = $id ? "Academy About updated successfully" : "Academy About added successfully";

        if ($request->isMethod('post')) {
            $data = $request->all();

            // Dynamic validation for uniqueness
            $rules = [
                'title' => 'required|string|max:255|unique:academies,title' . ($id ? ",$id" : ''),
                'page' => 'required|in:academy,course',
                'description' => 'required',
            ];
            $customMessages = [
                'title.required' => 'The Academy About Title is required.',
                'title.unique' => 'The Academy about name already exists. Please choose a different name.',
                'page.required' => 'The Academy About View Page selection is required.',
                'description.required' => 'The Academy About description is required.',
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
                    $path = 'assets/images/academy/';
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
                    $path = 'assets/videos/academy/';
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
            $about->title       = $data['title'];
//            $about->sub_title   = $data['sub_title'];
            $about->page        = $data['page'];
            $about->position    = $data['position'];
            $about->description = $data['description'];
            if (isset($data['file'])) {
                $about->image   = $data['file'];
            }
            $about->is_active   = 1;
            $about->save();

            return redirect()->back()->with('success', $message);
        }

        return view('academy.academy', compact('title', 'about'));
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, About $about)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $about = Academy::find($id);
        if($about){
            if(!empty($about->image) && file_exists(public_path($about->image))){
                unlink(public_path($about->image));
            }
            $about->delete();
            return redirect()->back()->with('success', 'Academy About deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'About not found');
    }
}
