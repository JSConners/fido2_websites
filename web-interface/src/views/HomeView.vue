<script setup>
import keycloakService from '@/services/keycloak';
// import { useAuthStore } from "@/stores/authStore";

// const store = useAuthStore()
// console.log(store.user.username)

</script>

<template>
  <main>
    <h2>Stuff</h2>
    <button @click="keycloakService.CallInit()">Login</button>
    
  </main>
</template>
