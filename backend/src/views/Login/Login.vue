<template>
    <h1>Login form</h1>
    <router-link to="/dashboard">Go to Dashboard</router-link>

    <section class="h-screen">
        <div class="container px-6 py-12 h-full">
            <div
                class="flex flex-col md:flex-row justify-around items-center h-full g-6 text-gray-800"
            >
                <div class="md:w-1/3 mb-12 md:mb-0">
                    <!-- src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" -->

                    <img
                        src="../../images/logo.png"
                        class="w-full"
                        alt="Phone image"
                    />
                </div>
                <div class="md:w-3/4 lg:ml-20">
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="email-address" class="sr-only"
                                    >Email address</label
                                >
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    required
                                    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label for="password" class="sr-only"
                                    >Password</label
                                >
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"
                                    required
                                    class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div
                            class="flex items-center text-sm tracking-tighter justify-between"
                        >
                            <div class="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    for="remember-me"
                                    class="ml-2 block text-sm text-gray-900"
                                    >Remember me</label
                                >
                            </div>

                            <div class="text-sm">
                                <a
                                    href="/requestpassword"
                                    class="text-indigo-600 font-thin text-small hover:text-indigo-500"
                                    >Forgot your password?</a
                                >
                            </div>
                        </div>
                        <!-- Submit button -->
                        <submit-button title="Login"></submit-button>

                        <div
                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p class="text-center text-sm mx-4 mb-0">
                                Or continue with
                            </p>
                        </div>

                        <a
                            class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                            style="background-color: #3b5998"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <!-- Facebook -->
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                class="w-3.5 h-3.5 mr-2"
                            >
                                <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                />
                            </svg>
                            <span class="text-sm tracking-tighter">
                                Facebook
                            </span>
                        </a>

                        <!-- Twitter -->
                        <!-- Google -->
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="px-7 py-3 bg-red-500 hover:bg-red-200 hover: text-slate-100 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512"
                                class="w-4 h-4"
                            >
                                <path
                                    fill="currentColor"
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                />
                            </svg>
                            oogle
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import SubmitButton from "../../components/SubmitButton.vue";
export default {
    components: {
        SubmitButton,
    },
};
</script>
<style scoped></style>
