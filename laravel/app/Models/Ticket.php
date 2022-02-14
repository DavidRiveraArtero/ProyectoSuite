<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    // ¿QUÉ HACER AQUÍ?
    protected $fillable = [
        'title',
        'desc',
        'asset_id'
    ];
}
