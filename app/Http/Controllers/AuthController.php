<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Register;
use App\Http\Requests\Login;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Hash;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Register $request)
    {
        $create = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        if($create) {
            return response()->json([
                'message' => 'success created new account!',
                'status' => 201
            ], 201);
        }else {
            return response()->json([
                'message' => 'failed to created new account! try again!',
                'status' => 500
            ], 500);
        }
    }
    
    public function login(Login $request)
    {
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'message' => 'Invalid email or password',
                'status' => 401
            ], 401);
        }

        $user = auth()->user();
        $tokenData = $user->createToken('Personal Access Token', ['modified_data_in_account']);
        $token = $tokenData->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        if ($token->save()) {
            return response()->json([
                'message' => 'loged-in',
                'status' => 200,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $token->scopes[0],
                'expires_at' => Carbon::parse($token->expires_at)->toDateTimeString(),
                'user' => auth()->user()->toArray()
            ], 200);
        }else {
            return response()->json([
                'message' => 'failed to login, please check and try again!',
                'status' => 500
            ], 500);
        }
    }

    public function logout()
    {
        // kalau delete, data di db nya bakal dihps, kalo revoke cmn diganti jd true revoked-nya
        $logout = auth()->user()->token()->revoke();
        if($logout) {
            return response()->json([
                'message' => 'User logout',
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Failed to logout',
                'status' => 500
            ], 500);
        }
    }

    public function me()
    {
        return response()->json([
            'user' => auth()->user()->toArray(),
            'status' => 200
        ], 200);
    }
}
