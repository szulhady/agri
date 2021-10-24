import Auth from './auth'

import './middleware'

// Active schemes
import scheme_3e2123be from './schemes/local.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":true,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/login","home":"/","callback":"/callback","user":"/user/profile"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/","maxAge":100000}},"localStorage":false,"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_3e2123be($auth, {"endpoints":{"login":{"url":"http://139.59.109.48/api/auth/login","method":"post","propertyName":"token"},"logout":false,"user":{"url":"http://139.59.109.48/api/auth/me","method":"GET","propertyName":false}},"scheme":"local","token":{"maxAge":10000,"type":"Bearer"},"tokenType":"Bearer","localStorage":false,"_name":"local"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
