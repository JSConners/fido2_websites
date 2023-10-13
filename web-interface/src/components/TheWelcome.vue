<script>
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import api from "@/services/api";

export default{
  components:{
    WelcomeItem, 
    DocumentationIcon
  }, 
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async validateUser() {
      this.loading = true;

      try {
        const apiURL = "/keycloak/validate-token";
        const res = await api.post(apiURL);
        console.log(res.data);

        this.loading = false;
        return;

      } catch (error) {
        this.loading = false;
        console.error(error);
        return;
      }
    }
  }
}
</script>
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <div class="card">
    <!-- Test Pinia persisted state button -->
    <button 
      class="mr-15"
      type="button" 
      title="Test persisted state"
      @click="$store.testAction"
    >
      Test ({{ $store.test }})
    </button>

    <!-- Refresh token button -->
    <button 
      class="mr-15"
      type="button" 
      title="Refreshes user token"
      @click="$store.refreshUserToken"
    >
      Refresh Token
    </button>
    
    <!-- BE validation button -->
    <button 
      class="mr-15"
      type="button"
      title="Check Console with Dev Tools"
      :disabled="loading"
      @click="validateUser"
    >
      Backend Validation
    </button>

    <!-- Logout button -->
    <button 
      type="button" 
      title="Logout Keycloak user"
      @click="$store.logout"
    >
      Logout
    </button>
  </div>

  <div class="card py-10">
    <h2>Keycloak User</h2>
    <p class="my-5">Username: {{ $store.user.username }}</p>
    <p class="my-5">Token:</p>
    <p class="wrap-text font-small my-5">{{ $store.user.token }}</p>
    <p class="my-5">Refresh Token:</p>
    <p class="wrap-text font-small my-5">{{ $store.user.refToken }}</p>
  </div>
  </WelcomeItem>
</template>
