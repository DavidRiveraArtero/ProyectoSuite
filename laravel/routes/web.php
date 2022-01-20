<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    Log::info('Loading welcome page');
    return view('welcome');
    //dd(env('DB_SOCKET'))
});

Route::get('sendemail','SendEmailController@index')->name('sendemail');

Route::get('mail/test',[MailController::class, 'test'])->name('enviar');