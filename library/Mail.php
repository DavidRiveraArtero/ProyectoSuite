<?php
namespace My;
use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\Exception as PHPMailerException;

class Mail{
    private $_mailer;

    /**
     * Construct mail
     * 
     * @param string $subject
     * @param string $body
     * @param bool $isHTML (optional)
     */

     public function __construct(string $subject, string $body, bool $isHTML = false)
     {
         $cnf = include(__DIR__ . "/../config/mail.php");
         // Setup SMTP server
         $this->_mailer = new PHPMailer();
         $this->_mailer->Host = $cnf['server']['host'];
         $this->_mailer->Port = $cnf['server']['port'];
         $this->_mailer->Username = $cnf['server']['username'];
         $this->_mailer->Password = $cnf['server']['password'];
         $this->_mailer->isSMTP();
         $this->_mailer->Mailer = 'smtp'; 
         $this->_mailer->SMTPSecure = $cnf['server']['security'];
         $this->_mailer->SMTPAuth = TRUE;
         $this->_mailer->SMTPDebug = $cnf['server']['debug'];

         // Configure mail contact: from and reply
         $this->_mailer->SetFrom($cnf["from"]["mail"],$cnf["from"]["name"]);
         $this->_mailer->AddReplyTo($cnf["reply"]["mail"],$cnf["reply"]["name"]);

         // Set subject and body (HTML or not)
         $this->_mailer->isHTML(true);
         $this->_mailer->Subject = "Subject";
         $this->_mailer->Body = "Hola, esto es un body HTML :)";
         $this->_mailer->AltBody = "Hola esto es un body no HTML :(";
     }

   /**
    * Send mail to recipients
    *
    * @param array $to
    * @param array $cc (optional)
    * @param array $bcc (optional)
    * @return bool
    */


      public function send(array $to, array $cc = [], array $bcc = []): bool
     {
        foreach($to as $nombre=>$email){
            $this->_mailer->addAddress($email,$nombre);
        }
         
         foreach($cc as $nombre=>$email){
            $this->_mailer->addCC($email,$nombre);
         }
         
         foreach($bcc as $nombre=>$email){
            $this->_mailer->addBCC($email, $nombre);
         }
        

         $bien = $this->_mailer->send();

         $this->_mailer->clearAllRecipients();

         return $bien;
     }
}