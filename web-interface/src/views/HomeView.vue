<script setup>
import keycloakService from '@/services/keycloak';
import { useAuthStore } from "@/stores/authStore";

const store = useAuthStore()
// console.log("user is: ", store.user.username)

</script>

<template>
  <main>
    
    <div v-if="!store.authenticated">
    <h3>Welcome to My Website!</h3>
    <h4>Login or Register for an account!</h4>
    <button @click="keycloakService.CallLogin()">Login</button>
    <button @click="keycloakService.CallRegister()">Register</button>
    </div>
    <div v-if="store.authenticated">
      <h3>Welcome to My Website, {{ $store.user.username.toUpperCase() }} !</h3>
      <button @click="$store.logout">Logout</button>
    </div>
  </main>
</template>
