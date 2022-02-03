<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


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

Route::get('/', function (Request $request) {
    $message = 'Loading welcome page';
    Log::info($message);
    $request->session()->flash('info', $message);
    return view('welcome');
    //dd(env('DB_SOCKET'))
});


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

<<<<<<< HEAD
Route::get('mail/test', [MailController::class, 'test'])->name('enviarcorreo');
=======


Route::get('mail/test',MailController::class,'test')->name('enviarcorreo')->middleware(['auth']);

require __DIR__.'/auth.php';
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea
