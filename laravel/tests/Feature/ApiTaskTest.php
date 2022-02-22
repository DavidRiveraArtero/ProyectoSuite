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
    public function test_ApiListTask()
    {
        $response = $this->get('/api/task');

        $response->assertStatus(200);
    }



    public function test_ApiPostTask(){
        $response = $this->post('/api/task',
            [
                'title'=>'Pepe',
                'ticket_id'=>1,
                'completion_id'=>1,
                'author_id'=>1
            ]);

        $response->assertStatus(200);

        $content = $response->getContent();
        $json = json_decode($content);
        return $json->id;
    }

    /**
     * @return void
     * @depends test_ApiPostTask
     */

    /**
     * @return void
     * @depends test_ApiPostTask
     */
    public function test_ApiUpdateTask($id){
        $response = $this->put("/api/task/{$id}",
            [
                'title'=>'Dase',
                'titcket_id'=>1,
                'completion_id'=>1,
                'author_id'=>1
            ]);

        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostTask
     */
    public function test_ApiDeleteTask($id){
        $response = $this->delete("/api/task/{$id}");

        $response->assertStatus(200);
    }

}
