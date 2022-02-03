<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\TestMail;

class MailController extends Controller
{
    public function test(Request $request)
    {
<<<<<<< HEAD
        try {
            $mail = new TestMail([
                'name' => 'Anonymous',
                'body' => 'Testing mail',
                'url'  => '/'
            ]);
            \Mail::to('example@example.com')->send($mail);
            echo '<h1>Mail send successfully</h1>';
        } catch (\Exception $e) {
            echo '<pre>Error - ' . $e .'</pre>';
        }
    }
 
=======
        try
        {
            $mail = new TestMail([
                'name' => 'Anonymous',
                'body' => 'Testing mail',
                'url' => '/'
            ]);
            \Mail::to('example@example.com')->send($mail);
            echo '<h1>Mail send successfully</h1>';
        }catch(\Expection $e)
        {
            echo '<pre>Error - ' .$e . '</pre>';
        }
    }
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
}
