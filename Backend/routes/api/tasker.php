<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
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

Route::post('tasker/login',[LoginController::class, 'taskerLogin'])->name('taskerLogin');
Route::group( ['prefix' => 'tasker','middleware' => ['auth:tasker-api','scopes:tasker'] ],function(){
   // authenticated staff routes here 
    Route::get('dashboard',[LoginController::class, 'taskerDashboard']);
});
