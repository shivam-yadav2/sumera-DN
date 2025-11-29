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

    private function sanitizeText(?string $value): ?string
    {
        if ($value === null) {
            return null;
        }

        $clean = iconv('UTF-8', 'UTF-8//IGNORE', $value);
        return $clean === false ? $value : $clean;
    }

    public function getTitleAttribute($value)
    {
        return $this->sanitizeText($value);
    }

    public function getDescriptionAttribute($value)
    {
        return $this->sanitizeText($value);
    }
}
