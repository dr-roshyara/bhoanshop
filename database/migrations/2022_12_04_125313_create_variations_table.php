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
        Schema::create('variations', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string ('slug');
            $table->boolean('isMain');
            $table->boolean('isActive')->default(1);
            $table->unsignedFloat('packingUnits');
            $table->string('externalId')->nullable();
            $table->longText('description')->nullable();
            $table->float ('priceLunch');
            $table->float ('priceDinner');
            $table->float ('price1')->nullable();
            $table->float ('price2')->nullable();
            $table->float ('price3')->nullable();
            $table->float('discountLunch')->nullable();
            $table->float ('discounDinner')->nullable();
            $table->float ('discount')->nullable();
            //
            $table->bigInteger('productId')->unsigned();
            $table->bigInteger('manufacturerId')->unsigned();
            $table->softDeletes();
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
        Schema::dropIfExists('variations');
    }
};
