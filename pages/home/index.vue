<template>
    <div class="flex flex-col h-screen overflow-hidden">
        <header class="w-full border-b border-grey p-2 m-0 dark:bg-gray-900  ">
            <div class="p-2 flex flex-row justify-between">
                <Icon icon="subway:world-1" color="#dddddd" width="2em" />
                <Icon icon="mingcute:user-3-fill" color="#dddddd" width="2em" />
            </div>
        </header>
        <main class="flex-1 overflow-y-scroll">
            <div class="bg-gray-200 relative overflow-x-auto shadow-md sm:rounded-lg mx-2 my-1">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Destcriptions
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="data?.products?.length > 1">
                        <tr v-for="(product, index) in data.products" :key="n"
                            class="bg-white border-b dark:border-gray-700 hover:dark:text-gray-50"
                            :class="index % 2 == 0 ? 'dark:bg-gray-700' : 'dark:bg-gray-800'">
                            <td class="px-6 py-4">
                                {{ index + 1 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.id }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.title }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.brand }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.category }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.stock }}
                            </td>
                            <td class="px-6 py-4">
                                ${{ product.price }}
                            </td>
                            <td class="px-6 py-4">​
                                {{ product.rating }}★
                            </td>
                            <td class="px-6 py-4">
                                {{ product.description }}
                            </td>
                            <td class="px-6 py-4">
                                <a href="#"
                                    @click="showDialog = true, imgUrl = product.thumbnail, productName = product.title"
                                    class="hover:underline">{{ product.thumbnail }}</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#">
                                    <Icon icon="fa6-solid:eye" width="1.5em" class="m-2" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="pending" class="w-full text-gray-600 m-6">
                    <div class="text-center">
                        Loading...
                    </div>
                </div>
                <div v-else-if="data?.products?.length < 1" class="w-full text-gray-600 m-6">
                    <div class="text-center">
                        No data aviliable
                    </div>
                </div>
                <nav class="flex items-center justify-end pt-4" :class="showDropdown ? 'pb-56' : 'pb-1'"
                    aria-label="Table navigation">
                    <div class="relative">
                        <button @click="showDropdown = !showDropdown"
                            class="flex items-center p-1 text-gray-500 bg-gray-200 rounded-md">
                            <span class="mr-2 ml-1 text-md">Rows per page ({{ limit }} )</span>
                            <Icon icon="icon-park-solid:down-one" color="#333333" width="1.5em" />
                        </button>
                        <div v-show="showDropdown" class="absolute right-0 rounded-md bg-gray-100">
                            <ul v-for="list in dataPerPaga">
                                <li class="my-4">
                                    <a href="#" @click="showDropdown = !showDropdown, limit = list, SetTotalPage()"
                                        class="text-ms text-gray-500 hover:text-gray-800 m-4">
                                        {{ list }} rows
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <span class="text-md font-normal text-gray-500 dark:text-gray-500 mx-5">
                        Total data: {{ totalData }} | Page: {{ page }} of {{ totalPage.length }}
                    </span>
                    <ul class="inline-flex -space-x-px text-sm h-8">
                        <li>
                            <a href="#" @click="PreviousPage(), showDropdown = false"
                                class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">◀️</a>
                        </li>
                        <div v-for="i in totalPage" :key="n">
                            <li>
                                <a href="#" @click="page = i, FetchData(), showDropdown = false"
                                    :class="i == page ? 'dark:bg-gray-700 dark:text-white' : 'dark:bg-gray-800 dark:text-gray-400'"
                                    class="flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-600 hover:text-gray-700 dark:border-gray-700 dark:hover:text-white">{{
                                        i }}</a>
                            </li>
                        </div>
                        <li>
                            <a href="#" @click="NextPage(), showDropdown = false"
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">▶️</a>
                        </li>
                    </ul>
                </nav>
                <div class="fixed inset-0 flex items-center justify-center" :class="showDialog ? 'visible' : 'invisible'">
                    <div id="defaultModal" tabindex="-1" aria-hidden="true" class=" p-4 md:inset-0 h-[calc(100%-1rem)]">
                        <div class="items-center h-auto justify-center relative bg-gray-600 rounded-md">
                            <div class="flex items-start justify-start p-4 ">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    {{ productName }}
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="defaultModal"
                                    @click="showDialog = false, imgUrl = '', productname = ''">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-2 space-y-6 items-center justify-center">
                                <img class="h-auto max-w-full" :src="imgUrl" alt="image description">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="w-full border-t border-grey px-8 py-2">
            <div class="text-left">
                some footer
            </div>
        </footer>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue';
const page = ref(1);
const limit = ref(10);
const totalData = ref(100);
const totalPage = ref([]);
const pending = ref(false);
const error = ref({});
const data = ref([]);
const showDropdown = ref(false);
const dataPerPaga = ref([10, 20, 30, 40, 50]);
const showDialog = ref(false);
const imgUrl = ref('');
const productName = ref('');

const { pending: p, error: e, data: d } = await useFetch(`https://dummyjson.com/products?limit=${limit.value}&skip=${page.value * limit.value - limit.value}`);
pending.value = p.value;
error.value = e.value || {};
data.value = d.value || [];

const FetchData = async () => {
    const { pending: p, error: e, data: d } = await useFetch(`https://dummyjson.com/products?limit=${limit.value}&skip=${page.value * limit.value - limit.value}`);
    pending.value = p.value;
    error.value = e.value || {};
    data.value = d.value || [];
}

const SetTotalPage = async () => {
    const t = totalData.value / limit.value
    totalPage.value = [];
    page.value = 1
    if (t % 2 == 0) {
        for (let i = 0; i < t; i++) {
            totalPage.value = [...totalPage.value, i + 1]
        }
    } else {
        for (let i = 0; i <= t; i++) {
            totalPage.value = [...totalPage.value, i + 1]
        }
    }
    await FetchData();
}

const SetInitTotalPage = () => {
    const t = totalData.value / limit.value
    totalPage.value = [];
    if (t % 2 == 0) {
        for (let i = 0; i < t; i++) {
            totalPage.value = [...totalPage.value, i + 1]
        }
    } else {
        for (let i = 0; i <= t; i++) {
            totalPage.value = [...totalPage.value, i + 1]
        }
    }
}

const NextPage = async () => {
    if (page.value < totalPage.value.length) {
        page.value = page.value + 1;
        await FetchData();
    }
}

const PreviousPage = async () => {
    if (page.value > 1) {
        page.value = page.value - 1;
        await FetchData();
    }
}
onMounted(() => {
    SetInitTotalPage()
    // alert('result000')
    // FetchData()
});

</script>

<style scoped></style>