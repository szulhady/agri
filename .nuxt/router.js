import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _be403b26 = () => interopDefault(import('..\\pages\\adminDetail.vue' /* webpackChunkName: "pages/adminDetail" */))
const _e4cd46b4 = () => interopDefault(import('..\\pages\\adminDetailIpah1.vue' /* webpackChunkName: "pages/adminDetailIpah1" */))
const _25263ce4 = () => interopDefault(import('..\\pages\\adminStatus.vue' /* webpackChunkName: "pages/adminStatus" */))
const _1389196c = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _ff634534 = () => interopDefault(import('..\\pages\\current.vue' /* webpackChunkName: "pages/current" */))
const _02164c18 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages/detail" */))
const _de4b4d56 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _24790b72 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _373dce63 = () => interopDefault(import('..\\pages\\ipah2Status.vue' /* webpackChunkName: "pages/ipah2Status" */))
const _7a15c9c3 = () => interopDefault(import('..\\pages\\ipahStatus.vue' /* webpackChunkName: "pages/ipahStatus" */))
const _736edef1 = () => interopDefault(import('..\\pages\\kongPoStatus.vue' /* webpackChunkName: "pages/kongPoStatus" */))
const _7a628896 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6236679e = () => interopDefault(import('..\\pages\\overview-admin.vue' /* webpackChunkName: "pages/overview-admin" */))
const _62747ef4 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _5dcc34b9 = () => interopDefault(import('..\\pages\\scheduleIpah1.vue' /* webpackChunkName: "pages/scheduleIpah1" */))
const _5dda4c3a = () => interopDefault(import('..\\pages\\scheduleIpah2.vue' /* webpackChunkName: "pages/scheduleIpah2" */))
const _0c293fd4 = () => interopDefault(import('..\\pages\\scheduleKongPo.vue' /* webpackChunkName: "pages/scheduleKongPo" */))
const _cd288c1e = () => interopDefault(import('..\\pages\\scheduleTkpmPagoh.vue' /* webpackChunkName: "pages/scheduleTkpmPagoh" */))
const _6ffdb35a = () => interopDefault(import('..\\pages\\tkpmPagohStatus.vue' /* webpackChunkName: "pages/tkpmPagohStatus" */))
const _f57cfe0c = () => interopDefault(import('..\\pages\\trendsIpah1.vue' /* webpackChunkName: "pages/trendsIpah1" */))
const _f560cf0a = () => interopDefault(import('..\\pages\\trendsIpah2.vue' /* webpackChunkName: "pages/trendsIpah2" */))
const _7dc0c816 = () => interopDefault(import('..\\pages\\trendsKongPo.vue' /* webpackChunkName: "pages/trendsKongPo" */))
const _30eefdb2 = () => interopDefault(import('..\\pages\\trendsTkpmPagoh.vue' /* webpackChunkName: "pages/trendsTkpmPagoh" */))
const _850071a4 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _9e8a3502 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _be403b26,
    name: "adminDetail"
  }, {
    path: "/adminDetailIpah1",
    component: _e4cd46b4,
    name: "adminDetailIpah1"
  }, {
    path: "/adminStatus",
    component: _25263ce4,
    name: "adminStatus"
  }, {
    path: "/control",
    component: _1389196c,
    name: "control"
  }, {
    path: "/current",
    component: _ff634534,
    name: "current"
  }, {
    path: "/detail",
    component: _02164c18,
    name: "detail"
  }, {
    path: "/general",
    component: _de4b4d56,
    name: "general"
  }, {
    path: "/inspire",
    component: _24790b72,
    name: "inspire"
  }, {
    path: "/ipah2Status",
    component: _373dce63,
    name: "ipah2Status"
  }, {
    path: "/ipahStatus",
    component: _7a15c9c3,
    name: "ipahStatus"
  }, {
    path: "/kongPoStatus",
    component: _736edef1,
    name: "kongPoStatus"
  }, {
    path: "/login",
    component: _7a628896,
    name: "login"
  }, {
    path: "/overview-admin",
    component: _6236679e,
    name: "overview-admin"
  }, {
    path: "/register",
    component: _62747ef4,
    name: "register"
  }, {
    path: "/scheduleIpah1",
    component: _5dcc34b9,
    name: "scheduleIpah1"
  }, {
    path: "/scheduleIpah2",
    component: _5dda4c3a,
    name: "scheduleIpah2"
  }, {
    path: "/scheduleKongPo",
    component: _0c293fd4,
    name: "scheduleKongPo"
  }, {
    path: "/scheduleTkpmPagoh",
    component: _cd288c1e,
    name: "scheduleTkpmPagoh"
  }, {
    path: "/tkpmPagohStatus",
    component: _6ffdb35a,
    name: "tkpmPagohStatus"
  }, {
    path: "/trendsIpah1",
    component: _f57cfe0c,
    name: "trendsIpah1"
  }, {
    path: "/trendsIpah2",
    component: _f560cf0a,
    name: "trendsIpah2"
  }, {
    path: "/trendsKongPo",
    component: _7dc0c816,
    name: "trendsKongPo"
  }, {
    path: "/trendsTkpmPagoh",
    component: _30eefdb2,
    name: "trendsTkpmPagoh"
  }, {
    path: "/user",
    component: _850071a4,
    name: "user"
  }, {
    path: "/",
    component: _9e8a3502,
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
