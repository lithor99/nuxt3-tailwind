
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "nuxt3",
      meta: [
        { name: "description", content: "details" },
      ]
    }
  },
})
