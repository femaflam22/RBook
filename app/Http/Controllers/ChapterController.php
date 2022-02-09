<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;
use App\Http\Requests\ChapterReq;
use App\Http\Resources\ChapterResource;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($book)
    {
        $chapters = Chapter::where('book_id', '=', $book)->get();
        if (count($chapters)) {
            return response()->json([
                'message' => 'success',
                'data' => ChapterResource::collection($chapters),
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
    public function store(ChapterReq $request)
    {
        $chapter = Chapter::create($request->all());
        if($chapter) {
            return response()->json([
                'book' => $request->book_id
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function show($book, $part)
    {
        $chapter = Chapter::where([ 
            ['book_id', '=', $book],
            ['chapter', '=', $part]
         ])->get();
        return ChapterResource::collection($chapter);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function edit(Chapter $chapter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function update(ChapterReq $request, $id)
    {
        $chapter = Chapter::where('id', '=', $id)->update([
            'book_id' => $request->book_id,
            'name' => $request->name,
            'content' => $request->content
        ]);
        if($chapter) {
            return response()->json([
                'book' => $request->book_id
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Chapter::where('id', '=', $id)->delete();
    }

    public function delete($book)
    {
        Chapter::where('book_id', '=', $book)->delete();
    }
}
