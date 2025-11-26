<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceWhyChooseUs extends Model
{
    protected $table = 'service_why_choose_us';
    
    protected $fillable = [
        'service_id',
        'icon',
        'title',
        'description',
        'order',
        'is_active',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
