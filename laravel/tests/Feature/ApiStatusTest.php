<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiStatusTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_ApiListStatus()
    {
        $response = $this->get('/api/statuses');
        $response->assertStatus(200);
    }

    public function test_ApiPostStatus()
    {
        $response = $this->post('/api/statuses',[
            'name'=>'name',
            'status_id'=>200
        ]);

        $response->assertStatus(200);

        $content = $response->getContent();
        $json = json_decode($content);
        return $json->id;
    }

    /**
     * @return void
     * @depends test_ApiPostStatus
     */
    public function test_ApiGetStatus($id)
    {
        $response = $this->get("/api/statuses/{$id}");
        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostStatus
     */
    public function test_ApiPutStatus($id)
    {
        $response = $this->put("/api/statuses/{$id}",[
            'name'=>'nombre'
        ]);

        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostStatus
     */
    public function test_ApiDeleteStatus($id)
    {
        $response = $this->delete("/api/statuses/{$id}");
        $response->assertStatus(200);
    }
}
