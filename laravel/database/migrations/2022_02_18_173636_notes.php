<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Notes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
<<<<<<< HEAD:laravel/database/migrations/2022_02_18_173927_chats.php
        Schema::create('chats', function (Blueprint $table)
        {
            $table -> id();
            $table -> string('name');
            $table -> foreignId('author_id')->references('id')->on('users');
            $table -> timestamps();
=======
        Schema::create('notes', function (Blueprint $table){
            $table->id();
            $table->string('body');
            $table->foreignId('task_id')->references('id')->on('tasks');
            $table->timestamps();
>>>>>>> 64c2ca4283b37d3a7aac46ffe4ca97512dd0fb92:laravel/database/migrations/2022_02_18_173636_notes.php
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notes');
    }
}
