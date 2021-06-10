<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use DB;

class UserController extends Controller
{   
    public function index()
    {
        $users = User::all();

        return $users;
    }

    public function userDetails($id)
     {   $details = [
 
        'all' => [],
     ];
        $details = DB::table('users')        
        ->select('users.id','users.name', 'users.avatar', 'users.location', 'users.is_provider')
        ->where('users.id', $id)
        ->first();
        
        return response()->json($details, 200);
    }

    public function list($category)
     {   $details = [
 
        'all' => [],
     ];
        $details = DB::table('users')        
        ->join('taskers', 'users.id', '=', 'taskers.user_id')
        ->select('users.name', 'users.location', 'users.avatar', 'taskers.hourly_rate', 'taskers.bio', 'taskers.rating')
        ->where('users.category', $category)
        ->get();
        
        return response()->json($details, 200);
    }
        

    public function update(Request $request, $id) {
        $user = User::find($id);
        $user->avatar = $request->input('avatar');
        $user->location = $request->input('location');

        $user->save();
        return response()->json($user);
    }

}