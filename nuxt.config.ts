// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },
  css: ['~/assets/style.css']
})
