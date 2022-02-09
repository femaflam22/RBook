<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\ProfileResource;
use App\Http\Requests\ProfileReq;
use PHPUnit\Framework\MockObject\ReturnValueNotConfiguredException;

class ProfileController extends Controller
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
    public function store(ProfileReq $request)
    {
        $userId = User::orderBy('id', 'desc')->limit(1)->value('id');
        Profile::create([
            'user_id' => $userId,
            'image' => $request->image,
            'header' => $request->header
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function show($user)
    {
        $profile = Profile::where('user_id', '=', $user)->get();
        return ProfileResource::collection($profile);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function edit(Profile $profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function update(ProfileReq $request, $id)
    {
        Profile::where('id', '=', $id)->update([
            'user_id' => $request->user_id,
            'image' => $request->image,
            'header' => $request->header
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
