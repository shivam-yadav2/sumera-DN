<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'title',
        'slug_url',
        'image',
        'banner',
        'mobile_banner',
        'description',
        'is_front',
        'menu_type',
        'is_active',
    ];

    public function getYoutube()
    {
        return $this->hasMany(Youtube::class, 'service_id', 'id');
    }

    public function brands()
    {
        return $this->belongsToMany(Brand::class, 'service_brands');
    }

    public function serviceBrands()
    {
        return $this->hasMany(ServiceBrand::class, 'service_id');
    }

    public function galleries()
    {
        return $this->hasMany(Gallery::class, 'service_id', 'id')->where('is_active', 1);
    }

    public function subServices()
    {
        return $this->hasMany(SubServices::class, 'service_id', 'id')->where('is_active', 1);
    }

    public function serviceAbouts()
    {
        return $this->hasMany(ServiceAbout::class, 'service_id', 'id')->where('is_active', '1')->orderBy('position', 'asc');
    }

    public function whyChooseUs()
    {
        return $this->hasMany(ServiceWhyChooseUs::class, 'service_id', 'id')->where('is_active', '1')->orderBy('order', 'asc');
    }
}
