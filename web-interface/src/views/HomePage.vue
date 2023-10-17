<script setup>
import keycloakService from '@/services/keycloak';
import { useAuthStore } from "@/stores/authStore";
import UserProfile from "@/components/UserProfile.vue"
const store = useAuthStore()
console.log("user is: ", store.user.username)
keycloakService.CallTokenCheck()

</script>

<style>
  div {
    text-align: left;
    word-wrap: break-word;
  }
</style>

<template>
  <main>
    <UserProfile />
  </main>
</template>