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
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->boolean("isActive");
            $table->string("isoCode2");
            $table->string("isoCode3");
            $table->string('lang');
            $table->string('vatCode');
            $table->string('telCode');
            $table->timestamps();
            //
            $table->string('currencyId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries');
    }
};
