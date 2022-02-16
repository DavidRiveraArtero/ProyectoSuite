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

    public function test_ApiGetComment()
    {
        $response = $this->get('/api/comments');
        $response->assertStatus(200);
    }

    public function test_ApiPostComment()
    {
        $response = $this->post('/api/comments',[
            'id'=> 2,
            'ticket_id'=>2,
            'author_id'=>1,
            'msg'=>'HOLA, ¿QUÉ TAL ESTÁS?'
        ]);

        $response->assertStatus(200);
    }

    public function test_ApiPutComment()
    {
        $response = $this->put('/api/comments/2',[
            'msg'=>'MUY BIEN, ¿Y TÚ?'
        ]);

        $response->assertStatus(200);
    }

    public function test_ApiDeleteComment()
    {
        $response = $this->delete('/api/comments/2');
        $response->assertStatus(200);
    }
}
