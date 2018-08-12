import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quote',
      component: require('@/components/quote/index.vue').default
    },
    {
      path: '/trade',
      name: 'trade',
      component: require('@/components/trade/index.vue').default
    },
    {
      path: '/open-account',
      name: 'open-account',
      component: require('@/components/open-account/index.vue').default
    },
    {
      path: '/settings',
      component: r => require(['@/components/settings/index.vue'], r),
      children: [
        {
          path: 'addr',
          component: r => require(['@/components/settings/addr/index.vue'], r)
        },
        {
          path: 'password',
          component: r => require(['@/components/settings/password/index.vue'], r)
        },
        {
          path: 'suggestion',
          component: r => require(['@/components/settings/suggestion/index.vue'], r)
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
