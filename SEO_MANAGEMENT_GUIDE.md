# SEO Management System - Complete Guide

## Overview
A comprehensive, static meta tag management system for all pages (frontend and admin) without using database tables. All SEO data is managed through a config file (`config/seo.php`), making it easy to update meta titles, descriptions, and keywords for every page.

---

## How It Works

### Architecture
1. **Config File** (`config/seo.php`): Stores all meta tags for pages
2. **Helper Class** (`app/Helpers/SeoHelper.php`): Processes SEO data
3. **Helper Functions** (`app/helpers.php`): Convenient functions to get SEO data
4. **SEOHead Component** (`resources/js/Components/SEOHead.jsx`): React component to render meta tags
5. **Routes**: Inject SEO data into Inertia responses
6. **Pages**: Use SEOHead component to display meta tags

---

## Files Structure

```
├── config/
│   └── seo.php                 # SEO configuration for all pages
├── app/
│   ├── Helpers/
│   │   └── SeoHelper.php       # SEO helper class
│   └── helpers.php             # Helper functions
├── resources/js/
│   ├── Components/
│   │   └── SEOHead.jsx         # React SEO component
│   └── Pages/
│       ├── Home.jsx            # Uses SEO
│       ├── About.jsx           # Uses SEO
│       ├── Service.jsx         # Uses SEO
│       ├── MensGrooming.jsx    # Uses SEO
│       ├── ContactPage.jsx     # Uses SEO
│       ├── Gallery.jsx         # Uses SEO
│       └── ... (all pages)
└── routes/
    └── web.php                 # Injects SEO data
```

---

## How to Update SEO for Pages

### Step 1: Edit config/seo.php

```php
'pages' => [
    'home' => [
        'title' => 'Your Custom Title Here',
        'description' => 'Your custom description here',
        'keywords' => 'keyword1, keyword2, keyword3',
    ],
    'about' => [
        'title' => 'About Us - Your Title',
        'description' => 'About page description',
        'keywords' => 'about, company, team',
    ],
    // Add more pages...
],
```

### Step 2: No Code Changes Needed!
Once you update `config/seo.php`, the changes will automatically reflect on the website.

---

## Available Helper Functions

### 1. `get_seo($page, $override = [])`
Get SEO data for any page.

**Usage:**
```php
$seo = get_seo('home');
$seo = get_seo('about');
$seo = get_seo('contact');
```

### 2. `get_service_seo($service)`
Get dynamic SEO data for service pages.

**Usage:**
```php
$seo = get_service_seo($serviceModel);
```

### 3. `get_blog_seo($blog)`
Get dynamic SEO data for blog pages.

**Usage:**
```php
$seo = get_blog_seo($blogModel);
```

---

## Frontend Pages with SEO

### Current SEO Implementation

| Page | Route | SEO Key | Status |
|------|-------|---------|--------|
| Home | `/` | `home` | ✅ Implemented |
| About | `/about` | `about` | ✅ Implemented |
| Services (Dynamic) | `/services/{slug}` | Dynamic | ✅ Implemented |
| Men's Grooming | `/mens-grooming` | `mens-grooming` | ✅ Implemented |
| Gallery | `/gallery/*` | `gallery.*` | ✅ Implemented |
| Contact | `/contact` | `contact` | ✅ Implemented |
| Academy | `/academy` | `academy` | ✅ Implemented |
| Offers | `/offers` | `offers` | ✅ Implemented |
| Blogs | `/blogs` | `blogs` | ✅ Implemented |
| Blog Detail | `/blogs/{slug}` | Dynamic | ✅ Implemented |
| Franchise | `/franchise` | `franchise` | ✅ Implemented |

---

## How SEO Data Flows

```
1. Route (web.php)
   ↓
2. Helper Function (get_seo())
   ↓
3. Config File (config/seo.php)
   ↓
4. Inertia Response (with 'seo' key)
   ↓
5. React Page Component
   ↓
6. SEOHead Component
   ↓
7. HTML <head> Meta Tags
```

---

## SEO Data Structure

Each page SEO object contains:

```javascript
{
    meta_title: "Page Title - Brand Name",
    meta_description: "Page description for search engines",
    meta_keywords: "keyword1, keyword2, keyword3",
    meta_author: "Sumeera Salon And Academy",
    og_image: "/assets/images/og-image.jpg",
    og_title: "Social Media Title",
    og_description: "Social media description"
}
```

---

## Adding SEO to New Pages

### Step 1: Add to config/seo.php

```php
'pages' => [
    'your-new-page' => [
        'title' => 'New Page Title',
        'description' => 'New page description',
        'keywords' => 'relevant, keywords, here',
    ],
],
```

### Step 2: Update Route (routes/web.php)

```php
Route::get('/your-new-page', function () {
    return Inertia::render('YourNewPage', [
        'seo' => get_seo('your-new-page'),
        // ... other data
    ]);
})->name('your-new-page');
```

### Step 3: Use in React Component

```javascript
import SEOHead from '@/Components/SEOHead';
import { usePage } from '@inertiajs/react';

const YourNewPage = () => {
    const { seo } = usePage().props;
    
    return (
        <Layout>
            <SEOHead seo={seo} />
            {/* Your page content */}
        </Layout>
    );
};
```

---

## Dynamic SEO for Services

Service pages get dynamic SEO based on the service data:

**Auto-generates:**
- Title: `{Service Title} - Premium Beauty Service | Sumeera Salon`
- Description: Based on service description
- Keywords: Service title + default keywords

**Example:**
```php
// In route
'seo' => get_service_seo($serviceData)

// Generates:
// Title: "Hair Styling - Premium Beauty Service | Sumeera Salon"
// Description: "Expert Hair Styling services at Sumeera Salon..."
```

---

## Dynamic SEO for Blogs

Blog pages get dynamic SEO from blog meta fields:

**Uses:**
- `meta_title` from blog (or auto-generates)
- `meta_description` from blog
- `meta_keywords` from blog
- `featured_image` as og:image

---

## Default SEO Values

If a page doesn't have specific SEO data, it falls back to defaults:

```php
'default' => [
    'title' => 'Sumeera Salon And Academy - Premium Beauty Salon in Lucknow',
    'description' => 'Experience luxury beauty services at Sumeera...',
    'keywords' => 'beauty salon lucknow, makeup artist...',
    'author' => 'Sumeera Salon And Academy',
    'og_image' => '/assets/images/og-image.jpg',
],
```

---

## Meta Tags Generated

The SEOHead component generates:

### Basic Meta Tags
- `<title>`
- `<meta name="description">`
- `<meta name="keywords">`
- `<meta name="author">`

### Open Graph (Facebook)
- `<meta property="og:type">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:image">`

### Twitter Cards
- `<meta name="twitter:card">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`
- `<meta name="twitter:image">`

---

## Admin Pages (Blade Templates)

For admin pages using Blade templates, add to the layout:

```blade
@section('title', config('seo.admin.dashboard.title'))

<head>
    <title>@yield('title', 'Admin - Sumeera')</title>
    <meta name="description" content="@yield('description', 'Admin panel')">
</head>
```

---

## Best Practices

### Title Tags
- ✅ Keep under 60 characters
- ✅ Include brand name
- ✅ Be descriptive and unique
- ✅ Format: `Page Name - Brand Name`

### Meta Descriptions
- ✅ Keep between 150-160 characters
- ✅ Include primary keywords naturally
- ✅ Write compelling copy
- ✅ Include a call-to-action

### Keywords
- ✅ Use 5-10 relevant keywords
- ✅ Separate with commas
- ✅ Include location (Lucknow)
- ✅ Mix primary and long-tail keywords

### Open Graph Images
- ✅ Minimum size: 1200x630px
- ✅ Format: JPG or PNG
- ✅ Keep file size under 1MB
- ✅ Store in `/public/assets/images/`

---

## Testing SEO

### 1. View Page Source
Right-click on any page → View Page Source → Check `<head>` section

### 2. Check Meta Tags
Look for:
```html
<title>Your Page Title</title>
<meta name="description" content="Your description">
<meta property="og:title" content="Your title">
```

### 3. Use SEO Tools
- Google Search Console
- Meta Tags Validator
- Twitter Card Validator
- Facebook Sharing Debugger

---

## Common Tasks

### Update Home Page SEO
```php
// Edit config/seo.php
'pages' => [
    'home' => [
        'title' => 'New Home Title',
        'description' => 'New description',
    ],
],
```

### Add SEO to New Service
```php
// No changes needed! 
// Service SEO is auto-generated from service data
```

### Change Default OG Image
```php
// Edit config/seo.php
'default' => [
    'og_image' => '/assets/images/new-og-image.jpg',
],
```

### Override SEO for Specific Route
```php
Route::get('/special-page', function () {
    return Inertia::render('SpecialPage', [
        'seo' => get_seo('special-page', [
            'title' => 'Custom Override Title',
        ]),
    ]);
});
```

---

## Troubleshooting

### Browser showing "Laravel" in title?
1. Update `.env` file: `APP_NAME="Sumeera Salon And Academy"`
2. Run `php artisan config:clear`
3. Hard refresh browser (Ctrl+F5)
4. Check `config/app.php` has correct default name

### SEO not showing?
1. Clear browser cache
2. Check if `composer dump-autoload` was run
3. Verify `config/seo.php` exists
4. Check route passes `seo` data
5. Verify component uses `<SEOHead seo={seo} />`

### Wrong SEO data?
1. Check correct key in `config/seo.php`
2. Verify route uses correct `get_seo('key')`
3. Clear config cache: `php artisan config:clear`
4. Clear browser cache

### Dynamic pages not working?
1. Check service/blog model is passed correctly
2. Verify `get_service_seo()` or `get_blog_seo()` is used
3. Check model has required fields (title, description)

### Meta tags not updating?
1. Clear all caches: `php artisan config:clear && php artisan cache:clear`
2. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
3. Check page source to verify meta tags
4. Ensure SEOHead component is being used in the page

---

## Maintenance

### When to Update
- New page added → Add to `config/seo.php`
- Page content changes → Update SEO to match
- Rebranding → Update all titles/descriptions
- New keywords → Add to relevant pages
- Seasonal campaigns → Update home/offers pages

### Regular Checks
- ✅ All pages have unique titles
- ✅ Descriptions are compelling
- ✅ Keywords are relevant
- ✅ OG images load correctly
- ✅ No duplicate content

---

## Summary

✅ **Static Config-Based**: No database, easy to manage  
✅ **Centralized**: All SEO in one file (`config/seo.php`)  
✅ **Dynamic Support**: Services and blogs get auto-generated SEO  
✅ **Comprehensive**: Covers all meta tags (Basic, OG, Twitter)  
✅ **Easy to Update**: Edit config file, no code changes needed  
✅ **Fallback System**: Default values if specific SEO not defined  
✅ **Reusable**: SEOHead component used across all pages  

---

## Quick Reference

**Add SEO to new page:**
1. Add to `config/seo.php`
2. Pass in route: `'seo' => get_seo('page-key')`
3. Use in component: `<SEOHead seo={seo} />`

**Update existing SEO:**
1. Edit `config/seo.php`
2. Done!

**Check SEO:**
- View page source
- Check `<head>` section
- Use online SEO checkers

---

Happy optimizing! 🚀

