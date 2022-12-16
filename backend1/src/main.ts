import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/base.css'
import '@/assets/index.css'

import App from '@/App.vue'
import { router, setupRouter } from '@/router/register'

async function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())
  setupRouter(app)
  router.isReady().then(() => app.mount('#app'))
}
void bootstrap()
