<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiCommentTest extends TestCase
{
    const TICKET_ID = 5;

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_ApiListComment()
    {
        $tid = self::TICKET_ID;
        $response = $this->get("/api/tickets/{$tid}/comments");
        $response->assertStatus(200);
    }

    public function test_ApiPostComment()
    {
        $tid = self::TICKET_ID;
        $response = $this->post("/api/tickets/{$tid}/comments",[
            'author_id'=>1,
            'msg'=>'HOLA, ¿QUÉ TAL ESTÁS?'
        ]);

        $response->assertStatus(201);

        $content = $response->getContent();
        $json = json_decode($content);
        return $json->id;
    }


    /**
     * @return void
     * @depends test_ApiPostComment
     */
    public function test_ApiGetComment($id)
    {
        $tid = self::TICKET_ID;
        $response = $this->get("/api/tickets/{$tid}/comments/{$id}");
        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostComment
     */
    public function test_ApiPutComment($id)
    {
        $tid = self::TICKET_ID;
        $response = $this->put("/api/tickets/{$tid}/comments/{$id}",[
            'msg'=>'MUY BIEN, ¿Y TÚ2?'
        ]);

        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostComment
     */
    public function test_ApiDeleteComment( $id)
    {
        $tid = self::TICKET_ID;
        $response = $this->delete("/api/tickets/{$tid}/comments/{$id}");
        $response->assertStatus(200);
    }
}
