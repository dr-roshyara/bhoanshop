import store from '@/utils/store'
import { CacheEnum } from '@/enum/CacheEnum'
import type { LoggedUser } from '@/types/store'
/**
 *Record token after login and registration
 * @param token
 */
export async function loginCallback(token: string) {
  store.set(CacheEnum.TOKEN_NAME, token)
  // location.href = store.get(CacheEnum.REDIRECT_ROUTE_NAME, '/dashboard')
}
/**
 *Record token after login and registration
 * @param token
 */
export async function setAuthUser(user: LoggedUser) {
  //   const currentTime = new Date().getTime() + CacheEnum.CACHE_TIME * 1000
  //   console.log(currentTime)
  store.set(CacheEnum.AUTH_USER, user, CacheEnum.CACHE_TIME)
  store.set(CacheEnum.TOKEN_NAME, user.token, CacheEnum.CACHE_TIME)
  //   location.href = store.get('/home')
  //   console.log(localStorage.getItem(CacheEnum.AUTH_USER))
}
/**
 *
 * @returns json object of LoggedUser
 */
export async function getAuthUser() {
  return store.get(CacheEnum.AUTH_USER)
}
// sign out
export async function logout() {
  // localStorage.clear() // always clean localStorage before reset the state
  store.remove(CacheEnum.TOKEN_NAME)
  store.remove(CacheEnum.AUTH_USER)
  location.href = '/'
}
