<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    //

    protected $fillable = [
        'name',
        'mobile',
        'email',
        'city',
        'message',
        'service',
        'is_active',
    ];
}
