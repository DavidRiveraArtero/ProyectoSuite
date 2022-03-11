<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

<<<<<<< HEAD
class Notes extends Migration
=======
<<<<<<< HEAD:laravel/database/migrations/2022_02_21_164412_completion.php
class Completion extends Migration
=======
class Notes extends Migration
>>>>>>> b2.0_Paula:laravel/database/migrations/2022_02_18_173636_notes.php
>>>>>>> b2.0_Paula
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD:laravel/database/migrations/2022_02_18_173927_chats.php
        Schema::create('chats', function (Blueprint $table)
        {
            $table -> id();
            $table -> string('name');
            $table -> foreignId('author_id')->references('id')->on('users');
            $table -> timestamps();
=======
<<<<<<< HEAD:laravel/database/migrations/2022_02_21_164412_completion.php
        Schema::create('completion', function (Blueprint $table){
            $table->id();
            $table->string('name');
>>>>>>> c520037603a371363280ea1f751b0c1708e4642a:laravel/database/migrations/2022_02_21_164412_completion.php
=======
>>>>>>> b2.0_Paula
        Schema::create('notes', function (Blueprint $table){
            $table->id();
            $table->string('body');
            $table->foreignId('task_id')->references('id')->on('tasks');
            $table->timestamps();
<<<<<<< HEAD
=======
>>>>>>> 64c2ca4283b37d3a7aac46ffe4ca97512dd0fb92:laravel/database/migrations/2022_02_18_173636_notes.php
>>>>>>> b2.0_Paula:laravel/database/migrations/2022_02_18_173636_notes.php
>>>>>>> b2.0_Paula
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
<<<<<<< HEAD
        Schema::dropIfExists('notes');
=======
<<<<<<< HEAD:laravel/database/migrations/2022_02_21_164412_completion.php
        Schema::dropIfExists('completion');
=======
        Schema::dropIfExists('notes');
>>>>>>> b2.0_Paula:laravel/database/migrations/2022_02_18_173636_notes.php
>>>>>>> b2.0_Paula
    }
}
