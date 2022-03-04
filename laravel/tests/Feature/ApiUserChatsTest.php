<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiUserChatsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_ApiUSerChatsList()
    {
        $response = $this->get('/api/chats');

        $response->assertStatus(200);
    }

    public function test_ApiUSerChatsPost()
    {
        $response = $this->post('/api/chats',
            [
                'message' => "a",
                'chat_id' => 2,
                'author_id' => 1
            ]
        );
        $response->assertStatus(200);

        $content = $response->getContent();
        $json = json_decode($content);
        return $json->id;

    }
}
