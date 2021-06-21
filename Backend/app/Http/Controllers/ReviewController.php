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
            ->join('users', 'users.id', '=', 'tasker_id')
            ->select('reviews.*', "users.name")
            ->where('reviews.tasker_id', $id)
            ->get();
        }
        
        return response()->json($res);
    }

    public static function getrating($id) {
        $res = [
 
            'all' => [],
        ];

        $reviews = Review::get();

        $res = DB::table('reviews')
        ->where('tasker_id', $id)
        ->sum('star_rating');

        $reviews = Review::get();
        foreach ($reviews as $key => $review) {
            
            $size = DB::table('reviews')
            ->join('users', 'users.id', '=', 'tasker_id')
            ->select('reviews.star_rating')
            ->where('users.id', $id)
            // ->take(10)
            ->get();
        }
        $number_of_ratings = count($size);
        try {
            $rating = $res / $number_of_ratings;
        } catch (\Throwable $th) {
            $rating = 0;
        }

       

        return number_format((float)$rating, 2, '.', '');
    }
    

    public function delete($id) {
        return response()->json(Review::destroy($id));
    }

    public function post(Request $request) {
        $review = new Review();
        $review->review = $request->input('review');
        $review->tasker_id = $request->input('tasker_id');
        $review->star_rating = $request->input('star_rating');
        $review->client_id =  $request->input('client_id');
        $review->save();
        return response()->json($request);
    }
}
