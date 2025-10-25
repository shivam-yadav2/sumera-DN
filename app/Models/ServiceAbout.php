<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceAbout extends Model
{

    protected $fillable = ['title', 'service_id', 'position', 'page', 'image', 'description', 'is_active'];
}
