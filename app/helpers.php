<?php

use App\Helpers\SeoHelper;

if (!function_exists('get_seo')) {
    /**
     * Get SEO data for a page
     * 
     * @param string $page
     * @param array $override
     * @return array
     */
    function get_seo($page, $override = [])
    {
        return SeoHelper::getSeoData($page, $override);
    }
}

if (!function_exists('get_service_seo')) {
    /**
     * Get SEO data for a service
     * 
     * @param object $service
     * @return array
     */
    function get_service_seo($service)
    {
        return SeoHelper::getServiceSeo($service);
    }
}

if (!function_exists('get_blog_seo')) {
    /**
     * Get SEO data for a blog
     * 
     * @param object $blog
     * @return array
     */
    function get_blog_seo($blog)
    {
        return SeoHelper::getBlogSeo($blog);
    }
}

