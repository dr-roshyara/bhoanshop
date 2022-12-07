<?php

namespace App\Domain\Auth\Controllers;

use App\Http\Controllers\Controller;
use App\Domain\Auth\Traits\HttpResponse;
use App\Domain\Users\Request\StoreUserRequest;
use App\Domain\Users\Request\LoginRequest;
use Illuminate\Support\Facades\Hash;
use App\Domain\Users\Models\User;
use Illuminate\Support\Facades\Auth as Authnicator;
class AuthController extends Controller
{
    //
    use HttpResponse;

    public function login(LoginRequest $request){
       $request->validated($request->all());
        //get the credentials
        $credentials = $request->only('email', 'password');
        // //check the auth
        if (!Authnicator::attempt($credentials))
        {
          return  $this->error('','Credentials do not match', 401);
        }
        $user =User::where('email',$request->email)->first();

        return $this->success(
            ['user'=>$user,
            'token'=>$user->createToken('Api Token of '.$user->first_name)->plainTextToken
            ]);
    }
    /**
     * Register function
     * @param: StoreUserRequest $request
     * @return: Response
     *
     */
     public function register(StoreUserRequest $request){

        // return "test";
        // return $request->all();
        $request->validated($request->all());

        $user=  new User();
        $user->first_name   = $request->first_name;
        $user->last_name    = $request->last_name;
        $user->email        = $request['email'];
        $user->password     = Hash::make($request['password']);
        // return $request->all();
        $user->save();
        return $this->success([
            'user'=>$user,
            'token'=>$user->createToken('Api Token of '.$user->first_name)->plainTextToken
        ]);
        // return "test";
        return $user;
        // return $this->success($data, "success");
        // return $request->name;
        return "this is register ";
    }
    /**
     * Logout function
     */
    public function logout(){
        //  return "this is logout";
        Authnicator::user()->currentAccessToken()->delete();
        return $this->success([
            'message'=>"You have successfully logged out. Token is also deleted"
        ]);
        // return "this is logout";
    }
}
