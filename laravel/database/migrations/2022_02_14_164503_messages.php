<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Messages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table)
        {
            $table -> id();
            $table -> string('message');
            $table -> foreignId('chat_id')->references('id')->on('chats');
            $table -> foreignId('author_id')->references('id')->on('users');
            $table -> dateTime('published')->nullable();
            $table -> timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
