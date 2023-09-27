import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';
import AuthStorePlugin from './plugins/authStore';
import keycloakService from '@/services/keycloak';

const pinia = createPinia();

// Use persisted state with Pinia so our store data will persist even after page refresh
pinia.use(piniaPluginPersistedstate);

const renderApp = () => {
  const app = createApp(App);
  app.use(AuthStorePlugin, { pinia });
  app.use(pinia);
  app.use(router);
  app.mount('#app');
}
keycloakService.CallInit(renderApp);
// renderApp();