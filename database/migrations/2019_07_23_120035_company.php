<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Company extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //create company table
        Schema::create('company', function (Blueprint $table) {
            $table->increments('int_company_id');
            $table->string('txt_company_name',500);
            $table->timestampTz('dat_create_time'); // create time
            $table->tinyInteger('is_valid');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
