<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-20 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up for using system
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">

                <!-- First name -->
                <div>
                    <label class="block text-md leading-6 text-gray-600">First name</label>
                    <div class="mt-2">
                        <input id="name" name="name" type="text" autocomplete="" required
                            class="block w-full text-md rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
                    </div>
                </div>

                <!-- Last name -->
                <div>
                    <label class="block text-md leading-6 text-gray-600">Last name</label>
                    <div class="mt-2">
                        <input id="lastname" name="lastname" type="text" autocomplete=""
                            class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
                    </div>
                </div>

                <!-- Email address -->
                <div>
                    <label for="email" class="block text-md leading-6 text-gray-600">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required
                            class="block w-full text-md rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
                    </div>
                </div>

                <!-- Password -->
                <div>
                    <label for="password" class="block text-md leading-6 text-gray-600">Password</label>
                    <div class="mt-2 relative">
                        <input id="password" name="password" :type="showPassword ? 'text' : 'password'"
                            autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
                        <div class="absolute inset-y-0 right-1 pr-3 flex items-center text-sm leading-5 text-gray-500">
                            <Icon icon="fa6-solid:eye-slash" color="#6f6f6f" width="1.65em"
                                @click="showPassword = !showPassword"
                                :class="{ 'hidden': showPassword, 'block': !showPassword }" />
                            <Icon icon="fa6-solid:eye" color="#6f6f6f" width="1.5em" @click="showPassword = !showPassword"
                                class="text-red-500" :class="{ 'hidden': !showPassword, 'block': showPassword }" />
                        </div>
                    </div>
                </div>

                <!-- Confirm Password -->
                <div>
                    <label for="password" class="block text-md leading-6 text-gray-600">Confirm password</label>
                    <div class="mt-2">
                        <input id="cpassword" name="cpassword" type="password" autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
                    </div>
                </div>

                <!-- Upload image -->
                <div class="col-span-full">
                    <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Image profile</label>
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4">
                        <div class="text-center justify-center">
                            <svg class="w-[80px] h-[80px] text-indigo-600 text-center light:text-indigo-600 "
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 14 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                    d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                            </svg>
                            <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                <label for="file-upload"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md outline outline-1 outline-indigo-600 bg-indigo-600 px-3 py-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 hover:outline-indigo-500 focus-visible:outline-offset-2">
                        Sign up
                    </button>
                </div>
            </form>
            <div class="mt-6">
                <nuxt-link to="signIn">
                    <button type="submit"
                        class="flex w-full justify-center outline outline-1 outline-indigo-600 rounded-md px-3 py-3 text-md font-semibold leading-6 text-indigo-600 shadow-sm hover:outline-2 ">
                        Sign in
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue';
const showPassword = ref(false);

</script>

<style scoped></style>