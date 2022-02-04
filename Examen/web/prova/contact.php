<?php require_once __DIR__ . "/../../vendor/autoload.php";
use My\User;

?>



<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Contact us"]) ?>
<body>
    <?= My\Helpers::render("/_commons/header.php") ?>
    <h2>Contacte</h2>
    <p>Omple les dades i et contactarem:</p>
    <?php $flash = My\Helpers::flash(); ?>
                <?php if(!empty($flash)): ?>

                <div class='flash'>
                    <ul>
                        <?php foreach($flash as $msg): ?>
                        <li class="flash__message"><?= $msg ?></li><br>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endif; ?>
    <form name="contact" method="POST" action="contact_action.php">
        <p>
            <label>Assumpte</label><br>
            <input type="text" name="subject" required>
        </p>
        <p>
            <label>Cos</label><br>
            <textarea name="body" required></textarea>
        </p>
        <!--PARA SABER SI FUNCIONA LO USE CON EL CAMPO EMAIL DE LA COOKIE-->
        <?php
            if (User::isAuthenticated()) {
                echo '';
            }else{
                echo '<label>Nom</label><br>';
                echo ' <input type="text" name="username">';
            }
        ?>
        
        <p>
            <label>Correu electrònic</label><br>
            <input type="email" name="email" value="" required> <!--getcookie("email"); ESTO DA ERROR -->
        </p>
        <p>
            <label>Adjunt</label><br>
            <input type="file" name="attachment">
        </p>
        <p>
            <button>Send message</button>
            <button type="reset">Reset form</button>
        </p>
    </form>
    <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>