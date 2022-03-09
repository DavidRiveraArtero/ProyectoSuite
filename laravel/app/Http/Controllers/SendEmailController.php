<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Mail\TestsMail;
=======
use App\Http\TestMail;
>>>>>>> a5aa1c4e4cd1582753fd310901a1b61af4991f42
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SendEmailController extends Controller
{
    public function ship(Request $request)
    {
        $valueArray =[
            'name' => 'Jhon',
        ];
        try {
            \Mail::to('2daw.Equip04@fp.insjoaquimmir.cat')->send(new TestMail($valueArray));
            echo 'Mail send successfully';
        }catch(\Exception $e){
            echo 'Error -'.$e;
        }
    }
<<<<<<< HEAD

=======
>>>>>>> a5aa1c4e4cd1582753fd310901a1b61af4991f42
}
