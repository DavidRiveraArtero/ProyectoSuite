<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<?php
    use Rakit\Validation\Validator;

    
    $validator = new Validator();

    $validation = $validator->make($_POST, [
        'email' => 'required',
        'contra' => 'required'
    ]);

    $validation->validate();

    if($validation->fails()){
        print("HOLA");
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
            
            $stmt = $connet->prepare("select password from `2daw.equip04`.users where email = '{$_POST['email']}'");
            $stmt->execute();
            foreach($stmt as $row){
                print($row["password"]);
                if($row['password'] == $_POST["contra"]){
                    $existeContra = true;
                    break;
                }
            }
            if($existeContra==true){
                print("TODO CORRECTO");
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