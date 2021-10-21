<?php
namespace My;

class Helpers {
    /**
     * Decir hola al usuario
     * 
     * @return string
     */
    public static function sayHello($username){
        return "Hello {$username}";
    }

    public static function url(string $path, bool $ssl = false): string {
        $protocol = $ssl ? "https" : "htpp";
        return "{$protocol}://localhost/PROJECT_WEB_DIR/{$path}";
    }
}