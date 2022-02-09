<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Book;

class Library extends Model
{
    use HasFactory;
    protected $table = 'libraries';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'book_id',
        'last_chapter'
    ];

    public function books()
    {
        return $this->belongsTo(Book::class, 'book_id', 'id');
    }
}
