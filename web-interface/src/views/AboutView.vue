<script >
// import keycloakService from '@/services/keycloak';
import { useAuthStore } from "@/stores/authStore";


const store = useAuthStore()
console.log("checking: ", store.authenticated)

</script>

<template >
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
