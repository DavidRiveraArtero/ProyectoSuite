<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Mail\TestsMail;
=======
<<<<<<< HEAD
use App\Mail\TestsMail;
=======
use App\Http\TestMail;
>>>>>>> a5aa1c4e4cd1582753fd310901a1b61af4991f42
>>>>>>> b2.0_Paula
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SendEmailController extends Controller
{
    public function ship(Request $request)
    {

        $valueArray = [
            'name' => 'John',
        ];

        try{
            \Mail::to('2daw.equip04@fp.insjoaquimmir.cat')->send(new TestMailo($valueArray));
            echo 'Mail send successfully';
        }
        catch (\Exception $e){
            echo 'Error -' .$e;
        }

    }
<<<<<<< HEAD
}
=======
<<<<<<< HEAD

=======
>>>>>>> a5aa1c4e4cd1582753fd310901a1b61af4991f42
}
>>>>>>> b2.0_Paula
