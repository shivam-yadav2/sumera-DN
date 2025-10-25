<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    //
    protected $fillable = [
        'title',
        'url',
        'service_id',
        'is_front',
        'image',
        'is_active',
    ];
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id', 'id');
    }
}
