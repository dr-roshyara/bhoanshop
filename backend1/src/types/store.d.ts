/* eslint-disable prettier/prettier */
interface LoginUser {
  email: string;
  password: string;
}
interface LoggedUser {
  email: string;
  name: string;
  token: string;
  isLoggedIn: Boolean;
  isAdmin: Boolean;
  isOwner: Boolean;
  isWaiter: Boolean;
}

interface NewUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
export type { LoginUser, LoggedUser, NewUser };
