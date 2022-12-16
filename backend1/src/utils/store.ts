// used idea  from https://github.com/houdunwang/php.git
export interface IData {
  data: any
  expire?: number | null
}
export default {
  set(key: string, data: any, expire: number = 0): void {
    // if exipre time is less than or equal to zero then do not save
    if (expire <= 0) return
    //otherwise
    let cache: IData = { data }
    cache.expire = new Date().getTime() + expire * 1000
    localStorage.setItem(key, JSON.stringify(cache))
  },
  get(key: string, defaultValue: any = null): any {
    const cacheStore = localStorage.getItem(key)
    if (cacheStore) {
      const cache = JSON.parse(cacheStore)
      const expire = cache?.expre
      const currentTime = new Date().getTime()
      if (expire && expire < currentTime) {
        localStorage.removeItem(key)
        return defaultValue
      }
      return cache.data
    }
    return defaultValue
  },
  remove(key: string) {
    localStorage.removeItem(key)
    this.clear()
  },
  clear() {
    localStorage.clear()
  },
}
