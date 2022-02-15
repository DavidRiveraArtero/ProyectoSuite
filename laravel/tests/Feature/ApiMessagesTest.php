<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiMessagesTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_AgiMessagesGet()
    {
        $response = $this->get('/api/messages');

        $response->assertStatus(200);
    }

    public function test_AgiMessagesPost()
    {
        $response = $this->post('/api/messages',
            [
                'author_id' => "10",
                'message' => "hola",
                'privpub' => "true",
                'desti' => "2",
            ]
        );
        $response->assertStatus(200);
    }

    public function test_AgiMessagesUpdate()
    {
        $response = $this->put('/api/messages');

        $response->assertStatus(200);
    }

    public function test_AgiMessagesDelete()
    {
        $response = $this->delete('/api/messages');

        $response->assertStatus(200);
    }

}
