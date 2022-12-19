import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStyleStore } from '@/stores/styles'
import { localStorageDarkModeKey, localStorageStyleKey } from '@/config'
import '@/assets/css/base.css'
import '@/assets/css/index.css'

import App from '@/App.vue'
import { router, setupRouter } from '@/router/register'

async function bootstrap() {
  const app = createApp(App)
  /* Init Pinia */
  const pinia = createPinia()
  app.use(pinia)
  //setup router
  setupRouter(app)
  router.isReady().then(() => app.mount('#app'))
}
void bootstrap()
//use basic style
const styleStore = useStyleStore()
/* App style */
styleStore.setStyle(localStorage[localStorageStyleKey] ?? 'basic')
/* Dark mode */
if (
  (!localStorage[localStorageDarkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
  localStorage[localStorageDarkModeKey] === '1'
) {
  styleStore.setDarkMode(true)
}
