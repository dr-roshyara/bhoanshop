/* eslint-disable prettier/prettier */
interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
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

export { User, LoginUser, LoggedUser as default };
