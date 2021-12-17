<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<?php
    use Rakit\Validation\Validator;

    $idUser = 0;
    $validator = new Validator();

    $validation = $validator->make($_POST, [
        'email' => 'required',
        'contra' => 'required'
    ]);

    $validation->validate();

    if($validation->fails()){
        My\Helpers::flash("CAMPO INCORRECTO");
        $url = My\Helpers::url("user/login.php");
        My\Helpers::redirect($url);  
    }else{
        $connet = new My\Database();
        $stmt = $connet->prepare("select email from `2daw.equip04`.users");
        $stmt->execute();
        $existeEmail = false;
        $existeContra = false;
        foreach($stmt as $row){
            if($row['email'] == $_POST["email"]){
                $existeEmail = true;
                break;
            }
        }
        if ($existeEmail == true){
            
            $stmt = $connet->prepare("select * from `2daw.equip04`.users where email = '{$_POST['email']}'");
            $stmt->execute();
            $password = hash("sha256", $_POST["contra"]);
            foreach($stmt as $row){
                if($row['password'] == $password ){
                    $existeContra = true;
                    $idUser = $row["id"];
                    break;
                }
            }
            if($existeContra==true){
                session_start();
                setcookie("session_token", "",time() + 30000);
                
                $bytes = random_bytes(20);
                $token = bin2hex($bytes);
                
                $_SESSION["uid"] = $idUser;
                $actualDate = date("Y-m-d H:i:s");
                //INSERT
                $userToken = "insert into user_tokens VALUES({$idUser},'{$token}', 'S', '{$actualDate}')";
                My\Helpers::log()->debug($userToken);

                $insert = $connet->prepare($userToken);
                $insert->execute();
                //ULTIMA SESION
                $lastAccess = "update users set last_access = '{$actualDate}' where id = {$idUser}";
                My\Helpers::log()->debug($lastAccess);

                $update = $connet->prepare($lastAccess);
                $update->execute();

                My\Helpers::flash("Todo correcto");
                $url = My\Helpers::url("SuiteAplication.php");
                My\Helpers::redirect($url);  
            
            
                
            }else{
                My\Helpers::flash("CONTRASEÑA INCORRECTA");
                $url = My\Helpers::url("user/login.php");
                My\Helpers::redirect($url);  
            }
        
        }else{
            My\Helpers::flash("El email no existe");
            $url = My\Helpers::url("user/login.php");
            My\Helpers::redirect($url);                  
        }
    }
?>