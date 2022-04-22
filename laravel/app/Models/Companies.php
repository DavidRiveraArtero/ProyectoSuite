<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Companies extends Model
{
    use HasFactory;

    protected $table = 'companies';

    protected $connection = 'mysql';

    protected $fillable = [
        'name',
        'phone',
        'email',
        'logo_id',
    ];
}
