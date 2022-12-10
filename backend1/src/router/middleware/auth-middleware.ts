import { useAuthStore } from "@/stores/auth-store";

export default (to: any, from: any, next: any) => {
    const auth = useAuthStore();
    let exceptionalRoutes: Array<string> = [
        "login",
        "register",
        "forgot-password",
    ];
    let isGoingExceptionalRoutes = exceptionalRoutes.includes(to.name);
    /**
     * if the user is not logged in
     */
    if (!auth.user.isLoggedIn) {
    }
};
