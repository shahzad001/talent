<?php

namespace App\Http\Controllers;


use App\SecondTalent;
use App\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;

class AddTalent extends Controller
{
    public function addTalent(Request $request)
    {
        $rules = array(
            'first_name'       => 'required',
            'middle_name'      => 'required',
            'last_name'        => 'required',
            'email_address'    => 'required',
            'profile_summary'  => 'required',
        );
        $validator = \Illuminate\Support\Facades\Validator::make(Input::all(), $rules);


        if ($validator->fails()) {
            return Reddirect::to('add-talent-1')
                ->withErrors($validator);

        } else {
            // store
            $talent = new Talent();
            $talent->first_name       = Input::get('first_name');
            $talent->middle_name      = Input::get('middle_name');
            $talent->last_name        = Input::get('last_name');
            $talent->email_address    = Input::get('email_address');
            $talent->profile_summary  = Input::get('profile_summary');
            $talent->save();
//            return Response::json($talent, 200);


        }
    }

    public function add_second_talent()
    {
        $rules = array(
            'course_degree_name'    => 'required',
            'college_school'        => 'required',
            'duration_from'         => 'required',
            'duration_to'           => 'required',
            'company_name'          => 'required',
            'job_title'             => 'required',
            'job_discriptions'      => 'required',
            'duration_job_from'     => 'required',
            'duration_job_to'       => 'required',
        );
        $validator = \Illuminate\Support\Facades\Validator::make(Input::all(), $rules);


        if ($validator->fails()) {
            return Redirect::to('add-talent-2')
                ->withErrors($validator);

        } else {
            // store
            $talent = new SecondTalent();
            $talent->course_degree_name    = Input::get('course_degree_name');
            $talent->college_school        = Input::get('college_school');
            $talent->duration_from         = Input::get('duration_from');
            $talent->duration_to           = Input::get('duration_to');
            $talent->company_name          = Input::get('company_name');
            $talent->job_title             = Input::get('job_title');
            $talent->job_discriptions      = Input::get('job_discriptions');
            $talent->duration_job_from     = Input::get('duration_job_from');
            $talent->duration_job_to       = Input::get('duration_job_to');
            $talent->save();
//            return Response::json($talent, 200);


        }
    }

}
