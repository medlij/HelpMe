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

class ReviewController extends Controller
{
    public function get($id) {
        $res = [
 
            'all' => [],
        ];

        $reviews = Review::get();
        foreach ($reviews as $key => $review) {
            
            $res = DB::table('reviews')
            ->join('users', 'users.id', '=', 'client_id')
            ->join('taskers', 'taskers.id', '=', 'tasker_id')
            ->select('reviews.*')
            ->where('taskers.id', $id)
            ->get();
        }
        
        return response()->json($res);
    }
    

    public function delete($id) {
        return response()->json(Review::destroy($id));
    }


    public function post(Request $request) {
        $review = new Review();
        $review->review = $request->input('review');
        $review->tasker_id = $request->input('tasker_id');
        $review->client_id = auth()->guard('api')->user()->id;
        $review->save();
        return response()->json($request);
    }
}
