<?php declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use My\Helpers;

final class HelpersTest extends TestCase {
    public function testExpectedText():void
    {
        $txt = Helpers::sayHello("David");
        $this ->assertEquals("Hello David", $txt);
    }

    public function testUrl():void
    {   
        $ok = "web/user/login.php";
        $http = Helpers::url($ok);
        $https = Helpers::url($ok,true);
        $this->assertStringStartsWith('http',$http); 
        $this->assertStringStartsWith('https',$https);
        $this->assertStringEndsWith('web/user/login.php',$http);
        $this->assertStringEndsWith('web/user/login.php',$https);
    }

    public function testRender():void{
        $path = "/_commons/head.php";
        $array = ["subtitle" => "Sign in"];
        $prue = Helpers::render($path,$array);
        //$this->assertEquals('hola',$prue);
    }
}