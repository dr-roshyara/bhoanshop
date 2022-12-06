<?php

namespace App\Domain\Users\Request;

use Doctrine\Inflector\Rules\English\Rules;
use Illuminate\Foundation\Http\FormRequest;
use App\Actions\Fortify\PasswordValidationRules;
class StoreUserRequest extends FormRequest
{
     use PasswordValidationRules;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        // return [
        //     'first_name'    => ['required', 'string', 'max:255', 'min:2'],
        //     'last_name'     => ['required', 'string', 'max:255', 'min:2'],
        //     'email'         => ['required','email', 'string', 'unique:users'],
        //     'password'      => $this->passwordRules()

        // ];
    }
}
