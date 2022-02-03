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
<<<<<<< HEAD
    public function __construct()
    {
        //
=======
    public function __construct(array $content)
    {
        $this->content = $content;
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
<<<<<<< HEAD
        return $this->markdown('mails.testmail');
    }
=======
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
 
>>>>>>> b1.1_Paula
=======
        return $this->markdown('mails.testmail')
            ->with('content', $this->content);
    }
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
}
