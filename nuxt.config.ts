// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  nitro: {
    prerender: {
      routes: [
        '/',
        '/simple-netlify-form',
        '/ajax-netlify-form',
        '/conditional-rendering-netlify-form'
      ]
    }
  },
  css: ['~/assets/style.css']
});
