<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Talent extends Model
{
    protected $table = 'add_talent_1';

    protected $fillable = ['first_name','middle_name','last_name','email_address','profile_summary'];
}
