<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    //

    protected $fillable = [
        'title',
        'image',
        'is_active',
    ];

    public function getbrand()
    {
        return $this->hasMany(ServiceBrand::class, 'service_id', 'id');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_brands');
    }

    public function serviceBrands()
    {
        return $this->hasMany(ServiceBrand::class, 'brand_id');
    }
}
