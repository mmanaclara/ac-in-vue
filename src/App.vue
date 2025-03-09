<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" /> </transition
    ></RouterView>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
