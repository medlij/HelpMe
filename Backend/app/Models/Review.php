<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Tasker;


class Review extends Authenticatable
{
    use HasApiTokens,HasFactory, Notifiable;
    protected $fillable = [
        'review',
        'star_rating',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'client_id');
    }
    public function tasker()
    {
        return $this->hasOne(User::class, 'id', 'tasker_id');
    }

    public static function createReview(Request $request , int $tasker_id){
        $review = new Review();
        $review->client_id = auth('users-api')->$id;
        $review->tasker_id = $tasker_id;
        $tasker->save();
    }
}
