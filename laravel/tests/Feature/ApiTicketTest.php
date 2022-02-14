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
        //
    }

    public function test_ApiDeleteTicket()
    {
        //
    }
}
