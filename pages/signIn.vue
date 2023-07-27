<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-20 w-auto" src="https://tailwindui.com/img/logos/mark.svg? color=indigo&shade=600"
                alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account
            </h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST" @submit.prevent="SetLogin">
                <div>
                    <label for="email" class="block text-md leading-6 text-gray-600">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required
                            class="block w-full text-md rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 
                            ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center">
                        <label for="password" class="block text-md leading-6 text-gray-600">Password</label>
                    </div>
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
                    <div class="mt-2 flex items-center justify-between">
                        <div class="mt-2 flex items-center">
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="rememberMe" @change="SetRemember"
                                    class="w-4 h-4 text-indigo-500 bg-white rounded ">
                                <label class="ml-2 block text-md leading-6 text-gray-600">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div class="text-md">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                </div>

                <div>
                    <button type="submit" @click="SetLogin"
                        class="flex w-full justify-center rounded-md outline outline-1 outline-indigo-600 bg-indigo-600 px-3 py-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 hover:outline-indigo-500 focus-visible:outline-offset-2">
                        Sign in
                    </button>
                </div>
            </form>
            <div class="mt-6">
                <nuxt-link to="/signUp">
                    <button type="submit"
                        class="flex w-full justify-center outline outline-1 outline-indigo-600 rounded-md px-3 py-3 text-md font-semibold leading-6 text-indigo-600 shadow-sm hover:outline-2 ">
                        Sign up
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
const rememberMe = ref(false);

const SetRemember = () => {
    rememberMe.value = !rememberMe.value
}

const SetLogin = () => {
    navigateTo("/home");
}
onMounted(() => {
});
</script>

<style scoped></style>