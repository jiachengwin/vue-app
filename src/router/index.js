import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import login from './login'
import home from './home'
import list from './list'
import chart from './chart'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    ...login,
    ...home,
    ...list,
    ...chart
  ]
})
router.beforeEach((to, from, next) => {
  store.commit('TOGGLE_HEADER', to.meta.hasHeader != false)
  store.commit('TOGGLE_FOOTER', to.meta.hasFooter != false)
  store.commit('TOGGLE_TABS', to.meta.hasTabs == true)
  if (to.meta.login != false && !store.state.common.user) {
    store.commit('TOGGLE_TOAST', {
      toast: true,
      toastMsg: '请先登录！'
    })
    next('/page/login')
  } else {
    next()
  }
})

export default router