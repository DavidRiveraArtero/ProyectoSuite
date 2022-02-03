<?php require_once __DIR__ . "/../../vendor/autoload.php"; 
$con = new My\Database();
$stmt = $con->prepare("select * from `demo`.roles");
$stmt->execute();
$row = $stmt->fetch();

?>

<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Roles"]) ?>
<body>
    <?= My\Helpers::render("/_commons/header.php") ?>
    <h2>Llistat actual de rols</h2>
    <table>
        <thead>
            <tr>
                <td>id</td>
                <td>name</td>
            </tr>            
        </thead>
        <tbody>
                <?php
                    //BUCLE PARA PRINTAR TANTOS LOS ID COMO LOS NAME
                    foreach($stmt as $roles){
                        echo '<tr>';
                            echo '<td>'.$roles['id'].'</td>';
                            echo '<td>'.$roles['name'].'</td>';
                        echo '</tr>';
                    }
                ?>
        </tbody>
    </table>
    <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>
