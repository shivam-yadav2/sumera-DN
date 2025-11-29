<?php

namespace App\Http\Controllers;

use App\Models\SubServices;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class SubServicesController extends Controller
{
    /**
     * Normalize potentially malformed UTF-8 strings.
     */
    private function sanitizeUtf8(?string $value): ?string
    {
        if ($value === null) {
            return null;
        }

        $clean = iconv('UTF-8', 'UTF-8//IGNORE', $value);
        return $clean === false ? $value : $clean;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $id)
    {
        $sericeId = base64_decode($id);

        if ($request->isMethod('POST')) {
            $data = $request->all();
            $data['service_id'] = $sericeId;
            $data['title'] = $this->sanitizeUtf8($data['title']);
            $data['description'] = $this->sanitizeUtf8($data['description'] ?? null);

            // Validation rules
            $rules = [
                'service_id'    =>  'required|string|max:255',
                'title'         =>  'required|string|max:255',
                'image'         =>  'required|image|mimes:jpeg,jpg,png,webp|max:2048',
            'description'   =>  'nullable|string',
            ];

            // Custom error messages
            $customMessages = [
                'title.max'         => 'The Sub Service Details heading may not exceed 255 characters.',
                'title.required'    => 'The Sub Service Details Image  is required.',
                'image.required'    => 'The Service image is required.',
                'image.image'       => 'The file must be an image.',
                'image.mimes'       => 'The image must be a file of type: jpeg, jpg, png, webp.',
                'image.max'         => 'The image size must not exceed 2MB.',
                'description.max'   => 'The Sub Service Details description may not exceed 255 characters.',
            ];

            // Validate the request
            $validator = Validator::make($data, $rules, $customMessages);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            if($request->hasFile('image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/service/';
                if (!is_dir($path)) {
                    mkdir($path, 0755, true);
                }
                $uploadedImage = $request->file('image');
                $image = $manager->read($uploadedImage);
                $image->resize(1080, 1080);
                $image->encode(new WebpEncoder(quality: 65));
                $filename = uniqid() . '.' .'webp';
                $image->save($path.$filename);
                $data['image'] = $path.$filename;
            }

            // Save the course details
            SubServices::create($data);

            return redirect()->back()->with('success_msg', 'Sub Service details created successfully.');
        }

        $title = 'Add Sub Services Details';
        $data = SubServices::where(['service_id' => $sericeId, 'is_active' => 1])->get();

        return view('service.sub-services', compact('title', 'data', 'id'));
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
        $data['title'] = $this->sanitizeUtf8($data['title']);
        $data['description'] = $this->sanitizeUtf8($data['description'] ?? null);
//echo '<pre>'; print_r($data);exit;
        if (!isset($data['id']) || empty($data['id']) || !is_numeric(base64_decode($data['id']))) {
            return redirect()->back()->with('error_msg', 'Invalid Sub Services.');
        }

        $id = base64_decode($data['id']);

        // Validation rules
        $rules = [
            'title'         => 'required|string|max:255',
            'image'         => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
            'description'   => 'nullable|string',
        ];

        $customMessages = [
            'title.required'  => 'The title is required.',
            'title.max'       => 'The title may not exceed 255 characters.',
            'image.max'       => 'The image size must not exceed 2MB.',
        ];

        // Validate request
        $validator = Validator::make($data, $rules, $customMessages);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Find the sub-service details
        $Detail = SubServices::find($id);
        if (!$Detail) {
            return redirect()->back()->with('error_msg', 'Sub Service details not found.');
        }

        // Process the image if uploaded
        $updateData = [
            'title'       => $data['title'],
            'description' => $data['description'] ?? null,
        ];

        if ($request->hasFile('image')) {
            $manager = new ImageManager(new Driver());
            $path = 'assets/images/service/';
            if (!is_dir($path)) {
                mkdir($path, 0755, true);
            }

            $uploadedImage = $request->file('image');
            $image = $manager->read($uploadedImage);
            $image->resize(1080, 1080);
            $image->encode(new WebpEncoder(quality: 65));
            $filename = uniqid() . '.webp';
            $image->save($path . $filename);
            $updateData['image'] = $path . $filename;
        }

        // Update the sub-service details
        $Detail->update($updateData);

        return redirect()->back()->with('success_msg', 'Sub Service details updated successfully.');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $meta = SubServices::find($id);
        if (!$meta) {
            // Handle case where the  is not found
            return response()->json(['message' => 'Sub Service Detail not found'], 404);
        }
        // Toggle the is_active field
        $meta->is_active = $meta->is_active == 1 ? 2 : 1;

        // Save the updated package
        $meta->save();

        return redirect()->back()->with('success_msg', 'Sub Service details deleted successfully.');
    }
}
