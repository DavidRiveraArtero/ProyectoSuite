<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
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

=======
use App\Mail\TestsMail;
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
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
}
