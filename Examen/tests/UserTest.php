<?php declare(strict_types=1);
   

    use PHPUnit\Framework\TestCase;
    use My\User;

    final class UserTest extends TestCase
    {
        public function testIsAuthenticated(): void
        {
            $logged = User::isAuthenticated();
            $this->assertFalse($logged);
        }
    }
?>