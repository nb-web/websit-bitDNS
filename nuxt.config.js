export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'BitDNS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: "keywords", content: "BitDNS官网- BitDNS is a domain name resolution system based on blockchain. BitDNS官网- 基于区块链技术,服务于dWeb4.0关键基础设施。"},
      { name:"description", content: "BitDNS 官网 Foundation is committed to building the World's first Blockchain Domain Name System, building a super hub connecting information internet and value blockchain, and contributing to the development of blockchain and distributed web4.0. BitDNS致力于打造全球首个区块链域名系统，构建连接信息互联网与价值区块链的超级枢纽，为区块链及分布式WEB4.0的发展贡献自己的力量。"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~assets/all.css",
    'element-ui/lib/theme-chalk/index.css',
    'swiper/swiper-bundle.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/vue-swiper.js',
    '@/plugins/i18n.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    postcss:[
      require("postcss-px2rem")({
        remUnit:16
      })
    ],
  }
}
