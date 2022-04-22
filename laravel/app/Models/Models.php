<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Models extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'manufacturer',
        'model',
        'photo_id',
        'category_id',
        'price',
    ];
}
