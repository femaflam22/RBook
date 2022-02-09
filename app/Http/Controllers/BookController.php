<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use App\Http\Requests\BookReq;
use App\Http\Resources\BookResource;
use File;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($category)
    {
        $books = Book::where('category_id', '=', $category)->get();
        if (count($books)) {
            return response()->json([
                'message' => 'success',
                'data' => BookResource::collection($books),
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'empty',
                'data' => [],
                'status' => 200
            ], 200);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BookReq $request)
    {
        $book = Book::create($request->all());
        if($book){
            $id = Book::orderBy('id', 'desc')->limit(1)->value('id');
            return response()->json([
                'data' => $id
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show($user)
    {
        $books = Book::where('user_id', '=', $user)->get();
        if (count($books)) {
            return response()->json([
                'message' => 'success',
                'data' => BookResource::collection($books),
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'empty',
                'data' => [],
                'status' => 200
            ], 200);
        }
    }

    public function detail($id)
    {
        $book = Book::where('id', '=', $id)->get();
        return BookResource::collection($book);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(BookReq $request, $id)
    {
        Book::where('id', '=', $id)->update([
            'category_id' => $request->category_id,
            'user_id' => $request->user_id,
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'image' => $request->image
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $image = Book::where('id', '=', $id)->value('image');
        $pathOri = public_path('/assets/img/books' . '/' . $image);
        File::delete($pathOri);
        Book::where('id', '=', $id)->delete();
    }
}
