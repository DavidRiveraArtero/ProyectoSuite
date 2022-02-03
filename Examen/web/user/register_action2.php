<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<?php

    $connect = new My\Database();
    $token = $_GET["token"];

    $select = $connect->prepare("select token from `2daw.equip04`.user_tokens where token='$token'");
    $select->execute();
    
    $id = $_GET["id"];
    

    if($row = $select->fetch()){
        print("Existe");
        $update = $connect->prepare("update `2daw.equip04`.users set status=1 where id='$id'");
        $update->execute();
        My\Helpers::flash("Tot OK");
        $url = My\Helpers::url("/SuiteAplication.php");
        My\Helpers::redirect($url);
    }else{
        My\Helpers::flash("ERROR");
        $url = My\Helpers::url("/SuiteAplication.php");
        My\Helpers::redirect($url);
    }
?>