<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    //

    protected $fillable = [
        'title',
        'image',
        'duration',
        'fees',
        'description',
        'is_active',
    ];

    public function details()
    {
        return $this->hasMany(CoursesDetail::class, 'course_id', 'id')->where('is_active', 1);
    }
}
