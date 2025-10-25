<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FeatureCelebrity extends Model
{
    //

    protected $table = 'feature_celebrity';

    protected $fillable = [
        'title',
        'image',
        'page',
        'is_front',
        'is_active',
    ];
}
