<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\WebpEncoder;

class CoursesController extends Controller
{
    public function index( Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            $rules = [
                'title'     => 'required|string|max:255',
                'image'     => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
                'duration'  => 'nullable|string|max:255',
                'fees'      => 'nullable|string|max:255',
            ];
            $customMessages = [
                'title.max' => 'The Course title text may not be greater than 255 characters.',
                'title.required' => 'The Course title is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The image size must not exceed 2MB.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }

            // Handle image upload
            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/courses/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $image = $manager->read($uploadedImage);
                $image->resize(800, 600);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.webp';
                $image->save($path.$filename);
                $data['image'] = $path.$filename;
            }

            Courses::create($data);
            return redirect()->back()->with('success_msg', 'Course created successfully');
        }
        $title= 'Add Course';
        $data = Courses::where('is_active', 1)->get();
        return view('academy.course', compact('title', 'data'));

    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            if (!isset($data['id']) || empty($data['id'])) {
                return redirect()->back()->with('error_msg', 'Invalid Course ID.');
            }
            $id = base64_decode($data['id']);
            if (!$id || !is_numeric($id)) {
                return redirect()->back()->with('error_msg', 'Invalid Course ID.');
            }
            $rules = [
                'title'     => 'required|string|max:255',
                'image'     => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
                'duration'  => 'nullable|string|max:255',
                'fees'      => 'nullable|string|max:255',
            ];
            $customMessages = [
                'title.max' => 'The Course title text may not be greater than 255 characters.',
                'title.required' => 'The Course title is required.',
                'image.image' => 'The file must be an image.',
                'image.mimes' => 'The image must be a file of type: jpeg, jpg, png, webp.',
                'image.max' => 'The image size must not exceed 2MB.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }

            $course = Courses::find($id);
            if (!$course) {
                return redirect()->back()->with('error_msg', 'Course not found.');
            }

            // Handle image upload
            if($request->hasFile('image')) {
                // Delete old image if exists
                if(!empty($course->image) && file_exists(public_path($course->image))){
                    unlink(public_path($course->image));
                }
                
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/courses/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $image = $manager->read($uploadedImage);
                $image->resize(800, 600);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.webp';
                $image->save($path.$filename);
                $data['image'] = $path.$filename;
            }

            $course->update($data);
            return redirect()->back()->with('success_msg', 'Course Update successfully');
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $meta = Courses::find($id);
        if (!$meta) {
            // Handle case where the  is not found
            return response()->json(['message' => 'Courses not found'], 404);
        }
        // Toggle the is_active field
        $meta->is_active = $meta->is_active == 1 ? 2 : 1;
        // Save the updated package
        $meta->save();
        return response()->json(['message' => 'Courses Status updated successfully']);
    }
}
