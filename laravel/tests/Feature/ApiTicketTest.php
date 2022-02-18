<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiTicketTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_ApiListTicket()
    {
        $response = $this->get('/api/tickets');
        $response->assertStatus(200);
    }

    public function test_ApiPostTicket()
    {
        $response = $this->post('/api/tickets',[
            'title'=>'title',
            'desc'=>'desc',
            'author_id'=>1,
            'assigned_id'=>1,
            'asset_id'=>1,
            'status_id'=>200
        ]);

        $response->assertStatus(200);

        $content = $response->getContent();
        $json = json_decode($content);
        return $json->id;
    }

    /**
     * @return void
     * @depends test_ApiPostTicket
     */
    public function test_ApiGetTicket($id)
    {
        $response = $this->get("/api/tickets/{$id}");
        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostTicket
     */
    public function test_ApiPutTicket($id)
    {
        $response = $this->put("/api/tickets/{$id}",[
            'title'=>'titulo'
        ]);

        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostTicket
     */
    public function test_ApiDeleteTicket($id)
    {
        $response = $this->delete("/api/tickets/{$id}");
        $response->assertStatus(200);
    }
}
