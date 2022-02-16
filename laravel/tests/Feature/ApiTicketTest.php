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
    public function test_ApiGetTicket()
    {
        $response = $this->get('/api/tickets');
        $response->assertStatus(200);
    }

    public function test_ApiPostTicket()
    {
        $response = $this->post('/api/tickets',[
            'id'=> 2,
            'title'=>'title',
            'desc'=>'desc',
            'author_id'=>1,
            'assigned_id'=>1,
            'asset_id'=>1,
            'status_id'=>200
        ]);

        $response->assertStatus(200);
    }

    public function test_ApiPutTicket()
    {
        $response = $this->put('/api/tickets/2',[
            'title'=>'titulo'
        ]);

        $response->assertStatus(200);
    }

    public function test_ApiDeleteTicket()
    {
        $response = $this->delete('/api/tickets/2');
        $response->assertStatus(200);
    }
}
