<template>
  <header class="h-16 grid place-items-center">
    <RouterLink to="/" class="max-w-[75rem] w-full mx-auto px-6 flex gap-2">
      <img src="/icons/icon_globe.svg" alt="" />
      <span class="font-bold text-zinc-600 text-lg">ac.in</span>
    </RouterLink>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
