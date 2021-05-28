<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        $user = User::create([
            'ame' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password'])
          ]);

        if($user instanceOf User)
            $getToken = $user->createToken('personal token');
        $token = $getToken->token;

        if($request['remember_token']){
            $token->expires_at = Carbon::now()->addDays(15);
        }else{
            $token->expires_at = Carbon::now()->addDays();
        }
        $token->save();

        return response()->json([
            'access' => $getToken->accessToken,
            'token' => 'Bearer',
            'expires' => Carbon::parse(
                $token->expires_at
            )->toDateTimeString()
        ],200);
    }


    public function details(){
        $user = auth()->user();
        return response()->json($user, 200);
    }
}

