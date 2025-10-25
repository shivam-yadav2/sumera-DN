<?php

namespace App\Http\Controllers;

use App\Models\CoursesDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoursesDetailController extends Controller
{
    public function index(Request $request, $id)
    {
        $courseId = base64_decode($id);

        if ($request->isMethod('POST')) {
            $data = $request->all();
            $data['course_id'] = $courseId;

            // Validation rules
            $rules = [
                'course_id'    => 'required|string|max:255',
                'heading'      => 'required|string|max:255',
                'course_price' => 'required|numeric|min:0',
                'offer_price'  => 'required|numeric|min:0|lte:course_price',
                'duration'     => 'required|string|max:255',
                'description'  => 'nullable|string|max:255',
            ];

            // Custom error messages
            $customMessages = [
                'heading.max'        => 'The Course Details heading may not exceed 255 characters.',
                'heading.required'   => 'The Course Details heading is required.',
                'course_price.max'   => 'The Course Details price may not exceed 255 characters.',
                'course_price.numeric' => 'The Course price must be a valid number.',
                'course_price.required' => 'The Course price is required.',
                'offer_price.numeric' => 'The Offer price must be a valid number.',
                'offer_price.required' => 'The Offer price is required.',
                'offer_price.lte'    => 'The Offer price must be less than or equal to the Course price.',
                'duration.max'       => 'The Course Details duration may not exceed 255 characters.',
                'duration.required'  => 'The Course Details duration is required.',
                'description.max'    => 'The Course Details description may not exceed 255 characters.',
            ];

            // Validate the request
            $validator = Validator::make($data, $rules, $customMessages);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            // Save the course details
            CoursesDetail::create($data);

            return redirect()->back()->with('success_msg', 'Course details created successfully.');
        }

        $title = 'Add Course Details';
        $data = CoursesDetail::where(['course_id' => $courseId, 'is_active' => 1])->get();

        return view('academy.course-details', compact('title', 'data', 'id'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        if ($request->isMethod('POST')) {
            $data = $request->all();
            if (!isset($data['id']) || empty($data['id'])) {
                return redirect()->back()->with('error_msg', 'Invalid Course ID.');
            }
            $id = base64_decode($data['id']);

            if (!$id || !is_numeric($id)) {
                return redirect()->back()->with('error_msg', 'Invalid Course ID.');
            }
            // Validation rules
            $rules = [
                'heading'      => 'required|string|max:255',
                'course_price' => 'required|numeric|min:0',
                'offer_price'  => 'required|numeric|min:0|lte:course_price',
                'duration'     => 'required|string|max:255',
                'description'  => 'nullable|string|max:255',
            ];

            // Custom error messages
            $customMessages = [
                'heading.max'        => 'The Course Details heading may not exceed 255 characters.',
                'heading.required'   => 'The Course Details heading is required.',
                'course_price.numeric' => 'The Course price must be a valid number.',
                'course_price.required' => 'The Course price is required.',
                'offer_price.numeric' => 'The Offer price must be a valid number.',
                'offer_price.required' => 'The Offer price is required.',
                'offer_price.lte'    => 'The Offer price must be less than or equal to the Course price.',
                'duration.max'       => 'The Course Details duration may not exceed 255 characters.',
                'duration.required'  => 'The Course Details duration is required.',
                'description.max'    => 'The Course Details description may not exceed 255 characters.',
            ];

            // Validate the request
            $validator = Validator::make($data, $rules, $customMessages);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            // Find the course by ID
            $courseDetail = CoursesDetail::find($id);

            if (!$courseDetail) {
                return redirect()->back()->with('error_msg', 'Course details not found.');
            }

            // Update the course details
            $courseDetail->update($data);

            return redirect()->back()->with('success_msg', 'Course details updated successfully.');
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $meta = CoursesDetail::find($id);
        if (!$meta) {
            // Handle case where the  is not found
            return response()->json(['message' => 'Courses Detail not found'], 404);
        }
        // Toggle the is_active field
        $meta->is_active = $meta->is_active == 1 ? 2 : 1;

        // Save the updated package
        $meta->save();

        return response()->json(['message' => 'Courses Detail Status updated successfully']);
    }
}
