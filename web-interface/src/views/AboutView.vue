<script>
  import api from "@/services/api"

  export default {
    data() {
      return{
        loading: false, 
      }
    },
    created(){      
    },
    methods: {
      async validateUser(){
        this.loading = true;

        try{
          const apiURL = "/keycloak/validate-token";
          const res = await api.post(apiURL);
          console.log(res.data);

          this.loading = false; 
          return;
        }catch(error){
          this.loading = false; 
          console.error(error);
          return;
        }
      }
    }

  }

  // const auth =  useAuthStore()

  // keycloakService.CallInit()

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button
    class="mr-15"
    type="button"
    title="logout"
    @click="$store.logout"
    >logout
  </button>
<button 
      class="mr-15"
      type="button"
      title="Check Console with Dev Tools"
      :disabled="loading"
      @click="validateUser"
    >
      Backend Validation
    </button>
  </div>
</template>

<script>


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
