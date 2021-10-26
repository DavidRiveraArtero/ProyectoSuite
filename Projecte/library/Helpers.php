<?php
namespace My;

class Helpers {
    /**
     * Decir hola al usuario
     * 
     * @return string
     */
    public static function sayHello($username)
    {
        return "Hello {$username}";
    }

    public static function url(string $path, bool $ssl = false): string 
    {
        $protocol = $ssl ? "https" : "http";
        return "{$protocol}://localhost/tarda/Projecte/{$path}";
    }

    public static function render(string $path, array $__params = []):string
    {
        ob_start();
        $root = __DIR__ . "/../web";
        include("{$root}/{$path}");
        $content = ob_get_contents();
        ob_end_clean();
        return $content;
    }
}