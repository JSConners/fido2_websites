import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import KeyCloakService from './plugins/fido2'

const app = createApp(App)
app.use(router)

const renderApp = () => {
  createApp(App).mount("#app");
};
KeyCloakService.CallLogin(renderApp);
