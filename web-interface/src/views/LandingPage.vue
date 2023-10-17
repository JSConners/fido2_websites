<script setup>
import KeycloakService from '../services/keycloak';

</script>
<template >
    <div>
      <h1>Thanks for visiting Some Website, {{ $store.user.username.toUpperCase() }}!</h1>
      <button @click="$store.logout">Logout</button>
    </div>
</template>