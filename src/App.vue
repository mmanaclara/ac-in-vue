<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  background: url('/images/bg-pattern.png');
  margin-inline: auto;
}
</style>
