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
  toek: string;
  isLoggedIn: Boolean;
}
export { User, LoginUser as default };
