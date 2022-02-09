<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\User;
use App\Models\Library;
use App\Models\Chapter;
use App\Models\Reader;

class Book extends Model
{
    use HasFactory;
    protected $table = 'books';
    protected $primaryKey = 'id';
    protected $fillable = [
        'category_id',
        'user_id',
        'title',
        'description',
        'status',
        'image'
    ];

    public function categories()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function libraries()
    {
        return $this->hasMany(Library::class, 'id', 'book_id');
    }

    public function chapters()
    {
        return $this->hasMany(Chapter::class, 'id', 'book_id');
    }

    public function readers()
    {
        return $this->belongsTo(Reader::class, 'id', 'book_id');
    }
}
