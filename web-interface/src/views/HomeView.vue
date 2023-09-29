<script setup>
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <main>
    <h2>Stuff: {{ $store.authenticated }}</h2>
    <TheWelcome />
    
  </main>
</template>
