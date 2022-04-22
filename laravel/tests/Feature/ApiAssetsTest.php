<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiAssetsTest extends TestCase
{

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function test_ApiAssetsList()
    {
        $response = $this->get("/api/models/1/assets");
        $response->assertStatus(200);
    }

    public function test_ApiAssetsPost()
    {
        $response = $this->post('/api/models/1/assets',
            [
                'message' => "Adios",
                'chat_id' => 4,
                'author_id' => 1
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
     * @depends  test_ApiMessagesPost
     */

    public function test_ApiAssetsGet($id)
    {
        $response = $this->get("/api/models/1/assets/{$id}");
        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @depends  test_ApiMessagesPost
     */

    public function test_ApiAssetsUpdate($id)
    {
        $response = $this->put("/api/models/1/assets/{$id}", [
            'model_id' => 2,
            'location_id' => 3,
        ]);

        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @depends  test_ApiMessagesPost
     */
    public function test_ApiAssetsDelete($id)
    {
        $response = $this->delete("/api/models/1/assets/{$id}");
        $response->assertStatus(200);
    }

}
