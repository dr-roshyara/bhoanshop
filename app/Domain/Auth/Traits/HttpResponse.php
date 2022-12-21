<?php
namespace App\Domain\Auth\Traits;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

trait HttpResponse {

    protected function success($data,$message=null, $code=200){
        header('Content-Type: application/json; charset=utf-8');
         return response()->json([
            'status'=> '200',
            'message'=>$message,
            'user'=>$data,

         ], $code);
    }

    protected function error($data, $code,$message=null){
        header('Content-Type: application/json; charset=utf-8');
         return response()->json([
            'status'=> 'An error has occured',
            'message'=>$message,
            'data'=>$data,

         ], $code);
    }


}
