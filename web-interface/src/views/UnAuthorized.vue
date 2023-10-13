<script setup>
import KeycloakService from '../services/keycloak';

</script>
<template >
    <div>
      <h1>You do not have permission to view this page. Please login or register for an account.</h1>

      <button @click="KeycloakService.CallLogin('/about')">Login</button>
      <button >Register</button>
    </div>
  </template>