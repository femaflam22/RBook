<?php

namespace App\Http\Controllers;

use App\Models\Library;
use Illuminate\Http\Request;
use App\Http\Requests\LibraryReq;
use App\Http\Resources\LibraryResource;

class LibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(LibraryReq $request)
    {
        Library::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function show($user)
    {
        $books = Library::where('user_id', '=', $user)->get();
        if(count($books)) {
            return response()->json([
                'message' => 'success',
                'data' => LibraryResource::collection($books),
                'status' => 200
            ], 200);
        }else {
            return response()->json([
                'message' => 'empty',
                'data' => [],
                'status' => 200
            ], 200);
        }
    }

    public function check(Request $request)
    {
        $book = Library::where([
            ['user_id', '=', $request->user_id],
            ['book_id', '=', $request->book_id]
        ])->get();
        if(count($book)) {
            return response()->json([
                'message' => 'available',
                'status' => 200
            ], 200);
        }else {
            return response()->json([
                'message' => 'empty',
                'status' => 200
            ], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function edit(Library $library)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function update(LibraryReq $request, $id)
    {
        Library::where('id', '=', $id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Library  $library
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Library::where('id', '=', $id)->delete();
    }

    public function delete($book)
    {
        Library::where('book_id', '=', $book)->delete();
    }
}
