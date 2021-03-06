<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('auth/register', 'AuthController@register');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    //Route::get('/', "TestController@index");

    // Route::view("/{any}", "react")
    // ->where('any', '.*');

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    
    Route::any("/{any}", function() {
        return abort(404);
    });

});

Route::Resource("page", "PageController");


Route::get('models/page', "ModelController@page");
