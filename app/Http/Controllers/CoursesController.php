<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoursesController extends Controller
{
    public function index( Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            $rules = [
                'title'     => 'required|string|max:255',
            ];
            $customMessages = [
                'title.max' => 'The Meta title text may not be greater than 255 characters.',
                'title.required' => 'The Meta title  is required.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            Courses::create($data);
            return redirect()->back()->with('success_msg', 'Course created successfully');
        }
        $title= 'Add Meta Tags Seo';
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
            ];
            $customMessages = [
                'title.max' => 'The Meta title text may not be greater than 255 characters.',
                'title.required' => 'The Meta title  is required.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            $course = Courses::find($id);
            if (!$course) {
                return redirect()->back()->with('error_msg', 'Course not found.');
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
