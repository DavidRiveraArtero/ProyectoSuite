<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use \App\Http\Controllers\TicketsController;
use \App\Http\Controllers\UsersController;
use \App\Http\Controllers\CommentsController;
use \App\Http\Controllers\StatusesController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function (){
    return "Hola Mundi";
});

//Route::apiResource("task", TaskController::class);

Route::apiResource("users",UsersController::class);

Route::apiResource("tickets", TicketsController::class);

Route::apiResource("tickets/{tid}/comments", CommentsController::class);

Route::apiResource("statuses",StatusesController::class);
