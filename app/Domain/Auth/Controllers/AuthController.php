<?php

namespace App\Domain\Auth\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Domain\Auth\Traits\HttpResponse;
use App\Domain\Users\Request\StoreUserRequest;
class AuthController extends Controller
{
    //
    use HttpResponse;

    public function login(){
        return "this is login ";
    }
    // public function register(StoreUserRequest $request){
    //     // $request->validated($request->all());
    //     // return $request->name;
    //     return "this is register ";
    // }
     public function register(Request $request){
        $data =[
            'name'=>"test"
        ];
        return $request->name;
      return $this->success($data, "success");
        // $request->validated($request->all());
        // return $request->name;
        return "this is register ";
    }
}
