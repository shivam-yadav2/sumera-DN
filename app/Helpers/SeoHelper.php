<?php

namespace App\Helpers;

class SeoHelper
{
    /**
     * Get SEO data for a page
     * 
     * @param string $page Page identifier (e.g., 'home', 'about', 'admin.dashboard')
     * @param array $override Override default values
     * @return array
     */
    public static function getSeoData($page, $override = [])
    {
        $config = config('seo');
        $default = $config['default'];
        
        // Determine if it's an admin page or frontend page
        if (str_starts_with($page, 'admin.')) {
            $pageKey = str_replace('admin.', '', $page);
            $pageData = $config['admin'][$pageKey] ?? [];
        } else {
            $pageData = $config['pages'][$page] ?? [];
        }
        
        // Merge default, page specific, and override data
        $seoData = array_merge($default, $pageData, $override);
        
        return [
            'meta_title' => $seoData['title'] ?? $default['title'],
            'meta_description' => $seoData['description'] ?? $default['description'],
            'meta_keywords' => $seoData['keywords'] ?? $default['keywords'],
            'meta_author' => $seoData['author'] ?? $default['author'],
            'og_image' => $seoData['og_image'] ?? $default['og_image'],
            'og_title' => $seoData['title'] ?? $default['title'],
            'og_description' => $seoData['description'] ?? $default['description'],
        ];
    }
    
    /**
     * Get dynamic SEO data for services
     * 
     * @param object $service Service model
     * @return array
     */
    public static function getServiceSeo($service)
    {
        return self::getSeoData('services', [
            'title' => $service->title . ' - Premium Beauty Service | Sumeera Salon',
            'description' => $service->description ?? 'Expert ' . $service->title . ' services at Sumeera Salon And Academy in Lucknow. Book your appointment for professional beauty care.',
            'keywords' => strtolower($service->title) . ', ' . config('seo.default.keywords'),
        ]);
    }
    
    /**
     * Get dynamic SEO data for blogs
     * 
     * @param object $blog Blog model
     * @return array
     */
    public static function getBlogSeo($blog)
    {
        return self::getSeoData('blogs', [
            'title' => $blog->title . ' | Sumeera Beauty Blog',
            'description' => $blog->meta_description ?? substr(strip_tags($blog->content), 0, 155),
            'keywords' => $blog->meta_keywords ?? config('seo.default.keywords'),
            'og_image' => $blog->image ?? config('seo.default.og_image'),
        ]);
    }
}

