<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Tasker;
use App\Http\Controllers\ReviewController;

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
        ->join('users', 'taskers.user_id', '=', 'users.id')
        ->select('taskers.id')
        ->where('taskers.user_id', $id)
        ->first();   
            
    
        return response()->json($t_id, 200);
    }

    public function taskerDetails($id)
     {  $details = [
 
        'all' => [],
        ];

        $tasker = Tasker::find($id);
        $tasker->rating =  ReviewController::getrating($id); 
        $tasker->save();

        $details = DB::table('taskers')        
        ->join('users', 'taskers.user_id', '=', 'users.id')
        ->select('taskers.*', 'users.name', 'users.avatar', 'users.category', 'users.location')
        ->where('taskers.id', $id)
        ->first();

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