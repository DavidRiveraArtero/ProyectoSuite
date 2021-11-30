<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>

<?php
    use My\Mail;
    use Rakit\Validation\Validator;
    
    $validator = new Validator;
    
    $exists = false;
    $avatar = $_FILES['avatar'];
    

    $validation = $validator->make($_POST + $_FILES,[
        'name' => 'required|min:6',
        'email' => 'required|email',
        'password' => 'required|min:8|regex:/\d/',
        'password2' => 'required|same:password',
        'avatar' => 'uploaded_file:0,1M,png,gif,jpeg'
    ]);

    $validation->validate();
    
    if($validation->fails())
    {
        $errors = $validation->errors();
        
        $url = My\Helpers::url("/user/register.php");
        My\Helpers::redirect($url);
        exit;
    }else
    {
        $connect = new My\Database(); 
        $stmt = $connect->prepare("select * from `2daw.equip04`.users");
        $stmt->execute();
        
        foreach ($stmt as $row)
        {
            //EXISTE EMAIL
            if($row['email']==$_POST['email']){
                $exists = true;
                break;
           }
        }

        if ($exists == true)  
        {
            My\Helpers::flash("El email ya existe");
            $url = My\Helpers::url("/user/register.php");
            My\Helpers::redirect($url);            
        }else
        {
            
            $status = 0;
            $username = $_POST['name'];
            $email = $_POST['email'];
            $avatar = $_FILES['avatar'];
            $encript = hash('sha256', $_POST['password']);
            $ultimoId = "null";
            
            if($avatar != ""){
                $sql = "insert into `2daw.equip04`.files(filepath,filesize,uploaded) VALUES ('{$avatar['name']}',{$avatar['size']},'2020-02-02 00:00:00')";
                $insert2 = $connect->prepare($sql);
                $insert2->execute(); 
                $ultimoId = $connect->lastInsertId();  
                //My\Helpers::log()->debug("Ultim ID {$ultimoId}");
            }
            $insert = $connect->prepare ("insert into `2daw.equip04`.users(username, password, email,status,role_id,avatar_id,created, last_access) VALUES ('{$username}', '{$encript}', '{$email}', {$status}, 1, {$ultimoId}  , '2020-02-02 00:00:00','2021-02-02 00:00:00');");
            $insert->execute();
            
            $bytes = random_bytes(20);
            $token = bin2hex($bytes);
            
            $ultimoId = $connect->lastInsertId();
            My\Helpers::log()->debug("Ultim ID de usuario {$ultimoId}");
            $actualDate = date("Y-m-d H:i:s");
            $userToken = "insert into `2daw.equip04`.user_tokens VALUES('{$ultimoId}','{$token}', 'A', '{$actualDate}')";
            $token = $connect->prepare($userToken);
            $token->execute();
            
            $url=My\Helpers::url("user/register.php?token={$token}");
            $link = "<a href='{$url}'>Link</a>";
            $subject = "Token User";
            $body = "<li>{$link}</li>";
            $isHtml = true;
            $to = ["2daw.equip04@fp.insjoaquimmir.cat"];
            $SendMail = new Mail($subject, $body, $isHtml);
            $SendMail->send($to);
    
    }
}



