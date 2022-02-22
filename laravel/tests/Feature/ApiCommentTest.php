<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiCommentTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_ApiListComment()
    {
        $response = $this->get('/api/tickets/5/comments');
        $response->assertStatus(200);
    }

    public function test_ApiPostComment()
    {
        $response = $this->post('/api/tickets/5/comments',[
            'ticket_id'=>2,
            'author_id'=>1,
            'msg'=>'HOLA, ¿QUÉ TAL ESTÁS?'
        ]);

        $response->assertStatus(200);

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
        $response = $this->get("/api/tickets/5/comments/{$id}");
        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostComment
     */
    public function test_ApiPutComment($id)
    {
        $response = $this->put("/api/tickets/5/comments/{$id}",[
            'msg'=>'MUY BIEN, ¿Y TÚ?'
        ]);

        $response->assertStatus(200);
    }

    /**
     * @return void
     * @depends test_ApiPostComment
     */
    public function test_ApiDeleteComment($id = 1)
    {
        $response = $this->delete("/api/tickets/5/comments/{$id}");
        $response->assertStatus(200);
    }
}
