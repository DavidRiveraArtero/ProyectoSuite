<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiNotesTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_ApiListNotes()
    {
        $response = $this->get('/api/task/2/notes');

        $response->assertStatus(200);
    }

    public function test_ApiPostNotes(){
        $response = $this->post('/api/task/2/notes',
            [
                'body'=>'Hola mundo',
                'task_id'=>2
            ]);

        $response->assertStatus(200);

        $content = $response->getContent();
        $json = json_decode($content);
        return $json->id;
    }
    /**
     * @return void
     * @depends test_ApiPostNotes
     */

    public function test_ApiGetNotes($id)
    {
        $tid = 2;
        $response = $this->get("/api/task/{$tid}/notes/{$id}");

        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostNotes
     */
    public function test_ApiUpdateNotes($id)
    {
        $response = $this->put("/api/task/2/notes/{$id}",
            [
                'body'=>'Hola mundo 2',
                'task_id'=>2
            ]);

        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostNotes
     */
    public function test_ApiDeleteNotes($id)
    {
        $tid = 2;
        $response = $this->delete("/api/task/{$tid}/notes/{$id}");


        $response->assertStatus(200);
    }
}
