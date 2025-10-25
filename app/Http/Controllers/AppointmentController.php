<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $title= 'Book Appointment List';
        $data = Appointment::where('is_active', 1)->orderBy('id', 'desc')->paginate(25);
        return view('enquiry.appointment', compact('title', 'data'));
    }

    public function bulkDelete(Request $request)
    {
        if ($request->has('ids')) {
            Appointment::whereIn('id', $request->ids)->update(['is_active' => 2]);
            return response()->json(['success' => true]);
        }
    
        return response()->json(['success' => false], 400);
    }

    
    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            // Define validation rules
            $rules = [
                'name'    => 'required|string|max:50',
                'mobile'  => 'required|string|max:13|min:10',
                'email'   => 'nullable|email|max:255', // Email field added
                'service' => 'required|string|max:255',
                'city'    => 'nullable|string|max:50', // Make 'city' optional
            ];

            // Define custom error messages
            $customMessages = [
                'name.required'    => 'The name is required.',
                'name.string'      => 'The name must be a string.',
                'name.max'         => 'The name must not exceed 50 characters.',
                'mobile.required'  => 'The contact mobile number is required.',
                'mobile.string'    => 'The mobile number must be a string.',
                'mobile.max'       => 'The mobile number must not exceed 13 characters.',
                'mobile.min'       => 'The mobile number must be at least 10 characters.',
                'email.required'   => 'The email is required.',
                'email.email'      => 'The email must be a valid email address.',
                'email.max'        => 'The email must not exceed 255 characters.',
                'service.required' => 'The service is required.',
                'service.string'   => 'The service must be a string.',
                'service.max'      => 'The service must not exceed 255 characters.',
                'city.string'      => 'The city must be a string.',
                'city.max'         => 'The city must not exceed 50 characters.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }

            $data['is_active'] = 1;
            Contact::create($data);
            return redirect()->back()->with('success_msg', 'Contact created successfully');
        }


    }



    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $contact = Appointment::find($id);
       if ($contact) {
           $contact->delete();
           return redirect()->back()->with('success_msg', 'Contact deleted successfully');
       }
       return redirect()->back()->with('error_msg', 'Contact not found');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Use a single query to find the contact and ensure the response is quick
        $contact = Appointment::find($id);

        if ($contact) {
            // Update the `is_active` field directly
            $contact->update(['is_active' => 2]);
            return redirect()->back()->with('success', 'Appointment has been deleted successfully.');
//            return response()->json(['message' => 'Contact status updated successfully'], 200);
        }

        // Return 404 response if contact is not found
        return response()->json(['message' => 'Contact not found'], 404);
    }
}
