<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Tasker;
use App\Models\User;
use App\Http\Controllers\PassportAuthController;
use App\Middleware\UserAuth;
use Route;
use DB;

class TaskerController extends Controller
{   
    public function index()
    {
        $taskers = Tasker::all();

        return $taskers;
    }


    public static function getTaskerId($id)
    {
        $t_id =[
 
            'all' => [],
         ];

        $t_id = DB::table('taskers')
        ->select('taskers.id')
        ->where('taskers.user_id', $id)
        ->first();   

        $res = $t_id->id;

        return $res;
    }


    public static function getTaskerUserId($id)
    {
        $u_id =[
 
            'all' => [],
         ];

        $u_id = DB::table('taskers')
        ->select('taskers.user_id')
        ->where('taskers.id', $id)
        ->first();   

        $res = $u_id->user_id;

        return $res;
    }

    public function taskerDetails($id)
     {   $details = [
 
        'all' => [],
     ];
        $u_id = TaskerController::getTaskerUserId($id); /*Returns user_id */

        $tasker = Tasker::find($id); /* returns correct tasker*/
        $tasker->rating =  ReviewController::getrating($u_id); 
        $tasker->save();

        $details = DB::table('taskers')        
        ->join('users', 'taskers.user_id', '=', 'users.id')
        ->select('taskers.*', 'users.name', 'users.avatar', 'users.category', 'users.location')
        ->where('taskers.id', $id)
        ->first();


        // return $u_id;
        return response()->json($details, 200);

    }
        
    public function show($name)
    {   $res = [
 
        null => [],
    ];
        $res = DB::table('users')     
        ->select('users.id', 'users.name', 'users.avatar', 'users.location', 'users.category')
        ->where('users.name', $name)
        ->where('users.is_provider', 1)
        ->get();

        if (!$res) {
            return response()->json([
                'success' => false,
                'message' => 'Tasker not found '
            ], 400);
        }
 
        return response()->json([
            'success' => true,
            'data' => $res
        ], 400);
    }


    public function put(Request $request, $id) {
        $tasker = Tasker::find($id);
        $tasker->bio = $request->input('bio');
        $tasker->hourly_rate = $request->input('hourly_rate');
        $tasker->save();
        return response()->json($tasker);
    }

}