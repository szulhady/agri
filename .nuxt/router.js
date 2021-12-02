import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4a5737c = () => interopDefault(import('..\\pages\\adminDetail.vue' /* webpackChunkName: "pages/adminDetail" */))
const _27abd41e = () => interopDefault(import('..\\pages\\adminDetailIpah1.vue' /* webpackChunkName: "pages/adminDetailIpah1" */))
const _3b8b753a = () => interopDefault(import('..\\pages\\adminStatus.vue' /* webpackChunkName: "pages/adminStatus" */))
const _3cd3ecc2 = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _6ba8f3bb = () => interopDefault(import('..\\pages\\current.vue' /* webpackChunkName: "pages/current" */))
const _b918b602 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages/detail" */))
const _7c34efaa = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _4dc3dec8 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2c0b3238 = () => interopDefault(import('..\\pages\\ipah2Status.vue' /* webpackChunkName: "pages/ipah2Status" */))
const _465bd164 = () => interopDefault(import('..\\pages\\ipahStatus.vue' /* webpackChunkName: "pages/ipahStatus" */))
const _184df5bc = () => interopDefault(import('..\\pages\\kongPoStatus.vue' /* webpackChunkName: "pages/kongPoStatus" */))
const _5ea8b02b = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4baaf7a9 = () => interopDefault(import('..\\pages\\overview-admin.vue' /* webpackChunkName: "pages/overview-admin" */))
const _4ebdf4d1 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _54cff74e = () => interopDefault(import('..\\pages\\scheduleIpah1.vue' /* webpackChunkName: "pages/scheduleIpah1" */))
const _54de0ecf = () => interopDefault(import('..\\pages\\scheduleIpah2.vue' /* webpackChunkName: "pages/scheduleIpah2" */))
const _39401fbe = () => interopDefault(import('..\\pages\\scheduleKongPo.vue' /* webpackChunkName: "pages/scheduleKongPo" */))
const _0cf22a06 = () => interopDefault(import('..\\pages\\scheduleTkpmPagoh.vue' /* webpackChunkName: "pages/scheduleTkpmPagoh" */))
const _95c9b6a2 = () => interopDefault(import('..\\pages\\tkpmPagohStatus.vue' /* webpackChunkName: "pages/tkpmPagohStatus" */))
const _7a0ee4cf = () => interopDefault(import('..\\pages\\trendsIpah1.vue' /* webpackChunkName: "pages/trendsIpah1" */))
const _7a1cfc50 = () => interopDefault(import('..\\pages\\trendsIpah2.vue' /* webpackChunkName: "pages/trendsIpah2" */))
const _65feb2c0 = () => interopDefault(import('..\\pages\\trendsKongPo.vue' /* webpackChunkName: "pages/trendsKongPo" */))
const _760c6f07 = () => interopDefault(import('..\\pages\\trendsTkpmPagoh.vue' /* webpackChunkName: "pages/trendsTkpmPagoh" */))
const _40bbd8f9 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _d5fde5d8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d4a5737c,
    name: "adminDetail"
  }, {
    path: "/adminDetailIpah1",
    component: _27abd41e,
    name: "adminDetailIpah1"
  }, {
    path: "/adminStatus",
    component: _3b8b753a,
    name: "adminStatus"
  }, {
    path: "/control",
    component: _3cd3ecc2,
    name: "control"
  }, {
    path: "/current",
    component: _6ba8f3bb,
    name: "current"
  }, {
    path: "/detail",
    component: _b918b602,
    name: "detail"
  }, {
    path: "/general",
    component: _7c34efaa,
    name: "general"
  }, {
    path: "/inspire",
    component: _4dc3dec8,
    name: "inspire"
  }, {
    path: "/ipah2Status",
    component: _2c0b3238,
    name: "ipah2Status"
  }, {
    path: "/ipahStatus",
    component: _465bd164,
    name: "ipahStatus"
  }, {
    path: "/kongPoStatus",
    component: _184df5bc,
    name: "kongPoStatus"
  }, {
    path: "/login",
    component: _5ea8b02b,
    name: "login"
  }, {
    path: "/overview-admin",
    component: _4baaf7a9,
    name: "overview-admin"
  }, {
    path: "/register",
    component: _4ebdf4d1,
    name: "register"
  }, {
    path: "/scheduleIpah1",
    component: _54cff74e,
    name: "scheduleIpah1"
  }, {
    path: "/scheduleIpah2",
    component: _54de0ecf,
    name: "scheduleIpah2"
  }, {
    path: "/scheduleKongPo",
    component: _39401fbe,
    name: "scheduleKongPo"
  }, {
    path: "/scheduleTkpmPagoh",
    component: _0cf22a06,
    name: "scheduleTkpmPagoh"
  }, {
    path: "/tkpmPagohStatus",
    component: _95c9b6a2,
    name: "tkpmPagohStatus"
  }, {
    path: "/trendsIpah1",
    component: _7a0ee4cf,
    name: "trendsIpah1"
  }, {
    path: "/trendsIpah2",
    component: _7a1cfc50,
    name: "trendsIpah2"
  }, {
    path: "/trendsKongPo",
    component: _65feb2c0,
    name: "trendsKongPo"
  }, {
    path: "/trendsTkpmPagoh",
    component: _760c6f07,
    name: "trendsTkpmPagoh"
  }, {
    path: "/user",
    component: _40bbd8f9,
    name: "user"
  }, {
    path: "/",
    component: _d5fde5d8,
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
