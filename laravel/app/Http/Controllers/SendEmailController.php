<?php

namespace App\Http\Controllers;

use App\Http\TestMail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class SendEmailController extends Controller
{
    public function ship(Requesr $request)
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

}
