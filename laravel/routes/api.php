<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use \App\Http\Controllers\TicketsController;
use \App\Http\Controllers\UsersController;
use \App\Http\Controllers\CommentsController;
use \App\Http\Controllers\StatusesController;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\NotesController;
use App\Http\Controllers\ChatsController;
use App\Http\Controllers\MessagesController;
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
Route::apiResource("chats/{cid}/messages", MessagesController::class);

Route::apiResource("users", UsersController::class);



//Route::apiResource("task", TaskController::class);

Route::apiResource("users",UsersController::class);

Route::apiResource("tickets", TicketsController::class);

Route::apiResource("tickets/{tid}/comments", CommentsController::class);

Route::apiResource("statuses",StatusesController::class);
Route::apiResource("task", TaskController::class);

Route::apiResource("users", UsersController::class);
Route::post("/register", [UsersController::class, 'store']);
Route::post("/login", [UsersController::class, 'login']);
Route::post("/infouser",[UsersController::class,'infouser'])->middleware('auth:sanctum');

Route::apiResource("task", TaskController::class);

Route::apiResource("users", UsersController::class);

Route::apiResource('task/{tid}/notes', NotesController::class);

