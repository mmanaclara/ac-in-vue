<script setup></script>

<template>
  <section class="page-container flex justify-center lg:grid lg:grid-cols-2 items-center lg:gap-8">
    <div class="flex flex-col gap-6 items-center w-full">
      <h2 class="text-title-2 text-zinc-600 flex gap-2">
        <img src="/icons/icon_heart.svg" alt="" />
        Tell us a bit more about yourself
      </h2>
      <form
        class="flex flex-col gap-6 w-full px-6 items-center justify-center"
        ref="formRef"
        @submit.prevent="handleSubmitForm"
      >
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="name" class="text-zinc-600 font-medium">Name</label>
          <div class="input-box border-zinc-200">
            <input
              type="text"
              id="name"
              required
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="Name"
              v-model="name"
            />
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="name" class="text-zinc-600 font-medium">Email</label>
          <div class="input-box">
            <input
              type="email"
              id="email"
              required
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="Email"
              v-model="email"
            />
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="name" class="text-zinc-600 font-medium">Phone</label>
          <div class="input-box">
            <input
              type="phone"
              id="phone"
              required
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="Phone"
              v-model="phone"
            />
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="name" class="text-zinc-600 font-medium">City/State</label>
          <div class="input-box">
            <input
              type="city"
              id="city"
              required
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="City/State"
              v-model="city"
            />
          </div>
        </div>

        <ButtonPersonalInfo />
      </form>
    </div>
    <div>
      <img
        src="/images/three-women-walking-in-a-cold-day.png"
        class="object-fit hidden absolute lg:-top-[30%] lg:overflow-hidden lg:right-0 lg:w-1/2 lg:block"
        alt=""
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ButtonPersonalInfo from '@/components/ButtonPersonalInfo.vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const city = ref('')

const handleSubmitForm = () => {
  console.log('submitted')
}
</script>
