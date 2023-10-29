<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
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
