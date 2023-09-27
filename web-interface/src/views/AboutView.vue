<script setup>
  import keycloakService from '@/services/keycloak'; 
  keycloakService.CallLogin();
</script>

<template>
  <div class="about" v-if="keycloakService.authenticated">
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
