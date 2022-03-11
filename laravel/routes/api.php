<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\NotesController;
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
Route::apiResource("chats", ChatsController::class);
Route::apiResource("chats/{id}/messages", MessagesController::class);

Route::apiResource("users", UsersController::class);


Route::apiResource("task", TaskController::class);

Route::apiResource("users", UsersController::class);
Route::post("/register", [UsersController::class, 'store']);
Route::post("/login", [UsersController::class, 'login']);
Route::post("/infouser",[UsersController::class,'infouser'])->middleware('auth:sanctum');

Route::apiResource('task/{tid}/notes', NotesController::class);

