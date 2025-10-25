<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $title= 'Contact List';
        $data = Contact::where('is_active', 1)->orderBy('id', 'desc')->paginate(25);
//        $data = Contact::where('is_active', 1)->get();
        return view('enquiry.contact', compact('title', 'data'));
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
            $rules = [
                'name'    => 'required|string|max:50',
                'mobile'  => 'required|string|max:13|min:10',
                'email'   => 'nullable|email|max:255', // Email field added
                'service' => 'nullable|string|max:255',
                'message'    => 'nullable|string|max:255', // Make 'city' optional
            ];

            $customMessages = [
                'name.required'    => 'The name is required.',
                'name.string'      => 'The name must be a string.',
                'name.max'         => 'The name must not exceed 50 characters.',
                'mobile.required'  => 'The contact mobile number is required.',
                'mobile.string'    => 'The mobile number must be a string.',
                'mobile.max'       => 'The mobile number must not exceed 13 characters.',
                'mobile.min'       => 'The mobile number must be at least 10 characters.',
                'email.email'      => 'The email must be a valid email address.',
                'email.max'        => 'The email must not exceed 255 characters.',
                'service.string'   => 'The service must be a string.',
                'service.max'      => 'The service must not exceed 255 characters.',
                'message.string'      => 'The city must be a string.',
                'message.max'         => 'The city must not exceed 255 characters.',
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
        $contact = Contact::find($id);
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
        // Find the contact with the specified ID and `is_active` = 1
        $contact = Contact::where('id', $id)->where('is_active', 1)->first();

        if ($contact) {
            // Update the `is_active` field directly
            $contact->update(['is_active' => 2]);
            return redirect()->back()->with('success', 'Contact has been deleted successfully.');
            // Return a success JSON response
//            return response()->json(['message' => 'Contact status updated successfully'], 200);
        }

        // Return 404 response if contact is not found
        return response()->json(['message' => 'Contact not found'], 404);
    }

}
