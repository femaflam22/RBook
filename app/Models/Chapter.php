<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Book;

class Chapter extends Model
{
    use HasFactory;
    protected $table = 'chapters';
    protected $primaryKey = 'id';
    protected $fillable = [
        'book_id',
        'chapter',
        'name',
        'content'
    ];

    public function books()
    {
        return $this->belongsTo(Book::class, 'book_id', 'id');
    }
}
