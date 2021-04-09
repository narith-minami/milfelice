import axios from 'axios'

export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "結婚式・ウェディングヘアメイク・出張ヘアメイクならMilfeliceにお任せ",
    meta: [
      { lang: "ja" },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "milfelice.com" },
      {
        hid: "description",
        name: "description",
        content: "ウェディングヘアメイク * Milfeliceは、東京近郊を中心にブライダル/ウエディングの出張ヘアメイクを行っています。フリーのヘアメイクアーティストが確かな技術と格安の料金でお二人の特別な日のお手伝いをさせていただきます。"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "ウェディングヘアメイク * Milfeliceは、東京近郊を中心にブライダル/ウエディングの出張ヘアメイクを行っています。フリーのヘアメイクアーティストが確かな技術と格安の料金でお二人の特別な日のお手伝いをさせていただきます。"
      },
      { hid: 'keyword', property: 'keyword', content: '結婚式出張ヘアメイク,ウェディングヘアメイク出張,出張ヘアメイク,ブライダル,ヘアメイク,ウェディング,格安,フリーランス' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://milfelice.com/' },
      { hid: 'og:title', property: 'og:title', content: '結婚式・ウェディングヘアメイク・出張ヘアメイクならMilfelice' },
      { hid: 'og:image', property: 'og:image', content: 'http://milfelice.com/images/ogp.png' },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "./milfelice.ico" }]
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
    // { src: '~/plugins/vue-js-modal.js', ssr: false }
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

    "@nuxtjs/style-resources",

    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-W4S542B',
    debug: true,
    pageTracking: true,
  },

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
    // target: 'static',
    /*
     ** You can extend webpack config here
     */
    vendor: [
      'vue-awesome-swiper',
    ],
    extend(config, ctx) {}
  },
  
  generate: {
    routes () {
      return axios.get(`https://milfeliche.microcms.io/api/v1/voice`, {
        headers: { "X-API-KEY": "67208e66-8604-4353-b492-bdfcbd70da7d" }
      }).then((res) => {
        console.log(res)
        return res.data.contents.map((voice) => {
          return {
            route: '/voice/' + voice.id,
            payload: voice
          }
         })
      })
    }
  }
};
