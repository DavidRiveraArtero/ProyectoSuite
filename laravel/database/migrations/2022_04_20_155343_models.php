<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Models extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('models', function (Blueprint $table)
        {
            $table -> id();
            $table -> string('manufacturer');
            $table -> string('model');
            $table -> integer('photo_id')->nullable();
            $table -> foreignId('category_id')->references('id')->on('categories');
            $table -> decimal('price', 5,2);
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
        Schema::dropIfExists('models');
    }
}
