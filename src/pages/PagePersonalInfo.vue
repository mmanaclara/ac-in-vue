<script setup></script>

<template>
  <section class="page-container flex justify-center lg:grid lg:grid-cols-2 items-center lg:gap-8">
    <div class="flex flex-col gap-6 items-center w-full">
      <h2 class="text-title-2 text-zinc-600 flex gap-2">
        <img src="/icons/icon_heart.svg" alt="" />
        Tell us a bit more about yourself
      </h2>
      <!-- // show all the errors
        <p 
          v-for="error in v$.$errors"
          :key="error.$uid"
          class="text-red-700 left-0 -bottom-[1.5rem] text-sm font-medium"
        >
        {{ error.$property }} - {{ error.$message }}.
        </p> 
      -->
      <form
        class="flex flex-col gap-6 w-full px-6 items-center justify-center"
        ref="formRef"
        @submit.prevent="handleSubmitForm"
      >
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="name" class="text-zinc-600 font-medium">Name</label>
          <div class="input-box relative">
            <input
              type="text"
              id="name"
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="Name"
              v-model="formData.name"
            />
            <!-- <p
              v-for="error in v$.name.$errors"
              :key="error.$uid"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              {{ error.$message }}.
            </p> -->
            <p
              v-if="v$.name.$errors.length"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              Name is required.
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="email" class="text-zinc-600 font-medium">Email</label>
          <div class="input-box relative">
            <input
              type="text"
              id="email"
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="Email"
              v-model="formData.email"
            />
            <p
              v-if="v$.email.$errors.length"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              This is not a valid email address.
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="phone" class="text-zinc-600 font-medium">Phone</label>
          <div class="input-box relative">
            <input
              type="phone"
              id="phone"
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="Phone"
              v-model="formData.phone"
            />
            <p
              v-for="error in v$.phone.$errors"
              :key="error.$uid"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              {{ error.$message }}.
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="city" class="text-zinc-600 font-medium">City/State</label>
          <div class="input-box relative">
            <input
              type="city"
              id="city"
              class="border-none outline-none placeholder:text-zinc-500 w-full"
              placeholder="City/State"
              v-model="formData.city"
            />
            <p
              v-for="error in v$.city.$errors"
              :key="error.$uid"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              {{ error.$message }}.
            </p>
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
import { reactive, computed } from 'vue'
import ButtonPersonalInfo from '@/components/ButtonPersonalInfo.vue'

import { useVuelidate } from '@vuelidate/core'
import { email, minLength, required } from '@vuelidate/validators'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  city: ''
})

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    phone: { required, minLength: minLength(10) },
    city: { required }
  }
})

const v$ = useVuelidate(rules, formData)

const handleSubmitForm = async () => {
  const result = await v$.value.$validate()

  if (result) {
    console.log('submitted')
  } else {
    console.log("oops, it didn't work :(")
  }
}
</script>
