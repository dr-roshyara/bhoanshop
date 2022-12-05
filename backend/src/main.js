import { createApp } from "vue";
import "./style.css";
import "./css/index.css";
import App from "./App.vue";
import Store from "./store/index.js";
import store from "./store/index.js";
import router from "./router/index.js";
createApp(App).use(store).use(router).mount("#app");
// const app = createApp({ App });
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router);
// app.use(store);

// app.mount("#app");
