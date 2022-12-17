/* eslint-disable prettier/prettier */
import { CacheEnum } from '@/enum/CacheEnum'
import store from '@/utils/store'
import type { RouteLocationNormalized, Router } from 'vue-router'
import errorStore from '@/stores/errorStore'
import { logout } from '@/utils/helper'

class Guard {
  constructor(private router: Router) {}

  public async run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    errorStore().resetError()
    const _token = this.token()
    const _requiresAuth = to.meta.requiresAuth
    if (to.path == '/login') {
      store.remove(CacheEnum.TOKEN_NAME)
      localStorage.clear() // always clean localStorage before reset the state
    }
    // console.log(_requiresAuth)
    // console.log(_token)
    // console.log('from: ')
    // console.log(from)
    // console.log('to:')
    // console.log(to)
    if (_requiresAuth && !_token) {
      store.set(CacheEnum.REDIRECT_ROUTE_NAME, to.fullPath)
      return { name: 'login' }
    }

    if (!_requiresAuth && _token) return from
  }

  private token(): string | null {
    return store.get(CacheEnum.TOKEN_NAME)
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
