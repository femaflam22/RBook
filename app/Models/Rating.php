<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table = 'ratings';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'rating',
        'description',
        'image'
    ];
}
