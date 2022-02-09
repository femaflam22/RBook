<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Book;

class Reader extends Model
{
    use HasFactory;
    protected $table = 'readers';
    protected $primaryKey = 'id';
    protected $fillable = [
        'book_id',
        'total_reader'
    ];

    public function books()
    {
        return $this->HasOne(Book::class, 'id', 'book_id');
    }
}
