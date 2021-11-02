<?php declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use My\Helpers;
use My\Database;

final class DatabaseTest extends TestCase
{
    public function testConnection(): Database
    {
        $db = new Database();
        $this->assertIsObject($db);
        return $db;
    }

    /**
    * @depends testConnection
    */

    public function testStatements(Database $db): void
    {

        $stmt = $db->prepare('SELECT email,role_id FROM users WHERE username = ?');

        $cont = 0;
        $stmt->execute(["admin"]);

        foreach ($stmt as $row)
        {
            print_r($row);
            $cont +=1;
        }
        $this->assertEquals($cont , 1);

        $db->close();
        $stmt = $db->prepare('SELECT email,role_id FROM users WHERE username = ?');

        $cont = 0;
        $stmt->execute(["admin"]);

        $this->expectException(InvalidArgumentException::class);
        
    }
}