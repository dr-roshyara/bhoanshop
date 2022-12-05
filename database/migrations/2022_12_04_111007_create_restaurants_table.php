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
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('shortName')->nullable();
            $table->string('ownerGender');
            $table->string('ownerName');
            $table->string('contactPerson');
            $table->string('telephone');
            $table->string('email');
            $table->string('vatId')->nullable();
            $table->string('taxId');
            $table->string('foodType');
            $table->string('specility');
            $table->boolean('isTakeWay');
            $table->boolean('isDelevery');
            $table->boolean('isOpen');
            $table->string('opensAt');
            $table->string('closesAt');
            $table->string('opensAt1');
            $table->string('closesAt1');
            //
            $table->bigInteger('addressId')->unsigned();
            $table->bigInteger('countryId')->unsigned();
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
        Schema::dropIfExists('restaurants');
    }
};
