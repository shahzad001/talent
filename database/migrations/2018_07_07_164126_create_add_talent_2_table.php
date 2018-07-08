<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAddTalent2Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('add_talent_2', function (Blueprint $table) {
            $table->increments('id');
            $table->string('course_degree_name');
            $table->string('college_school');
            $table->string('duration_from');
            $table->string('duration_to');
            $table->string('company_name');
            $table->string('job_title');
            $table->string('job_discriptions');
            $table->string('duration_job_from');
            $table->string('duration_job_to');
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
        //
    }
}
