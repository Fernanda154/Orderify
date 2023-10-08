<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\GroupsController;
use App\Http\Controllers\OrdersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users',  [UsersController::class, 'index']);
Route::get('/users/{id}', [UsersController::class, 'show']);
Route::post('/users', [UsersController::class, 'store']);
Route::put('/users/{id}',  [UsersController::class, 'update']);
Route::delete('/users/{id}',  [UsersController::class, 'delete']);

Route::get('/groups',  [GroupsController::class, 'index']);
Route::get('/groups/{id}', [GroupsController::class, 'show']);
Route::post('/groups', [GroupsController::class, 'store']);
Route::put('/groups/{id}',  [GroupsController::class, 'update']);
Route::delete('/groups/{id}',  [GroupsController::class, 'delete']);

Route::get('/orders',  [OrdersController::class, 'index']);
Route::get('/orders/{id}', [OrdersController::class, 'show']);
Route::post('/orders', [OrdersController::class, 'store']);
Route::put('/orders/{id}',  [OrdersController::class, 'update']);
Route::delete('/orders/{id}',  [OrdersController::class, 'delete']);