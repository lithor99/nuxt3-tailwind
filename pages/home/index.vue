<template>
    <div class="flex flex-col h-screen overflow-hidden">
        <header class="w-full border-b border-grey p-2 m-0 dark:bg-gray-900  ">
            <div class="p-2 flex flex-row justify-between">
                <Icon icon="subway:world-1" color="#dddddd" width="2em" />
                <Icon icon="mingcute:user-3-fill" color="#dddddd" width="2em" />
            </div>
        </header>
        <main class="flex-1 overflow-y-scroll">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 my-1">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Number
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
                    <div v-if="!loaded" class="items-center justify-center">
                        Loding...
                    </div>
                    <div v-else-if="data.value.products.length < 1" class="items-center justify-center">
                        No data
                    </div>
                    <tbody>
                        <tr v-for="(product, index) in data.products" :key="n"
                            class="bg-white border-b  dark:border-gray-700"
                            :class="index % 2 == 0 ? 'dark:bg-gray-700' : 'dark:bg-gray-800'">
                            <td class="px-6 py-4">
                                {{ index + 1 }}
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ product.title }}
                            </th>
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
                                {{ product.thumbnail }}
                            </td>
                            <td class="px-6 py-4">
                                <a href="#">
                                    <Icon icon="fa6-solid:eye" color="#eeeeee" width="1.5em" class="m-2" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav class="flex items-center justify-end pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mx-5">
                        page {{ page }} of {{ totalPage.length }}
                    </span>
                    <ul class="inline-flex -space-x-px text-sm h-8">
                        <li>
                            <a href="#" @click="PreviousPage"
                                class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">◀️</a>
                        </li>
                        <div v-for="i in totalPage" :key="n">
                            <li>
                                <a href="#" @click="page = i"
                                    :class="i == page ? 'dark:bg-gray-700 dark:text-white' : 'dark:bg-gray-800 dark:text-gray-400'"
                                    class="flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-600 hover:text-gray-700 dark:border-gray-700 dark:hover:text-white">{{
                                        i }}</a>
                            </li>
                        </div>
                        <li>
                            <a href="#" @click="NextPage"
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">▶️</a>
                        </li>
                    </ul>
                </nav>
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
const loaded = ref(false)
const page = ref(1);
const limit = ref(10);
const totalPage = ref([1, 2, 3, 4, 5]);
const data = ref({});
const FetchData = async () => {
    const { pending, data: result } = await useFetch(`https://dummyjson.com/products?limit=${limit.value}&skip=${page.value * limit.value - limit.value}`);
    loaded.value = pending.value;
    data.value = result.value;
    // alert(data.value.products[0])

}
const NextPage = () => {
    if (page.value < totalPage.value.length) {
        page.value = page.value + 1;
    }
}

const PreviousPage = () => {
    if (page.value > 1) {
        page.value = page.value - 1;
    }
}
onMounted(() => {
    // alert('result000')
    FetchData()
});

</script>

<style scoped></style>