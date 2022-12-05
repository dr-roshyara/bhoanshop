<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string ('slug');
            $table->longText ('description')->nullable();
            $table->text('metaDescription')->nullable();
            $table->string('keyWords')->nullable();

            //
            $table->bigInteger('currencyId')->unsigned();
            $table->bigInteger('restaurantId')->unsigned();
            $table->bigInteger('manufacturerId')->unsigned();

          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
