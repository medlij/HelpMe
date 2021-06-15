<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\TaskerController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;


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

/*Reviews Routes*/ 
Route::get('review/get/{id}', [ReviewController::class, 'get']);
Route::delete('review/delete/{id}', [ReviewController::class, 'delete']);
Route::post('review/post/', [ReviewController::class, 'post']);

/*Tasker Routes*/ 
Route::get('index/', [TaskerController::class, 'index']);
// getTaskerId
Route::get('getTaskerId/{id}', [TaskerController::class, 'getTaskerId']);
Route::get('taskerDetails/{id}', [TaskerController::class, 'taskerDetails']);
Route::get('show/{name}', [TaskerController::class, 'show']);
Route::put('put/{id}', [TaskerController::class, 'put']);

/*User Routes*/ 
Route::get('getall/', [UserController::class, 'index']);
Route::get('userDetails/{id}', [UserController::class, 'userDetails']);
Route::get('myDetails/', [UserController::class, 'myDetails']);
Route::get('list/{category}', [UserController::class, 'list']);
Route::put('update/{id}', [UserController::class, 'update']);

/*Auth Routes*/ 
Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

/*Rating*/
Route::get('review/getrating/{id}', [ReviewController::class, 'getrating']);

 
Route::middleware('auth:api')->group(function () {
    Route::resource('taskers', TaskerController::class);
});