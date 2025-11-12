<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Intervention\Image\Encoders\WebpEncoder;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->get();

        return view('blog.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource or editing an existing one.
     */
    public function create(Request $request, $id = null)
    {
        $isUpdate = !empty($id);
        $title = $isUpdate ? 'Update Blog' : 'Add Blog';
        $blog = $isUpdate ? Blog::findOrFail($id) : new Blog();
        $message = $isUpdate ? 'Blog updated successfully' : 'Blog created successfully';

        if ($request->isMethod('post')) {
            $data = $request->all();

            $rules = [
                'title' => 'required|string|max:255',
                'slug' => 'nullable|string|max:255|unique:blogs,slug,' . $blog->id,
                'excerpt' => 'nullable|string|max:500',
                'content' => 'required|string',
                'featured_image' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:3072',
                'meta_title' => 'nullable|string|max:255',
                'meta_description' => 'nullable|string|max:1000',
                'is_active' => 'required|in:1,2',
                'published_at' => 'nullable|date',
            ];

            $customMessages = [
                'title.required' => 'The blog title is required.',
                'content.required' => 'Please add blog content.',
                'featured_image.image' => 'The featured image must be a valid image file.',
                'featured_image.mimes' => 'The featured image must be a file of type: jpeg, jpg, png, webp.',
                'featured_image.max' => 'The featured image may not be greater than 3MB.',
            ];

            $validator = Validator::make($data, $rules, $customMessages);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }

            $data['slug'] = Str::slug($data['slug'] ?? $data['title']);
            $data['published_at'] = !empty($data['published_at'])
                ? Carbon::parse($data['published_at'])
                : null;

            if ($request->hasFile('featured_image')) {
                $manager = new ImageManager(new Driver());
                $path = 'assets/images/blog/';

                if (!is_dir(public_path($path))) {
                    mkdir(public_path($path), 0755, true);
                }

                $uploadedImage = $request->file('featured_image');
                $image = $manager->read($uploadedImage);
                $image->encode(new WebpEncoder(quality: 75));
                $filename = $data['slug'] . '-' . time() . '.webp';
                $image->save(public_path($path . $filename));

                if ($isUpdate && !empty($blog->featured_image) && File::exists(public_path($blog->featured_image))) {
                    File::delete(public_path($blog->featured_image));
                }

                $data['featured_image'] = $path . $filename;
            }

            if ($isUpdate) {
                $blog->update($data);
            } else {
                Blog::create($data);
            }

            return redirect()
                ->route('admin.blogs.index')
                ->with('success_msg', $message);
        }

        return view('blog.create', compact('title', 'blog'));
    }

    /**
     * Toggle the active status of the blog.
     */
    public function update($id)
    {
        $blog = Blog::find($id);

        if (!$blog) {
            return redirect()->back()->with('error_msg', 'Blog not found');
        }

        if (in_array($blog->is_active, ['1', '2'])) {
            $blog->is_active = $blog->is_active === '1' ? '2' : '1';
        }

        $blog->save();

        return redirect()->back()->with('success_msg', 'Blog status updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);

        if (!$blog) {
            return redirect()->back()->with('error_msg', 'Blog not found');
        }

        if (!empty($blog->featured_image) && File::exists(public_path($blog->featured_image))) {
            File::delete(public_path($blog->featured_image));
        }

        $blog->delete();

        return redirect()->back()->with('success_msg', 'Blog deleted successfully');
    }
}

