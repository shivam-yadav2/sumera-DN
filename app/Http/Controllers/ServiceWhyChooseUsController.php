<?php

namespace App\Http\Controllers;

use App\Models\ServiceWhyChooseUs;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServiceWhyChooseUsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $id)
    {
        $serviceId = base64_decode($id);
        $service = Service::findOrFail($serviceId);

        if ($request->isMethod('POST')) {
            $data = $request->all();
            $data['service_id'] = $serviceId;

            // Validation rules
            $rules = [
                'service_id' => 'required|integer',
                'icon' => 'required|string|in:Award,Sparkles,Heart,Shield,Clock,Users,Star,Trophy,CheckCircle',
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'order' => 'nullable|integer',
            ];

            // Custom error messages
            $customMessages = [
                'icon.required' => 'The icon field is required.',
                'icon.in' => 'The selected icon is invalid.',
                'title.required' => 'The title is required.',
                'title.max' => 'The title may not exceed 255 characters.',
                'description.required' => 'The description is required.',
            ];

            // Validate the request
            $validator = Validator::make($data, $rules, $customMessages);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            // Save the why choose us feature
            ServiceWhyChooseUs::create($data);

            return redirect()->back()->with('success_msg', 'Why Choose Us feature created successfully.');
        }

        $title = 'Service Why Choose Us Features';
        $data = ServiceWhyChooseUs::where(['service_id' => $serviceId, 'is_active' => 1])
            ->orderBy('order', 'asc')
            ->get();

        return view('service.why-choose-us', compact('title', 'data', 'id', 'service'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        if (!$request->isMethod('POST')) {
            return redirect()->back()->with('error_msg', 'Invalid request method.');
        }

        $data = $request->all();

        if (!isset($data['id']) || empty($data['id']) || !is_numeric(base64_decode($data['id']))) {
            return redirect()->back()->with('error_msg', 'Invalid Why Choose Us feature.');
        }

        $id = base64_decode($data['id']);

        // Validation rules
        $rules = [
            'icon' => 'required|string|in:Award,Sparkles,Heart,Shield,Clock,Users,Star,Trophy,CheckCircle',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'order' => 'nullable|integer',
        ];

        $customMessages = [
            'icon.required' => 'The icon field is required.',
            'icon.in' => 'The selected icon is invalid.',
            'title.required' => 'The title is required.',
            'title.max' => 'The title may not exceed 255 characters.',
            'description.required' => 'The description is required.',
        ];

        // Validate request
        $validator = Validator::make($data, $rules, $customMessages);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Find the feature
        $feature = ServiceWhyChooseUs::find($id);
        if (!$feature) {
            return redirect()->back()->with('error_msg', 'Why Choose Us feature not found.');
        }

        // Update the feature
        $feature->update($data);

        return redirect()->back()->with('success_msg', 'Why Choose Us feature updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $feature = ServiceWhyChooseUs::find($id);
        if (!$feature) {
            return response()->json(['message' => 'Why Choose Us feature not found'], 404);
        }
        
        // Toggle the is_active field
        $feature->is_active = $feature->is_active == 1 ? 2 : 1;
        $feature->save();

        return response()->json(['message' => 'Why Choose Us feature status updated successfully']);
    }
}
