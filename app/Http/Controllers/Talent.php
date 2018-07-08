<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Talent extends Controller
{
    public function viewTalent()
    {
        return view('add_talent');
    }

    public function viewTalentHistory()
    {
        return view('talent_second');
    }
}
