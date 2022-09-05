import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MiddlewarePlugin from 'vue-router-middleware-plugin';
import store from "./store";

createApp(App)
  .use(router)
  .use(MiddlewarePlugin,router)
  .use(store)
  .mount("#app");
