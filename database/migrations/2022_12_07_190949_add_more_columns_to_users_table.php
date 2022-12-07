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
        Schema::table('users', function (Blueprint $table) {
            //
            $table->boolean('is_owner')->default(0);
            $table->boolean('is_admin')->default(0);
            $table->boolean('is_waiter')->default(0);
            $table->boolean('is_cook')->default(0);
            $table->boolean('is_supplier')->default(0);
            $table->boolean('is_tester')->default(0);
            $table->boolean('is_vendor')->default(0);
            $table->boolean('is_journalist')->default(0);
            $table->boolean('is_photographer')->default(0);
            $table->boolean('is_customer')->default(1);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
