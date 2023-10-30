<template>
  <main class="page-container grid grid-cols-2 items-center gap-4">
    <div class="flex flex-col justify-center gap-6">
      <h1 class="text-title-1 text-zinc-700">Let's create unforgettable memories together</h1>
      <p class="text-zinc-600">
        Explore the world, discover new cultures <br />
        and expand your horizons.
      </p>

      <ButtonHome />
    </div>
    <div class="w-[30rem] items-end ml-auto">
      <img
        src="/images/woman-holding-passport-in-one-hand-and-the-global-in-the-other.png"
        alt=""
        class="w-full object-cover"
      />
    </div>
  </main>
</template>

<script setup>
import ButtonHome from '../components/ButtonHome.vue'
</script>
