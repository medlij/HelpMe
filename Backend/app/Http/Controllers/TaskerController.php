<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Tasker;

class TaskerController extends Controller
{
    public function index()
    {
        $taskers = auth()->user()->taskers;
 
        return response()->json([
            'success' => true,
            'data' => $taskers
        ]);
    }
    public function taskerDetails()
    {
        $tasker = Tasker::with('user')->where('user_id',auth('users-api')->user()->id )->first();
        return response()->json($tasker ,  200);
    }
    public function show($id)
    {
        $tasker = auth()->user()->taskers()->find($id);
 
        if (!$tasker) {
            return response()->json([
                'success' => false,
                'message' => 'Tasker not found '
            ], 400);
        }
 
        return response()->json([
            'success' => true,
            'data' => $tasker->toArray()
        ], 400);
    }

 
    public function update(Request $request, $id)
    {
        $tasker = auth()->user()->taskers()->find($id);
 
        if (!$tasker) {
            return response()->json([
                'success' => false,
                'message' => 'Tasker not found'
            ], 400);
        }
 
        $updated = $tasker->fill($request->all())->save();
 
        if ($updated)
            return response()->json([
                'success' => true
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Tasker Details can not be updated'
            ], 500);
    }
 

}
