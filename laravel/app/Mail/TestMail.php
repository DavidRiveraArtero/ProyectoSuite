<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TestMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

<<<<<<< HEAD
=======
    
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea
    public function __construct(array $content)
    {
        $this->content = $content;
    }
  
    public function build()
    {
        // pass here your email template file
        return $this->markdown('mails.testmail')
            ->with('content', $this->content);
    }
<<<<<<< HEAD
=======
     
>>>>>>> 0e9ee58fd8f7bae660b971352ce410a455256fea
}
