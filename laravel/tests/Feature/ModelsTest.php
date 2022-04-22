<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ModelsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_ApiModelsList()
    {
        $response = $this->get("models.list");
        $response->assertStatus(200);
    }

    public function test_ApiModelsPost()
    {
        $response = $this->post("models.store",
            [
                'manufacturer' => "Coche",
                'model' => "C4",
                'photo_id' => 1,
                'category_id' => 1,
                'price' => 5,
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
     * @depends test_ApiModelsPost
     */

    public function test_ApiModelsGet($id)
    {
        $response = $this->get("models.{$id}");
        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @depends test_ApiModelsPost
     */

    public function test_ApiModelsUpdate($id)
    {
        $response = $this->put("/api/models/{$id}", [
            'message' => "Hola Paco",
            'chat_id' => 1,
        ]);

        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @depends test_ApiModelsPost

     */
    public function test_ApiModelsDelete($id)
    {
        $response = $this->delete("/api/models/{$id}");

        $response->assertStatus(200);
    }
}
