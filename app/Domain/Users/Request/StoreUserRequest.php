<?php

namespace App\Domain\Users\Request;
use App\Actions\Fortify\PasswordValidationRules;
use Illuminate\Foundation\Http\FormRequest as HttpFormRequest;

class StoreUserRequest extends HttpFormRequest
{
     use PasswordValidationRules;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name'    =>['required', 'string', 'max:255', 'min:2'],
            'last_name'     => ['required', 'string', 'max:255', 'min:2'],
            'email'         => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password'      => $this->passwordRules()

        ];
    }

}
