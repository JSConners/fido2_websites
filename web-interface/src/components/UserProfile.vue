<script>
import WelcomeItem from './WelcomeItem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import api from "@/services/api";

export default{
  components:{
    WelcomeItem, 
    CommunityIcon
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
<style>
  div {
    text-align: center;
    word-break: break-all;
  } 

</style>

<template>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon/>
    </template>
  <div class="card py-10">
    <h2>Keycloak User</h2>
    <p class="my-5"> Username: {{ $store.user.username.toUpperCase() }}     
      <!-- Logout button -->
      <button 
        type="button" 
        title="Logout Keycloak user"
        @click="$store.logout"
      >
        Logout
      </button></p>
    <p class="my-5">Token:     <!-- Refresh token button -->
      <button 
        class="mr-15"
        type="button" 
        title="Refreshes user token"
        @click="$store.refreshUserToken"
      >
        Refresh Token
      </button></p>
    <p class="wrap-text font-small my-5">{{ $store.user.token }}</p>

  </div>
  </WelcomeItem>
</template>
