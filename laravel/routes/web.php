<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
<<<<<<< HEAD
use Illuminate\Http\Request;

=======
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa

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

<<<<<<< HEAD
Route::get('/', function (Request $request) {
    $message = 'Loading welcome page';
    Log::info($message);
    $request->session()->flash('info', $message);
=======
Route::get('/', function () {
    Log::info('Loading welcome page');
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
    return view('welcome');
    //dd(env('DB_SOCKET'))
});
<<<<<<< HEAD
 


Route::get('sendemail','SenEmailController@index')->name('sendemail');

Route::get('mail/test', [MailController::class, 'test'])->name('enviarcorreo');
=======

Route::get('sendemail','SendEmailController@index')->name('sendemail');

Route::get('mail/test',[MailController::class, 'test'])->name('enviar');
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
