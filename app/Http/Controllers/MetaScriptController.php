<?php

namespace App\Http\Controllers;

use App\Models\MetaScript;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MetaScriptController extends Controller
{

    public function index( Request $request)
    {
        if($request->isMethod('POST')){
            $data = $request->all();
            $rules = [
                'type'  => 'required',
                'code'  => 'required',
            ];

            $customMessages = [
                'type.required' => 'The type is required.',
                'code.required' => 'The code is required.',
            ];
            $validator = Validator::make($data, $rules, $customMessages);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }


            $data['is_active'] = 1;
            MetaScript::create($data);
            return redirect()->back()->with('success_msg', 'Meta Script created successfully');
        }
        $title= 'Add Meta Script';
        $data = MetaScript::get();
//        echo '<pre>'; print_r($data);exit;
        return view('meta-seo.code.create', compact('title', 'data'));

    }


    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $meta = MetaScript::find($id);
        if (!$meta) {
            // Handle case where the MetaScript is not found
            return response()->json(['message' => 'Meta Script not found'], 404);
        }
        // Toggle the is_active field
        $meta->is_active = $meta->is_active == 1 ? 2 : 1;

        // Save the updated MetaScript
        $meta->save();

        return response()->json(['message' => 'Meta Script Status updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $meta = MetaScript::find($id);
        if ($meta) {
            $meta->delete();
            return redirect()->back()->with('success_msg', 'Meta Script deleted successfully');
        }
        return redirect()->back()->with('error_msg', 'Meta Script not found');
    }
    /**
     * Remove the specified resource from storage.
     */

}
