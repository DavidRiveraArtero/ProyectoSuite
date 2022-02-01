<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
<<<<<<< HEAD
=======
use Illuminate\Support\Facades\DB;
>>>>>>> b1.1_Paula
=======
use Illuminate\Support\Facades\DB;
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa

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
=======
    public function test_example()
    {
        $count = DB::table('users')
            ->where('username','=', 'admin')->count();
        $this->assertEquals($count,1);
>>>>>>> 5f5e2e22b5adaa2f0d0849aa77ccf7779c78c1aa
    }
}
