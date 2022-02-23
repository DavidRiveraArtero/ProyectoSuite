<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiChatsTest extends TestCase
{
    public function test_ApiChatsList()
    {
        $response = $this->get("/api/chats");
        $response->assertStatus(200);
    }

    public function test_ApiChatsPost()
    {
        $response = $this->post("/api/chats",
            [
                'name' => "a",
                'author_id' => 2,
            ]
        );
        $response->assertStatus(200);

        $content = $response->getContent();
        $json = json_decode($content);
        return $json->id;
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @depends test_ApiChatsPost
     */

    public function test_ApiChatsGet($id)
    {
        $response = $this->get("/api/chats/{$id}");
        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @depends test_ApiChatsPost
     */

    public function test_ApiChatsUpdate($id)
    {
        $response = $this->put("/api/chats/{$id}", [
            'message' => "b",
            'chat_id' => 2,
            'author_id' => 1
        ]);

        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @depends test_ApiChatsPost

     */
    public function test_ApiChatsDelete($id)
    {
        $response = $this->delete("/api/chats/{$id}");

        $response->assertStatus(200);
    }
}
