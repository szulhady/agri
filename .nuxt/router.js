import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e58fe228 = () => interopDefault(import('..\\pages\\adminDetail.vue' /* webpackChunkName: "pages/adminDetail" */))
const _f397b0f2 = () => interopDefault(import('..\\pages\\adminDetailIpah1.vue' /* webpackChunkName: "pages/adminDetailIpah1" */))
const _4c75e3e6 = () => interopDefault(import('..\\pages\\adminStatus.vue' /* webpackChunkName: "pages/adminStatus" */))
const _7863b749 = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _0276a165 = () => interopDefault(import('..\\pages\\current.vue' /* webpackChunkName: "pages/current" */))
const _76c49a15 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages/detail" */))
const _13029d54 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _6febbe46 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2395fae2 = () => interopDefault(import('..\\pages\\ipah2Status.vue' /* webpackChunkName: "pages/ipah2Status" */))
const _05d69164 = () => interopDefault(import('..\\pages\\ipahStatus.vue' /* webpackChunkName: "pages/ipahStatus" */))
const _121c4252 = () => interopDefault(import('..\\pages\\kongPoStatus.vue' /* webpackChunkName: "pages/kongPoStatus" */))
const _6579c055 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0b1876bf = () => interopDefault(import('..\\pages\\overview-admin.vue' /* webpackChunkName: "pages/overview-admin" */))
const _dcb40732 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _d6698510 = () => interopDefault(import('..\\pages\\scheduleIpah1.vue' /* webpackChunkName: "pages/scheduleIpah1" */))
const _d64d560e = () => interopDefault(import('..\\pages\\scheduleIpah2.vue' /* webpackChunkName: "pages/scheduleIpah2" */))
const _ba652192 = () => interopDefault(import('..\\pages\\scheduleKongPo.vue' /* webpackChunkName: "pages/scheduleKongPo" */))
const _97ab69a0 = () => interopDefault(import('..\\pages\\scheduleTkpmPagoh.vue' /* webpackChunkName: "pages/scheduleTkpmPagoh" */))
const _3944ef4e = () => interopDefault(import('..\\pages\\tkpmPagohStatus.vue' /* webpackChunkName: "pages/tkpmPagohStatus" */))
const _7199ad79 = () => interopDefault(import('..\\pages\\trendsIpah1.vue' /* webpackChunkName: "pages/trendsIpah1" */))
const _71a7c4fa = () => interopDefault(import('..\\pages\\trendsIpah2.vue' /* webpackChunkName: "pages/trendsIpah2" */))
const _5fccff56 = () => interopDefault(import('..\\pages\\trendsKongPo.vue' /* webpackChunkName: "pages/trendsKongPo" */))
const _b7625a9e = () => interopDefault(import('..\\pages\\trendsTkpmPagoh.vue' /* webpackChunkName: "pages/trendsTkpmPagoh" */))
const _8659c8e2 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _c85bc584 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adminDetail",
    component: _e58fe228,
    name: "adminDetail"
  }, {
    path: "/adminDetailIpah1",
    component: _f397b0f2,
    name: "adminDetailIpah1"
  }, {
    path: "/adminStatus",
    component: _4c75e3e6,
    name: "adminStatus"
  }, {
    path: "/control",
    component: _7863b749,
    name: "control"
  }, {
    path: "/current",
    component: _0276a165,
    name: "current"
  }, {
    path: "/detail",
    component: _76c49a15,
    name: "detail"
  }, {
    path: "/general",
    component: _13029d54,
    name: "general"
  }, {
    path: "/inspire",
    component: _6febbe46,
    name: "inspire"
  }, {
    path: "/ipah2Status",
    component: _2395fae2,
    name: "ipah2Status"
  }, {
    path: "/ipahStatus",
    component: _05d69164,
    name: "ipahStatus"
  }, {
    path: "/kongPoStatus",
    component: _121c4252,
    name: "kongPoStatus"
  }, {
    path: "/login",
    component: _6579c055,
    name: "login"
  }, {
    path: "/overview-admin",
    component: _0b1876bf,
    name: "overview-admin"
  }, {
    path: "/register",
    component: _dcb40732,
    name: "register"
  }, {
    path: "/scheduleIpah1",
    component: _d6698510,
    name: "scheduleIpah1"
  }, {
    path: "/scheduleIpah2",
    component: _d64d560e,
    name: "scheduleIpah2"
  }, {
    path: "/scheduleKongPo",
    component: _ba652192,
    name: "scheduleKongPo"
  }, {
    path: "/scheduleTkpmPagoh",
    component: _97ab69a0,
    name: "scheduleTkpmPagoh"
  }, {
    path: "/tkpmPagohStatus",
    component: _3944ef4e,
    name: "tkpmPagohStatus"
  }, {
    path: "/trendsIpah1",
    component: _7199ad79,
    name: "trendsIpah1"
  }, {
    path: "/trendsIpah2",
    component: _71a7c4fa,
    name: "trendsIpah2"
  }, {
    path: "/trendsKongPo",
    component: _5fccff56,
    name: "trendsKongPo"
  }, {
    path: "/trendsTkpmPagoh",
    component: _b7625a9e,
    name: "trendsTkpmPagoh"
  }, {
    path: "/user",
    component: _8659c8e2,
    name: "user"
  }, {
    path: "/",
    component: _c85bc584,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
