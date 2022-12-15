// import colors from 'vuetify/es5/util/colors'

const colors = require('vuetify/es5/util/colors').default

module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s Agriculture Dashboard',
    title: 'Nex-plex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nex-plex-ico.png' }
    ],
    scipt:[
      {
      type: 'text/javascript',
      src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/echarts.js',
    { src: '~/plugins/v-calender', ssr: false },
    'plugins/ant-design-vue',
    'plugins/echarts.js',
    'plugins/v-mask.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent4,
          sidebar: '#11270B',
          active_list:'#142b0d',
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  // },
  // buildDir: '_nuxt',
  build: {
    // publicPath: '_nuxt/dist/'
  },
  telemetry: false,
  auth: {
    localStorage: false,
    cookie: {
      options: {
        // expires: 0.001
        maxAge:100000
      }
    },
    resetOnError: true,
    redirect: {
      login: '/login', // User will be redirected to this path if login is required.
      home: '/', // User will be redirect to this path after login. (rewriteRedirects will rewrite this path)
      logout: '/login', // User will be redirected to this path if after logout, current route is protected.
      user: '/user/profile',
      callback: '/callback' // User will be redirect to this path by the identity provider after login. (Should match configured Allowed Callback URLs (or similar setting) in your app/client with the identity provider)
    },
    strategies: {
      local: {
        scheme: 'local',
        token: {
          maxAge: 10000,
          type: 'Bearer',
        },
        endpoints: {
          login: {
            // url: "http://139.59.109.48/api/auth/login",
            url: "http://159.223.55.150/api/auth/login",
            // url: "http://127.0.0.1:5000/api/auth/login",
            method: 'post',
          },
          logout: false,
          user: {
            // url: "http://127.0.0.1:5000/api/auth/me",
            url: "http://159.223.55.150/api/auth/me",
            // url: "http://139.59.109.48/api/auth/me",
            method: 'GET',
            // VERY IMPORTANT
            propertyName: false
          }
        },
        // tokenRequired: true,
        tokenType: 'Bearer',
        localStorage:false
      }
  }
  },
}
