<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\MetatagSeo;
use App\Models\MetaScript;
use App\Models\Slider;
use App\Models\About;
use App\Models\ServiceAbout;
use App\Models\SubServices;
use App\Models\Offer;
use App\Models\Service;
use App\Models\Gallery;
use App\Models\Brand;
use App\Models\ServiceBrand;
use App\Models\Banner;
use App\Models\Youtube;
use App\Models\Appointment;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;


class AuthController extends Controller
{


    public function getProductsByCategoryUrl($categoryUrl)
    {
        $category = Category::select(['id', 'category_name', 'category_image', 'category_banner', 'mobile_banner', 'meta_title', 'meta_description', 'meta_keyword'])->where('category_url', $categoryUrl)->where('status', 1)->first();
        if (!$category) {
            return response()->json(['message' => 'Category not found.'], 404);
        }
        $products = Product::select(['id','product_name', 'product_url', 'product_image', 'product_price'])
            ->where('category_id', $category->id)
            ->where('is_active', 1)
            ->get()
            ->map(function ($product) {
                $galleryImage = ProductGallery::where('product_id', $product->id)
                    ->where('status', 1)
                    ->value('gallery_image');
                $product->gallery_image = $galleryImage;
                return $product;
            });
        if ($products->isEmpty()) {
            return response()->json(['message' => 'No products found for this category.'], 404);
        }
        return response()->json(['message' => 'All Products', 'category' => $category, 'products' => $products], 200);
    }

    public function Slider(){
        $data = Slider::select('id','slider_image', 'mobile_image', 'alt_text')
            ->where('is_active', '1')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All Home Sliders',
            'slider' => $data,
        ],200);
    }

    public function About(){
        $data = About::select('id','heading', 'description', 'image','is_index')
            ->where('is_active', '1' ,)
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All About Content',
            'about' => $data,
        ],200);
    }

    public function Makeup(){
        $data = SubServices::select('id','title', 'image')
            ->where([
                'is_active' => '1',
                'service_id' => 1])
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All MAkeup Sub Service',
            'makeup' => $data,
        ],200);
    }

    public function Offer(){
        $data = Offer::select('id','title', 'image','service_id', 'is_front')
            ->where('is_active', '1')->orderBy('id', 'desc')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All Offer Images',
            'offer' => $data,
        ],200);
    }

    public function Service(){
        $data = Service::select('id','title', 'image','slug_url', 'description', 'is_front')
            ->where('is_active', '1')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All Service Images',
            'service' => $data,
        ],200);
    }

    public function ServiceDetails($url){
        $data = Service::select('id','title', 'image', 'description',)->where(['slug_url' => $url,'is_active' => '1',])->first();
        $about = ServiceAbout::select('id','title', 'image', 'description',)->where(['service_id' => $data->id, 'is_active' => '1',])->get();
        $offer = Offer::select('id','title', 'image')->where(['service_id' => $data->id, 'is_active' => '1',])->orderBy('id', 'desc')->get();
        $subService = SubServices::select('id','title', 'image')->where(['is_active' => '1', 'service_id' =>$data->id])->get();
        $gallery = Gallery::select('id','title', 'image')->where(['is_active' => '1', 'service_id' =>$data->id])->orderBy('id', 'desc')->get();
        $brand = ServiceBrand::select('id','service_id')->with('brand')->orderBy('id', 'desc')->get();
        $banner = Banner::select('id','title', 'image')->where(['is_active' => '1', 'service_id' =>$data->id])->get();
        $youtube = Youtube::select('id','url')->where(['is_active' => '1', 'service_id' =>$data->id])->orderBy('id', 'desc')->get();
        return response()->json([
            'status' => true,
            'message' => 'All Service Details',
            'service' => $data,
            'about' => $about,
            'offer' => $offer,
            'subService' => $subService,
            'gallery' => $gallery,
            'brand' => $brand,
            'banner' => $banner,
            'youtube' => $youtube,
        ],200);
    }

    public function Gallery(){
        $data = Gallery::select('id','title', 'image')
            ->where('is_active', '1')->orderBy('id', 'desc')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All Service Images',
            'gallery' => $data,
        ],200);
    }
    public function indexGallery(){
        $data = Gallery::select('id','title', 'image')
            ->where(['is_active' => '1', 'is_front' => 'yes'])->orderBy('id', 'desc')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All Service Images',
            'gallery' => $data,
        ],200);
    }

    public function Testimonail(){
        $data = Testimonial::select('id','name', 'image', 'description')
            ->where('is_active', '1')->orderBy('id', 'desc')
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All Testimonial Images',
            'gallery' => $data,
        ],200);
    }


    public function metaScript($url){
        $data = MetaScript::select('id','type', 'code')
            ->where(['is_active' => '1',])
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'All Service Images',
            'script' => $data,
        ],200);
    }
    public function metaTag($url= null){
        $data = MetatagSeo::select('id','title', 'image', 'description' ,'keyword')->where(['is_active' => '1', 'url' => $url])->first();
        return response()->json(['status' => true, 'message' => 'All Service Images', 'tag' => $data,],200);
    }

//    public function bookAppointment(Request $request)
//    {
//        // Check for spam detection field
//        if ($request->input('spam_check')) {
//            return response()->json([
//                'status' => false,
//                'message' => 'Spam detected. Request rejected.',
//            ], 400);
//        }
//
//        // Validate request data
//        $validatedData = $request->validate([
//            'name' => 'required|string|max:50',
//            'mobile' => 'required|string|min:10|max:13',
//            'service' => 'required|string|max:255',
//            'email' => 'nullable|email|max:100',
//            'city' => 'nullable|string|max:50',
//            'message' => 'nullable|string|max:1000',
//        ]);
//
//        try {
//            // Create the appointment
//            $appointment = Appointment::create($validatedData);
////            Mail::to($appointment->email)->send(new ClientRegister($appointment));
////            $adminEmail = "satyalaravel2023@gmail.com";
////            Mail::to($adminEmail)->send(new AdminRegisterMsg($appointment));
//            // Return the success response
//            return response()->json([
//                'status' => true,
//                'message' => 'Hi ' . $appointment->name . ', your appointment enquiry has been submitted successfully.',
//            ], 200);
//        } catch (\Exception $e) {
//            // Handle errors, e.g., database issues
//            return response()->json([
//                'status' => false,
//                'message' => 'An error occurred while submitting your appointment. Please try again later.',
//                'error' => $e->getMessage(), // Optional: for debugging (remove in production)
//            ], 500);
//        }
//    }

    public function bookAppointment(Request $request)
    {
        if($request->input('spam_check')) {
            return response()->json([
                'status' => false,
                'message' => 'Spam detected. Request rejected.',
            ], 400);
        }
        // Validate request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:50',
            'mobile' => 'required|string|min:10|max:13',
            'service' => 'required|string|max:255',
            'email' => 'nullable|email|max:100',
            'city' => 'nullable|string|max:50',
            'message' => 'nullable|string|max:1000',
        ]);
        // Create the appointment
        $appointment = Appointment::create($validatedData);

        if ($appointment) {
            // Return the success response
            return response()->json([
                'status' => true,
                'message' => 'Hi ' . $appointment->name . ', your appointment enquiry has been submitted successfully.',
            ], 200);
        } else {
            // Return failure response if appointment creation failed
            return response()->json([
                'status' => false,
                'message' => 'An error occurred while submitting your appointment. Please try again later.',
            ], 500);
        }
    }



    public function Contact(Request $request)
    {
        if ($request->input('spam_check')) {
            return response()->json([
                'status' => false,
                'message' => 'Spam detected. Request rejected.',
            ], 400);
        }

        // Validate the form data
        $validatedData = $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'nullable|email|max:100',
            'mobile' => 'required|string|min:10|max:13',
            'service' => 'nullable|string|max:255',
            'message' => 'nullable|string|max:1000',
        ]);

        // Create the contact record in the database
        $data = Contact::create($validatedData);


        // Return the success response
        return response()->json([
            'status' => true,
            'message' => 'Hi ' . $data->name . ', your contact enquiry has been submitted successfully.',
        ], 200);
    }




}
