<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Http\Request;
use App\Http\Controllers\ReviewController;

use App\Models\User;

class Tasker extends Authenticatable
{
    use HasApiTokens,HasFactory, Notifiable;
    public $table = 'taskers';

    protected $fillable = [
        'hourly_rate', 'bio'
    ];   
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public static function createTasker(Request $request , int $user_id){
        $tasker = new Tasker();
        $tasker->user_id = $user_id;
        $tasker->save();
    }
}
