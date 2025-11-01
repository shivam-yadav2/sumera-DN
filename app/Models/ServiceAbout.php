<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceAbout extends Model
{
    protected $fillable = ['title', 'service_id', 'position', 'page', 'image', 'description', 'is_active'];

    /**
     * Get the service that owns the service about.
     */
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
