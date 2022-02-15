<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiTaskTest extends TestCase
{


    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_ApiGetTask()
    {
        $response = $this->get('/api/task');

        $response->assertStatus(200);
    }

    public function test_ApiPostTask(){
        $response = $this->post('/api/task',
            [   'id'=> 202,
                'name'=>'Pepe',
                'description'=>'si',
                'status'=>'si'
            ]);

        $response->assertStatus(200);
    }

    public function test_ApiUpdateTask(){
        $response = $this->put('/api/task/202',
            [
                'name'=>'Dase',
                'description'=>'pepe',
                'status'=>'no'
            ]);

        $response->assertStatus(200);
    }


    public function test_ApiDeleteTask(){
        $response = $this->delete('/api/task/202');

        $response->assertStatus(200);
    }

}
