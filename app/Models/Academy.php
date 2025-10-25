<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Academy extends Model
{
    //
    protected $table = 'academies';

    protected $fillable = [
        'title',
        'position',
        'page',
        'image',
        'description',
        'is_active',
    ];
}
