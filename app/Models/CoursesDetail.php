<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CoursesDetail extends Model
{
    //

    protected $fillable = [
        'course_id',
        'heading',
        'course_price',
        'offer_price',
        'duration',
        'description',
        'is_active',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }
}
