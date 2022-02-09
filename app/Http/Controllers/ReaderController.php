<?php

namespace App\Http\Controllers;

use App\Models\Reader;
use Illuminate\Http\Request;
use App\Http\Requests\ReaderReq;
use App\Http\Resources\ReaderResource;

class ReaderController extends Controller
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
    public function store(ReaderReq $request)
    {
        Reader::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reader  $reader
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $readers = Reader::where('book_id', '=', $id)->get();
        return ReaderResource::collection($readers);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reader  $reader
     * @return \Illuminate\Http\Response
     */
    public function edit(Reader $reader)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reader  $reader
     * @return \Illuminate\Http\Response
     */
    public function update($book)
    {
        $reader = Reader::where('book_id', '=', $book)->value('total_reader');
        $new = $reader+1;
        Reader::where('book_id', '=', $book)->update([
            'total_reader' => $new
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reader  $reader
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reader $reader)
    {
        //
    }
}
