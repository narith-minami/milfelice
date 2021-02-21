export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: ["@/assets/sass/common.scss", "@/assets/sass/reset.css"],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/contents.js" },
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/vue-js-modal.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",

    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",

    "@nuxtjs/style-resources"
  ],

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: [
      'vue-awesome-swiper',
      'vue-js-modal'
    ],
    extend(config, ctx) {}
  }
};
