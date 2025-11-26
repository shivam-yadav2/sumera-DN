<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogPageController extends Controller
{
    /**
     * Display a listing of published blogs for the frontend.
     */
    public function index()
    {
        $blogs = Blog::where('is_active', '1')
            ->orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->get()
            ->map(function (Blog $blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'excerpt' => $blog->excerpt ?: Str::limit(strip_tags($blog->content), 160),
                    'featured_image' => $blog->featured_image ? asset($blog->featured_image) : null,
                    'meta_title' => $blog->meta_title,
                    'meta_description' => $blog->meta_description,
                    'published_at' => optional($blog->published_at)->toIso8601String(),
                ];
            });

        return Inertia::render('BlogList', [
            'blogs' => $blogs,
            'seo' => get_seo('blogs'),
        ]);
    }

    /**
     * Display the specified blog post.
     */
    public function show(string $slug)
    {
        $blog = Blog::where('slug', $slug)
            ->where('is_active', '1')
            ->firstOrFail();

        $relatedBlogs = Blog::where('is_active', '1')
            ->where('id', '!=', $blog->id)
            ->orderByDesc('published_at')
            ->orderByDesc('created_at')
            ->limit(3)
            ->get()
            ->map(function (Blog $related) {
                return [
                    'id' => $related->id,
                    'title' => $related->title,
                    'slug' => $related->slug,
                    'excerpt' => $related->excerpt ?: Str::limit(strip_tags($related->content), 120),
                    'featured_image' => $related->featured_image ? asset($related->featured_image) : null,
                    'published_at' => optional($related->published_at)->toIso8601String(),
                ];
            });

        return Inertia::render('BlogDetail', [
            'blog' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'excerpt' => $blog->excerpt,
                'content' => $blog->content,
                'featured_image' => $blog->featured_image ? asset($blog->featured_image) : null,
                'published_at' => optional($blog->published_at)->toIso8601String(),
            ],
            'relatedBlogs' => $relatedBlogs,
            'seo' => get_blog_seo($blog),
        ]);
    }
}

