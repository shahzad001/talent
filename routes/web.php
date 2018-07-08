<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('add-talent-1','Talent@viewTalent');
Route::get('add-talent-2','Talent@viewTalentHistory');

Route::post('add/talent', 'AddTalent@addTalent');
Route::post('add/talent/2', 'AddTalent@add_second_talent');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
