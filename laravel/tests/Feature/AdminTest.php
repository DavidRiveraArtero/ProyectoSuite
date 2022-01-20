<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
<<<<<<< HEAD
=======
use Illuminate\Support\Facades\DB;
>>>>>>> b1.1_Paula

class AdminTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
<<<<<<< HEAD
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
=======
    public function test_exists()
    {
        $count = DB::table('users')
            ->where('username', '=', 'admin')
            ->count();
        $this->assertEquals($count, 1);
>>>>>>> b1.1_Paula
    }
}
