<?php

namespace App\Http\Controllers;

use App\Models\MetaMobile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MetaMobileController extends Controller
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
                'mobile' => 'required|max:13|min:10',
                'whatsapp' => 'required|max:12|min:10',

            ];

            $customMessages = [
                'mobile.required' => 'The Mobile Number is required.',
                'whatsapp.required' => 'The Whatsapp Number is required.',
                'mobile.max' => 'The Mobile Number  may not be greater than 12 characters.',
                'whatsapp.max' => 'The Whatsapp Number  may not be greater than 12 characters.',
                'mobile.min' => 'The Mobile Number  must be at least 10 characters.',
                'whatsapp.min' => 'The Whatsapp Number  must be at least 10 characters.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }



            MetaMobile::create($data);
            return redirect()->back()->with('success_msg', 'Meta mobile and whatsapp created successfully');
        }
        $title= 'Add Meta Script';
        $data = MetaMobile::where('is_active', 1)->get();
        return view('meta-seo.mobile.create', compact('title', 'data'));

    }


    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $meta = MetaMobile::find($id);
        if (!$meta) {
            // Handle case where the MetaMobile is not found
            return response()->json(['message' => 'Meta mobile and whatsapp not found'], 404);
        }
        // Toggle the is_active field
        $meta->is_active = $meta->is_active == 1 ? 2 : 1;

        // Save the updated MetaMobile
        $meta->save();

        return response()->json(['message' => 'Meta mobile and whatsapp Status updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $meta = MetaMobile::find($id);
        if ($meta) {
            $meta->delete();
            return redirect()->back()->with('success_msg', 'Meta mobile and whatsapp  deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'Meta mobile and whatsapp not found');
    }
    /**
     * Remove the specified resource from storage.
     */
}
