<script>
  import keycloakService from '@/services/keycloak';
</script>

<template>
    <div class="unauthorized">
      <h1>You are not authorized to view this content, click the sign-in button below.</h1>
      
      <button @click="keycloakService.CallInit()">Sign In</button>
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
  