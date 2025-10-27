<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ===========================================
// FRONTEND ROUTES (Inertia.js)
// ===========================================

// Public frontend routes
Route::get('/', [HomeController::class, 'index2'])->name('home');
Route::get('/gallery/photos', function () {
    return Inertia::render('Gallery');
})->name('gallery.photos');

Route::get('/gallery/videos', function () {
    return Inertia::render('SalonVideoGallery');
})->name('gallery.videos');

Route::get('/contact', function () {
    return Inertia::render('ContactPage');
})->name('contact');

Route::get('/academy', function () {
    return Inertia::render('AcademyPage');
})->name('academy');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/services/{service}', function () {
    return Inertia::render('Service');
})->name('services.show');

// User authentication routes (Inertia)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ===========================================
// ADMIN ROUTES (Blade Templates)
// ===========================================

// Admin middleware group
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    // Admin Dashboard
    Route::get('/', function () {
        return redirect()->route('admin.dashboard');
    });

    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    // Service Management
    Route::get('/services', [App\Http\Controllers\ServiceController::class, 'index'])->name('services.index');
    Route::match(['get', 'post'], '/services/{id?}', [App\Http\Controllers\ServiceController::class, 'create'])->name('services.create');
    Route::get('/services/{id}/status', [App\Http\Controllers\ServiceController::class, 'update'])->name('services.status');
    Route::get('/services/{id}/delete', [App\Http\Controllers\ServiceController::class, 'destroy'])->name('services.destroy');

    // About Management
    Route::match(['get', 'post'], '/about/{id?}', [App\Http\Controllers\AboutController::class, 'create'])->name('about.create');
    Route::get('/about', [App\Http\Controllers\AboutController::class, 'index'])->name('about.index');
    Route::get('/about/{id}/delete', [App\Http\Controllers\AboutController::class, 'destroy'])->name('about.destroy');

    // Banner Management
    Route::get('/banners', [App\Http\Controllers\BannerController::class, 'create'])->name('banners.index');
    Route::match(['get', 'post'], '/banners/{id?}', [App\Http\Controllers\BannerController::class, 'create'])->name('banners.create');
    Route::get('/banners/{id}/update', [App\Http\Controllers\BannerController::class, 'update'])->name('banners.update');
    Route::get('/banners/{id}/delete', [App\Http\Controllers\BannerController::class, 'destroy'])->name('banners.destroy');

    // Brand Management
    Route::get('/brands', [App\Http\Controllers\BrandController::class, 'index'])->name('brands.index');
    Route::match(['get', 'post'], '/brands/{id?}', [App\Http\Controllers\BrandController::class, 'create'])->name('brands.create');
    Route::get('/brands/{id}/delete', [App\Http\Controllers\BrandController::class, 'destroy'])->name('brands.destroy');

    // Service Brand Management (Admin panel)
    Route::get('/service-brands/{id}', [App\Http\Controllers\ServiceBrandController::class, 'create'])->name('service-brands.create');
    Route::post('/service-brands', [App\Http\Controllers\ServiceBrandController::class, 'store'])->name('service-brands.store');
    Route::get('/service-brands/{id}/delete', [App\Http\Controllers\ServiceBrandController::class, 'destroy'])->name('service-brands.destroy');

    // Package Management
    Route::get('/packages', [App\Http\Controllers\PackageController::class, 'index'])->name('packages.index');
    Route::match(['get', 'post'], '/packages/{id?}', [App\Http\Controllers\PackageController::class, 'index'])->name('packages.create');
    Route::get('/packages/{id}/update', [App\Http\Controllers\PackageController::class, 'update'])->name('packages.update');
    Route::get('/packages/{id}/delete', [App\Http\Controllers\PackageController::class, 'destroy'])->name('packages.destroy');

    // YouTube Management
    Route::get('/youtube', [App\Http\Controllers\YoutubeController::class, 'index'])->name('youtube.index');
    Route::match(['get', 'post'], '/youtube/{id?}', [App\Http\Controllers\YoutubeController::class, 'index'])->name('youtube.create');
    Route::get('/youtube/{id}/update', [App\Http\Controllers\YoutubeController::class, 'update'])->name('youtube.update');
    Route::get('/youtube/{id}/delete', [App\Http\Controllers\YoutubeController::class, 'destroy'])->name('youtube.destroy');

    // Meta Script Management
    Route::get('/meta-scripts', [App\Http\Controllers\MetaScriptController::class, 'index'])->name('meta-scripts.index');
    Route::match(['get', 'post'], '/meta-scripts/{id?}', [App\Http\Controllers\MetaScriptController::class, 'index'])->name('meta-scripts.create');
    Route::get('/meta-scripts/{id}/update', [App\Http\Controllers\MetaScriptController::class, 'update'])->name('meta-scripts.update');
    Route::get('/meta-scripts/{id}/delete', [App\Http\Controllers\MetaScriptController::class, 'destroy'])->name('meta-scripts.destroy');

    // Meta Tag Management
    Route::get('/meta-tags', [App\Http\Controllers\MetatagSeoController::class, 'index'])->name('meta-tags.index');
    Route::match(['get', 'post'], '/meta-tags/{id?}', [App\Http\Controllers\MetatagSeoController::class, 'index'])->name('meta-tags.create');
    Route::get('/meta-tags/{id}/update', [App\Http\Controllers\MetatagSeoController::class, 'update'])->name('meta-tags.update');
    Route::get('/meta-tags/{id}/delete', [App\Http\Controllers\MetatagSeoController::class, 'destroy'])->name('meta-tags.destroy');

    // Meta Mobile Management
    Route::get('/meta-mobile', [App\Http\Controllers\MetaMobileController::class, 'index'])->name('meta-mobile.index');
    Route::match(['get', 'post'], '/meta-mobile/{id?}', [App\Http\Controllers\MetaMobileController::class, 'index'])->name('meta-mobile.create');
    Route::get('/meta-mobile/{id}/update', [App\Http\Controllers\MetaMobileController::class, 'update'])->name('meta-mobile.update');
    Route::get('/meta-mobile/{id}/delete', [App\Http\Controllers\MetaMobileController::class, 'destroy'])->name('meta-mobile.destroy');

    // Gallery Management
    Route::get('/gallery', [App\Http\Controllers\GalleryController::class, 'index'])->name('gallery.index');
    Route::match(['get', 'post'], '/gallery/create', [App\Http\Controllers\GalleryController::class, 'create'])->name('gallery.create');
    Route::get('/gallery/{id}/update', [App\Http\Controllers\GalleryController::class, 'update'])->name('gallery.update');
    Route::get('/gallery/{id}/delete', [App\Http\Controllers\GalleryController::class, 'destroy'])->name('gallery.destroy');

    // Offer Management
    Route::get('/offers', [App\Http\Controllers\OfferController::class, 'index'])->name('offers.index');
    Route::match(['get', 'post'], '/offers/{id?}', [App\Http\Controllers\OfferController::class, 'index'])->name('offers.create');
    Route::get('/offers/{id}/update', [App\Http\Controllers\OfferController::class, 'update'])->name('offers.update');
    Route::get('/offers/{id}/delete', [App\Http\Controllers\OfferController::class, 'destroy'])->name('offers.destroy');

    // Feature Celebrity Management
    Route::get('/features', [App\Http\Controllers\FeatureCelebrityController::class, 'index'])->name('features.index');
    Route::match(['get', 'post'], '/features/{id?}', [App\Http\Controllers\FeatureCelebrityController::class, 'index'])->name('features.create');
    Route::get('/features/{id}/delete', [App\Http\Controllers\FeatureCelebrityController::class, 'destroy'])->name('features.destroy');

    // Slider Management
    Route::match(['get', 'post'], '/sliders', [App\Http\Controllers\SliderController::class, 'AddSlider'])->name('sliders.create');
    Route::get('/sliders/{id}', [App\Http\Controllers\SliderController::class, 'DeleteSlider'])->name('sliders.destroy');

    // Contact Management
    Route::get('/contacts', [App\Http\Controllers\ContactController::class, 'index'])->name('contacts.index');
    Route::get('/contacts/{id}/delete', [App\Http\Controllers\ContactController::class, 'destroy'])->name('contacts.destroy');

    // Appointment Management
    Route::get('/appointments', [App\Http\Controllers\AppointmentController::class, 'index'])->name('appointments.index');
    Route::get('/appointments/{id}/delete', [App\Http\Controllers\AppointmentController::class, 'destroy'])->name('appointments.destroy');
    Route::post('/appointments/bulk-delete', [App\Http\Controllers\AppointmentController::class, 'bulkDelete'])->name('appointments.bulk-delete');

    // Course Management
    Route::match(['get', 'post'], '/courses', [App\Http\Controllers\CoursesController::class, 'index'])->name('courses.create');
    Route::post('/courses/update', [App\Http\Controllers\CoursesController::class, 'update'])->name('courses.update');
    Route::get('/courses/{id}/delete', [App\Http\Controllers\CoursesController::class, 'destroy'])->name('courses.destroy');

    // Course Details Management
    Route::match(['get', 'post'], '/course-details/{id?}', [App\Http\Controllers\CoursesDetailController::class, 'index'])->name('course-details.create');
    Route::post('/course-details/update', [App\Http\Controllers\CoursesDetailController::class, 'update'])->name('course-details.update');
    Route::get('/course-details/{id}/delete', [App\Http\Controllers\CoursesDetailController::class, 'destroy'])->name('course-details.destroy');

    // Sub Services Management
    Route::match(['get', 'post'], '/sub-services/{id?}', [App\Http\Controllers\SubServicesController::class, 'index'])->name('sub-services.create');
    Route::post('/sub-services/{id}/update', [App\Http\Controllers\SubServicesController::class, 'update'])->name('sub-services.update');
    Route::get('/sub-services/{id}/delete', [App\Http\Controllers\SubServicesController::class, 'destroy'])->name('sub-services.destroy');

    // Academy Management
    Route::match(['get', 'post'], '/academy/{id?}', [App\Http\Controllers\AcademyController::class, 'create'])->name('academy.create');
    Route::get('/academy', [App\Http\Controllers\AcademyController::class, 'index'])->name('academy.index');
    Route::get('/academy/{id}/delete', [App\Http\Controllers\AcademyController::class, 'destroy'])->name('academy.destroy');

    // Service About Management
    Route::get('/service-about/{id}', [App\Http\Controllers\ServiceAboutController::class, 'create'])->name('service-about.create');
    Route::post('/service-about', [App\Http\Controllers\ServiceAboutController::class, 'store'])->name('service-about.store');
    Route::get('/service-about/{id}/delete', [App\Http\Controllers\ServiceAboutController::class, 'destroy'])->name('service-about.destroy');
});

// ===========================================
// UTILITY ROUTES
// ===========================================

Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    return 'Cache cleared successfully!';
})->name('clear-cache');

Route::get('/send-test-email', function () {
    try {
        Mail::raw('This is a test email from Laravel!', function ($message) {
            $message
                ->to('satyalaravel2023@gmail.com')
                ->subject('Test Email');
        });
        return 'Test email sent successfully!';
    } catch (\Exception $e) {
        return 'Error: ' . $e->getMessage();
    }
})->name('test-email');

require __DIR__ . '/auth.php';
