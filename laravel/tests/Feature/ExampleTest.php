<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_exists()
    {
        $count = DB::table('users')
            ->where('username', '=', 'admin')
            ->count();
        $this->assertEquals($count, 1);
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======


>>>>>>> a5aa1c4e4cd1582753fd310901a1b61af4991f42
>>>>>>> b2.0_Paula
}
