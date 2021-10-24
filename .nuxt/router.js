import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00378620 = () => interopDefault(import('..\\pages\\adminStatus.vue' /* webpackChunkName: "pages/adminStatus" */))
const _42dbcfac = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _66228c70 = () => interopDefault(import('..\\pages\\current.vue' /* webpackChunkName: "pages/current" */))
const _64866952 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages/detail" */))
const _450a9492 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _3a63d6a9 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _49b529c5 = () => interopDefault(import('..\\pages\\ipah2Status.vue' /* webpackChunkName: "pages/ipah2Status" */))
const _d9170bbe = () => interopDefault(import('..\\pages\\ipahStatus.vue' /* webpackChunkName: "pages/ipahStatus" */))
const _a03a2062 = () => interopDefault(import('..\\pages\\kongPoStatus.vue' /* webpackChunkName: "pages/kongPoStatus" */))
const _22d29578 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _51e9b8fc = () => interopDefault(import('..\\pages\\overview-admin.vue' /* webpackChunkName: "pages/overview-admin" */))
const _1630f064 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _a04b80ca = () => interopDefault(import('..\\pages\\scheduleIpah1.vue' /* webpackChunkName: "pages/scheduleIpah1" */))
const _a02f51c8 = () => interopDefault(import('..\\pages\\scheduleIpah2.vue' /* webpackChunkName: "pages/scheduleIpah2" */))
const _2cc29d18 = () => interopDefault(import('..\\pages\\scheduleKongPo.vue' /* webpackChunkName: "pages/scheduleKongPo" */))
const _6454f85a = () => interopDefault(import('..\\pages\\scheduleTkpmPagoh.vue' /* webpackChunkName: "pages/scheduleTkpmPagoh" */))
const _76b48dbc = () => interopDefault(import('..\\pages\\tkpmPagohStatus.vue' /* webpackChunkName: "pages/tkpmPagohStatus" */))
const _d08e4748 = () => interopDefault(import('..\\pages\\trendsIpah1.vue' /* webpackChunkName: "pages/trendsIpah1" */))
const _d0721846 = () => interopDefault(import('..\\pages\\trendsIpah2.vue' /* webpackChunkName: "pages/trendsIpah2" */))
const _04d8a65a = () => interopDefault(import('..\\pages\\trendsKongPo.vue' /* webpackChunkName: "pages/trendsKongPo" */))
const _37a5d814 = () => interopDefault(import('..\\pages\\trendsTkpmPagoh.vue' /* webpackChunkName: "pages/trendsTkpmPagoh" */))
const _2e49960c = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _592af261 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adminStatus",
    component: _00378620,
    name: "adminStatus"
  }, {
    path: "/control",
    component: _42dbcfac,
    name: "control"
  }, {
    path: "/current",
    component: _66228c70,
    name: "current"
  }, {
    path: "/detail",
    component: _64866952,
    name: "detail"
  }, {
    path: "/general",
    component: _450a9492,
    name: "general"
  }, {
    path: "/inspire",
    component: _3a63d6a9,
    name: "inspire"
  }, {
    path: "/ipah2Status",
    component: _49b529c5,
    name: "ipah2Status"
  }, {
    path: "/ipahStatus",
    component: _d9170bbe,
    name: "ipahStatus"
  }, {
    path: "/kongPoStatus",
    component: _a03a2062,
    name: "kongPoStatus"
  }, {
    path: "/login",
    component: _22d29578,
    name: "login"
  }, {
    path: "/overview-admin",
    component: _51e9b8fc,
    name: "overview-admin"
  }, {
    path: "/register",
    component: _1630f064,
    name: "register"
  }, {
    path: "/scheduleIpah1",
    component: _a04b80ca,
    name: "scheduleIpah1"
  }, {
    path: "/scheduleIpah2",
    component: _a02f51c8,
    name: "scheduleIpah2"
  }, {
    path: "/scheduleKongPo",
    component: _2cc29d18,
    name: "scheduleKongPo"
  }, {
    path: "/scheduleTkpmPagoh",
    component: _6454f85a,
    name: "scheduleTkpmPagoh"
  }, {
    path: "/tkpmPagohStatus",
    component: _76b48dbc,
    name: "tkpmPagohStatus"
  }, {
    path: "/trendsIpah1",
    component: _d08e4748,
    name: "trendsIpah1"
  }, {
    path: "/trendsIpah2",
    component: _d0721846,
    name: "trendsIpah2"
  }, {
    path: "/trendsKongPo",
    component: _04d8a65a,
    name: "trendsKongPo"
  }, {
    path: "/trendsTkpmPagoh",
    component: _37a5d814,
    name: "trendsTkpmPagoh"
  }, {
    path: "/user",
    component: _2e49960c,
    name: "user"
  }, {
    path: "/",
    component: _592af261,
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
