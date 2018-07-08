<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SecondTalent extends Model
{
    protected $table = 'add_talent_2';

    protected $fillable = ['course_degree_name','college_school','duration','company_name','job_title','job_discriptions','duration_second'];
}
