<?php
namespace My;

class User{
    const COOKIE_NAME = "session_token";

    public static function getId(): int{
        return !empty($_SESSION["uid"]);
    }

    public static function getToken(): string{
        return !empty($_COOKIE[self::COOKIE_NAME]);
    }

    public static function isAuthenticated(): bool{
        return !empty(self::getToken());
    }
}
?>