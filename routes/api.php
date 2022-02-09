<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\LibraryController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\ReaderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::prefix('rbook')->group(function(){
//     Route::post('auth/login', [AuthController::class, 'login']);
//     Route::post('auth/register', [AuthController::class, 'createAcount']);
//     Route::post('upload', [UploadController::class, 'upload']);
//     Route::delete('delete', [UploadController::class, 'delete']);
// });

Route::prefix('auth/rbook')->group(function() {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/upload', [UploadController::class, 'upload']);
    Route::post('/upload-header', [UploadController::class, 'uploadHeader']);
    Route::post('/upload-chapter', [UploadController::class, 'uploadChapter']);
    Route::delete('/delete', [UploadController::class, 'delete']);

    Route::middleware('auth:api')->group(function () {
        Route::get('/logout', [AuthController::class, 'logout']);
        // user
        Route::prefix('/me')->group(function() {
            Route::get('/', [AuthController::class, 'me']);
            Route::patch('/{id}', [UserController::class, 'update']);
        });
        Route::prefix('/user')->group(function() {
            Route::get('/', [UserController::class, 'index']);
            Route::get('/{id}', [UserController::class, 'show']);
        });

        // profile
        Route::prefix('/profile')->group(function() {
            Route::get('/{id}', [ProfileController::class, 'show']);
            Route::post('/', [ProfileController::class, 'store']);
            Route::patch('/{id}', [ProfileController::class, 'update']);
        });

        // book
        Route::prefix('/book')->group(function () {
            Route::get('/category/{id}', [BookController::class, 'index']);
            Route::get('/{id}', [BookController::class, 'show']);
            Route::patch('/{id}', [BookController::class, 'update']);
            Route::get('/detail/{id}', [BookController::class, 'detail']);
            Route::post('/', [BookController::class, 'store']);
            Route::delete('/{id}', [BookController::class, 'destroy']);
        });

        // category
        Route::prefix('/categories')->group(function () {
            Route::get('/', [CategoryController::class, 'index']);
            Route::get('/third', [CategoryController::class, 'selectLimit']);
            Route::get('/{id}', [CategoryController::class, 'show']);
            Route::patch('/{id}', [CategoryController::class, 'update']);
            Route::patch('/subtract/{id}', [CategoryController::class, 'subtract']);
        });

        // chapter
        Route::prefix('/chapter')->group(function () {
            Route::get('/all/{id}', [ChapterController::class, 'index']);
            Route::get('/{book}/part/{part}', [ChapterController::class, 'show']);
            Route::post('/', [ChapterController::class, 'store']);
            Route::patch('/{id}', [ChapterController::class, 'update']);
            Route::delete('/{id}', [ChapterController::class, 'destroy']);
            Route::delete('/book/{id}', [ChapterController::class, 'delete']); 
        });

        // library
        Route::prefix('/library')->group(function () {
            Route::get('/{id}', [LibraryController::class, 'show']);
            Route::post('/', [LibraryController::class, 'store']);
            Route::post('/check', [LibraryController::class, 'check']);
            Route::patch('/{id}', [LibraryController::class, 'update']);
            Route::delete('/{id}', [LibraryController::class, 'destroy']);
            Route::delete('/book/{id}', [LibraryController::class, 'delete']);
        });

        // rating
        Route::prefix('/rating')->group(function () {
            Route::get('/{id}', [RatingController::class, 'show']);
            Route::patch('/{id}', [RatingController::class, 'update']);
            Route::post('/', [RatingController::class, 'store']);
        });

        // reader
        Route::prefix('/reader')->group(function () {
            Route::get('/{id}', [ReaderController::class, 'show']);
            Route::patch('/{id}', [ReaderController::class, 'update']);
            Route::post('/', [ReaderController::class, 'store']);
        });
    });
});