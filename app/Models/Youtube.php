<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Youtube extends Model
{
    //

    protected $fillable = [
        'url',
        'service_id',
        'is_front',
        'is_active',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id', 'id');
    }
}
