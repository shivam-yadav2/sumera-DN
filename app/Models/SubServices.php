<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubServices extends Model
{
    //
    protected $table = 'sub_services';
    protected $fillable= [
        'service_id',
        'title',
        'slug_url',
        'image',
        'description',
        'is_active',
    ];
}
