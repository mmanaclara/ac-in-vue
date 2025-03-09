<template>
  <main
    class="page-container flex-1 flex flex-col-reverse !h-fit lg:grid lg:grid-cols-2 items-center gap-4"
  >
    <div class="flex flex-col justify-center lg:items-start items-center gap-6">
      <h1
        class="text-title-1 text-zinc-700 text-center lg:text-left"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Now you're one step closer to your dream!
      </h1>
      <p class="text-zinc-600 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
        You will receive an email to start planning EVERY-THING! <br />
        Deal? 🤩
      </p>

      <div data-aos="fade-right" data-aos-delay="200">
        <ButtonSuccess />
      </div>
    </div>
    <div
      class="w-[80vw] lg:w-[26rem] items-end mx-auto self-center"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <img src="/images/happy-woman.png" alt="" class="w-full object-cover" />
    </div>
  </main>
</template>

<script setup>
import ButtonSuccess from '../components/ButtonSuccess.vue'
</script>
