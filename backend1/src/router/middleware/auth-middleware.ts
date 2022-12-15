/* eslint-disable prettier/prettier */
import { useAuthStore } from "@/stores/auth-store";

export default (to: any, from: any, next: any) => {
  const auth = useAuthStore();
  const exceptionalRoutes: Array<string> = [
    "home",
    "login",
    "register",
    "about",
    "Resetpassword",
    "Requestpassword",
    "restaurant",
  ];
  const isGoingExceptionalRoutes = exceptionalRoutes.includes(to.name);

  /**
   * IF THE USER IS NOT LOGGED IN
   */
  if (!auth.loggedInUser) {
    if (isGoingExceptionalRoutes) {
      next(); // The user is not logged in but it's going to exceptional routes ? fine
      return;
    } else {
      next({ name: "login" });
      return;
    } // other routes than exceptional paths => /login
  }

  /**
   * IF THE USER IS LOGGED IN
   */
  if (auth.loggedInUser.isLoggedIn && isGoingExceptionalRoutes) {
    next({ name: "home", query: { "redirect-reason": "already logged" } });
  } else {
    next();
  }
};
