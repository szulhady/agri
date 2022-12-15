import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a64feae8 = () => interopDefault(import('..\\pages\\adminDetail.vue' /* webpackChunkName: "pages/adminDetail" */))
const _993f2032 = () => interopDefault(import('..\\pages\\adminDetailIpah1.vue' /* webpackChunkName: "pages/adminDetailIpah1" */))
const _0d35eca6 = () => interopDefault(import('..\\pages\\adminStatus.vue' /* webpackChunkName: "pages/adminStatus" */))
const _acdafa2e = () => interopDefault(import('..\\pages\\control.vue' /* webpackChunkName: "pages/control" */))
const _33a56d05 = () => interopDefault(import('..\\pages\\current.vue' /* webpackChunkName: "pages/current" */))
const _04bdda75 = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages/detail" */))
const _443168f4 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _bdcaec34 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4335f682 = () => interopDefault(import('..\\pages\\ipah2Status.vue' /* webpackChunkName: "pages/ipah2Status" */))
const _7a78a1c4 = () => interopDefault(import('..\\pages\\ipahStatus.vue' /* webpackChunkName: "pages/ipahStatus" */))
const _33088a9c = () => interopDefault(import('..\\pages\\kongPoStatus.vue' /* webpackChunkName: "pages/kongPoStatus" */))
const _65b21816 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _457b571f = () => interopDefault(import('..\\pages\\overview-admin.vue' /* webpackChunkName: "pages/overview-admin" */))
const _f35eb672 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _4c5ad118 = () => interopDefault(import('..\\pages\\scheduleIpah1.vue' /* webpackChunkName: "pages/scheduleIpah1" */))
const _4c68e899 = () => interopDefault(import('..\\pages\\scheduleIpah2.vue' /* webpackChunkName: "pages/scheduleIpah2" */))
const _459f60d2 = () => interopDefault(import('..\\pages\\scheduleKongPo.vue' /* webpackChunkName: "pages/scheduleKongPo" */))
const _2c870ed0 = () => interopDefault(import('..\\pages\\scheduleTkpmPagoh.vue' /* webpackChunkName: "pages/scheduleTkpmPagoh" */))
const _1552980e = () => interopDefault(import('..\\pages\\tkpmPagohStatus.vue' /* webpackChunkName: "pages/tkpmPagohStatus" */))
const _dd8cadce = () => interopDefault(import('..\\pages\\trendsIpah1.vue' /* webpackChunkName: "pages/trendsIpah1" */))
const _dd707ecc = () => interopDefault(import('..\\pages\\trendsIpah2.vue' /* webpackChunkName: "pages/trendsIpah2" */))
const _342c77b6 = () => interopDefault(import('..\\pages\\trendsKongPo.vue' /* webpackChunkName: "pages/trendsKongPo" */))
const _9370035e = () => interopDefault(import('..\\pages\\trendsTkpmPagoh.vue' /* webpackChunkName: "pages/trendsTkpmPagoh" */))
const _d23e1822 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _037f50de = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a64feae8,
    name: "adminDetail"
  }, {
    path: "/adminDetailIpah1",
    component: _993f2032,
    name: "adminDetailIpah1"
  }, {
    path: "/adminStatus",
    component: _0d35eca6,
    name: "adminStatus"
  }, {
    path: "/control",
    component: _acdafa2e,
    name: "control"
  }, {
    path: "/current",
    component: _33a56d05,
    name: "current"
  }, {
    path: "/detail",
    component: _04bdda75,
    name: "detail"
  }, {
    path: "/general",
    component: _443168f4,
    name: "general"
  }, {
    path: "/inspire",
    component: _bdcaec34,
    name: "inspire"
  }, {
    path: "/ipah2Status",
    component: _4335f682,
    name: "ipah2Status"
  }, {
    path: "/ipahStatus",
    component: _7a78a1c4,
    name: "ipahStatus"
  }, {
    path: "/kongPoStatus",
    component: _33088a9c,
    name: "kongPoStatus"
  }, {
    path: "/login",
    component: _65b21816,
    name: "login"
  }, {
    path: "/overview-admin",
    component: _457b571f,
    name: "overview-admin"
  }, {
    path: "/register",
    component: _f35eb672,
    name: "register"
  }, {
    path: "/scheduleIpah1",
    component: _4c5ad118,
    name: "scheduleIpah1"
  }, {
    path: "/scheduleIpah2",
    component: _4c68e899,
    name: "scheduleIpah2"
  }, {
    path: "/scheduleKongPo",
    component: _459f60d2,
    name: "scheduleKongPo"
  }, {
    path: "/scheduleTkpmPagoh",
    component: _2c870ed0,
    name: "scheduleTkpmPagoh"
  }, {
    path: "/tkpmPagohStatus",
    component: _1552980e,
    name: "tkpmPagohStatus"
  }, {
    path: "/trendsIpah1",
    component: _dd8cadce,
    name: "trendsIpah1"
  }, {
    path: "/trendsIpah2",
    component: _dd707ecc,
    name: "trendsIpah2"
  }, {
    path: "/trendsKongPo",
    component: _342c77b6,
    name: "trendsKongPo"
  }, {
    path: "/trendsTkpmPagoh",
    component: _9370035e,
    name: "trendsTkpmPagoh"
  }, {
    path: "/user",
    component: _d23e1822,
    name: "user"
  }, {
    path: "/",
    component: _037f50de,
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
