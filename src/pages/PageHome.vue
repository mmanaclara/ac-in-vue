<template>
  <main
    class="page-container flex flex-col-reverse !h-fit lg:grid lg:grid-cols-2 items-center gap-4"
  >
    <div class="flex flex-col justify-center lg:items-start items-center gap-6">
      <h1
        class="text-title-1 text-zinc-700 text-center lg:text-left"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Let's create unforgettable memories together
      </h1>
      <p class="text-zinc-600 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
        Explore the world, discover new cultures <br />
        and expand your horizons.
      </p>

      <div data-aos="fade-right" data-aos-delay="200">
        <ButtonHome />
      </div>
    </div>
    <div class="w-[80vw] lg:w-[30rem] items-end ml-auto" data-aos="fade-left" data-aos-delay="200">
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
