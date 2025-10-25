<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceBrand extends Model
{
    //
    protected $table = 'service_brands';
    protected $fillable= [
        'service_id',
        'brand_id',
        'is_active',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    // Define the relationship to the Brand model
    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }
}
