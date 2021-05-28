<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Tasker;
use Hash;
use Validator;
use Auth;

class LoginController extends Controller
{
    // public function clientDashboard()
    // {
    //     $clients = Client::all();
    //     $success =  $clients;

    //     return response()->json($success, 200);
    // }

    // public function taskerDashboard()
    // {
    //     $clients = Tasker::all();
    //     $success =  $clients;

    //     return response()->json($success, 200);
    // }

    public function clientLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
            'remember_token' => 'boolean',
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()]);
        }

        if(auth()->guard('client')->attempt(['email' => request('email'), 'password' => request('password')])){

            config(['auth.guards.api.provider' => 'client']);
            
            $client = Client::select('clients.*')->find(auth()->guard('client')->client()->id);
            $success =  $client;
            $success['token'] =  $client->createToken('MyApp',['client'])->accessToken; 

            return response()->json($success, 200);
        }else{ 
            return response()->json(['error' => ['Email and Password are Wrong.']], 200);
        }
    }

    public function taskerLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()->all()]);
        }

        if(auth()->guard('tasker')->attempt(['email' => request('email'), 'password' => request('password')])){

            config(['auth.guards.api.provider' => 'tasker']);
            
            $tasker = Tasker::select('taskers.*')->find(auth()->guard('tasker')->client()->id);
            $success =  $tasker;
            $success['token'] =  $tasker->createToken('MyApp',['tasker'])->accessToken; 

            return response()->json($success, 200);
        }else{ 
            return response()->json(['error' => ['Email and Password are Wrong.']], 200);
        }
    }
    public function clientLogout(){
        $client = Auth::client();
        if($client instanceOf Client)
            $client->token()->revoke();
        return response()->json([
            'information' => 'you are logout'
        ], 201);
    }

    public function taskerLogout(){
        $tasker = Auth::tasker();
        if($tasker instanceOf Tasker)
            $tasker->token()->revoke();
        return response()->json([
            'information' => 'you are logout'
        ], 201);
    }


}