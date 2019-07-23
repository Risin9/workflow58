<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('user_user', function (Blueprint $table) {
            $table->increments('int_user_id');//user ID 
            $table->string('txt_email',100)->nullable();//user email
            $table->integer('int_company_id');// company id
            $table->timestampTz('dat_create_time'); // create time
            $table->tinyInteger('is_valid');// is valid
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
