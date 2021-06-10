<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Tasker;
use DB;

class TaskerController extends Controller
{   
    public function index()
    {
        $taskers = Tasker::all();

        return $taskers;
    }

    public function taskerDetails($id)
     {   $details = [
 
        'all' => [],
     ];
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