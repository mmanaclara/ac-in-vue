<template>
  <main class="page-container grid grid-cols-2 items-center gap-4">
    <div class="flex flex-col justify-center gap-6">
      <h1 class="text-title-1 text-zinc-700">Now you're one step closer to your dream!</h1>
      <p class="text-zinc-600">
        You will receive an email to start planning EVERY-THING! <br />
        Deal? 🤩
      </p>

      <ButtonSuccess />
    </div>
    <div class="w-[26rem] items-end ml-auto self-start">
      <img src="/images/happy-woman.png" alt="" class="w-full object-cover" />
    </div>
  </main>
</template>

<script setup>
import ButtonSuccess from '../components/ButtonSuccess.vue'
</script>
