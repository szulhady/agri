import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7e074b8 = () => interopDefault(import('..\\pages\\adminDetail.vue' /* webpackChunkName: "pages/adminDetail" */))
const _3c8c3862 = () => interopDefault(import('..\\pages\\adminDetailIpah1.vue' /* webpackChunkName: "pages/adminDetailIpah1" */))
const _0ec67676 = () => interopDefault(import('..\\pages\\adminStatus.vue' /* webpackChunkName: "pages/adminStatus" */))
const _0d538a01 = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _d13317c6 = () => interopDefault(import('..\\pages\\current.vue' /* webpackChunkName: "pages/current" */))
const _0098df46 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages/detail" */))
const _b01b1fe8 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _04db90fe = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _426db19a = () => interopDefault(import('..\\pages\\ipah2Status.vue' /* webpackChunkName: "pages/ipah2Status" */))
const _135db8a8 = () => interopDefault(import('..\\pages\\ipahStatus.vue' /* webpackChunkName: "pages/ipahStatus" */))
const _63893acc = () => interopDefault(import('..\\pages\\kongPoStatus.vue' /* webpackChunkName: "pages/kongPoStatus" */))
const _d9a23de6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3bf0a507 = () => interopDefault(import('..\\pages\\overview-admin.vue' /* webpackChunkName: "pages/overview-admin" */))
const _ca9efea2 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _5c902630 = () => interopDefault(import('..\\pages\\scheduleIpah1.vue' /* webpackChunkName: "pages/scheduleIpah1" */))
const _5c9e3db1 = () => interopDefault(import('..\\pages\\scheduleIpah2.vue' /* webpackChunkName: "pages/scheduleIpah2" */))
const _58b4c502 = () => interopDefault(import('..\\pages\\scheduleKongPo.vue' /* webpackChunkName: "pages/scheduleKongPo" */))
const _6d47d030 = () => interopDefault(import('..\\pages\\scheduleTkpmPagoh.vue' /* webpackChunkName: "pages/scheduleTkpmPagoh" */))
const _64e9b9de = () => interopDefault(import('..\\pages\\tkpmPagohStatus.vue' /* webpackChunkName: "pages/tkpmPagohStatus" */))
const _df1d379e = () => interopDefault(import('..\\pages\\trendsIpah1.vue' /* webpackChunkName: "pages/trendsIpah1" */))
const _df01089c = () => interopDefault(import('..\\pages\\trendsIpah2.vue' /* webpackChunkName: "pages/trendsIpah2" */))
const _1bec1f9e = () => interopDefault(import('..\\pages\\trendsKongPo.vue' /* webpackChunkName: "pages/trendsKongPo" */))
const _e307252e = () => interopDefault(import('..\\pages\\trendsTkpmPagoh.vue' /* webpackChunkName: "pages/trendsTkpmPagoh" */))
const _0fc9f852 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _6cf18414 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a7e074b8,
    name: "adminDetail"
  }, {
    path: "/adminDetailIpah1",
    component: _3c8c3862,
    name: "adminDetailIpah1"
  }, {
    path: "/adminStatus",
    component: _0ec67676,
    name: "adminStatus"
  }, {
    path: "/control",
    component: _0d538a01,
    name: "control"
  }, {
    path: "/current",
    component: _d13317c6,
    name: "current"
  }, {
    path: "/detail",
    component: _0098df46,
    name: "detail"
  }, {
    path: "/general",
    component: _b01b1fe8,
    name: "general"
  }, {
    path: "/inspire",
    component: _04db90fe,
    name: "inspire"
  }, {
    path: "/ipah2Status",
    component: _426db19a,
    name: "ipah2Status"
  }, {
    path: "/ipahStatus",
    component: _135db8a8,
    name: "ipahStatus"
  }, {
    path: "/kongPoStatus",
    component: _63893acc,
    name: "kongPoStatus"
  }, {
    path: "/login",
    component: _d9a23de6,
    name: "login"
  }, {
    path: "/overview-admin",
    component: _3bf0a507,
    name: "overview-admin"
  }, {
    path: "/register",
    component: _ca9efea2,
    name: "register"
  }, {
    path: "/scheduleIpah1",
    component: _5c902630,
    name: "scheduleIpah1"
  }, {
    path: "/scheduleIpah2",
    component: _5c9e3db1,
    name: "scheduleIpah2"
  }, {
    path: "/scheduleKongPo",
    component: _58b4c502,
    name: "scheduleKongPo"
  }, {
    path: "/scheduleTkpmPagoh",
    component: _6d47d030,
    name: "scheduleTkpmPagoh"
  }, {
    path: "/tkpmPagohStatus",
    component: _64e9b9de,
    name: "tkpmPagohStatus"
  }, {
    path: "/trendsIpah1",
    component: _df1d379e,
    name: "trendsIpah1"
  }, {
    path: "/trendsIpah2",
    component: _df01089c,
    name: "trendsIpah2"
  }, {
    path: "/trendsKongPo",
    component: _1bec1f9e,
    name: "trendsKongPo"
  }, {
    path: "/trendsTkpmPagoh",
    component: _e307252e,
    name: "trendsTkpmPagoh"
  }, {
    path: "/user",
    component: _0fc9f852,
    name: "user"
  }, {
    path: "/",
    component: _6cf18414,
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
