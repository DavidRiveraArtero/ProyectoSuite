<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Completion extends Migration
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
        Schema::create('completion', function (Blueprint $table){
            $table->id();
            $table->string('name');
>>>>>>> c520037603a371363280ea1f751b0c1708e4642a:laravel/database/migrations/2022_02_21_164412_completion.php
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('completion');
    }
}
