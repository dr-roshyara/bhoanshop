<?php

namespace App\Domain\Auth\Controllers;

use App\Http\Controllers\Controller;
use App\Domain\Auth\Traits\HttpResponse;
use App\Domain\Users\Request\StoreUserRequest;
use App\Domain\Users\Request\LoginRequest;
use Illuminate\Support\Facades\Hash;
use App\Domain\Users\Models\User;
use Illuminate\Support\Facades\Auth as Authnicator;
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
class AuthController extends Controller
{
    //
    use HttpResponse;

    public function login(LoginRequest $request){
        // header("Access-Control-Allow-Origin: *");
        header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
       $request->validated($request->all());
        //get the credentials
        $credentials = $request->only('email', 'password');
        // //check the auth
        if (!Authnicator::attempt($credentials))
        {
          return  $this->error('','Credentials do not match', 401);
        }
        $user =User::where('email',$request->email)->first();
        $_loggedUser =[
            'email'     =>$user->email,
            'name'      =>$user->first_name." ".$user->last_name,
            'isLoggedIn'=>true,
            'isAdmin'   =>$user->is_admin,
            'isOwner'  =>$user->is_owner,
            'isWaiter'  =>$user->is_waiter,
            'token'     =>$user->createToken('Api Token of '.$user->first_name)->plainTextToken

        ];
        return $this->success($_loggedUser, $message="Request was successful");
    }
    /**
     * Register function
     * @param: StoreUserRequest $request
     * @return: Response
     *
     */
     public function register(StoreUserRequest $request){
        // header("Access-Control-Allow-Origin: *");
        header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
        // return "test";
        // return $request->all();
        try{
            $request->validated($request->all());

            $user=  new User();
            $user->first_name   = $request->first_name;
            $user->last_name    = $request->last_name;
            $user->email        = $request['email'];
            $user->password     = Hash::make($request['password']);
            // return $request->all();
            $user->save();
            $_loggedUser =[
                'email'     =>$user->email,
                'name'      =>$user->first_name." ".$user->last_name,
                'isLoggedIn'=>true,
                'isAdmin'   =>$user->is_admin,
                'isOwner'  =>$user->is_owner,
                'isWaiter'  =>$user->is_waiter,
                'token'     =>$user->createToken('Api Token of '.$user->first_name)->plainTextToken

            ];
            return $this->success($_loggedUser, $message="Registration was successful");
        }catch(Exception $e) {
            return 'Message: ' .$e->getMessage();
        }
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
