import { defineStore } from "pinia";
import KeycloakService from '@/services/keycloak';

export const useAuthStore = defineStore({
  id: "storeAuth",
  state: () => {
    return {
      authenticated: false,
      user: {},
      test: false
    }
  },
  persist: true,
  getters: {},
  actions: {
      // Initialize Keycloak OAuth
      async initOauth(Keycloak, clearData = true) {
        if(clearData) { await this.clearUserData(); }

        this.authenticated = Keycloak.authenticated;
        // this.user.username = Keycloak.idTokenParsed.preferred_username;
        this.user.token = Keycloak.token;
        this.user.refToken = Keycloak.refreshToken;
      },
      // Logout user
      async logout() {
        try {
          await KeycloakService.CallLogout(import.meta.env.VITE_APP_URL);
          await this.clearUserData();
        } catch (error) {
          console.error(error);
        }
      },
      // Refresh user's token
      async refreshUserToken() {
        try {
          const Keycloak = await KeycloakService.CallTokenRefresh();
          this.initOauth(Keycloak, false);
        } catch (error) {
          console.error(error);
        }
      },
      // Clear user's store data
      clearUserData() {
        this.authenticated = false;
        this.user = {};
      }
    }
});

