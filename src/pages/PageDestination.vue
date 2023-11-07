<template>
  <section class="page-container flex justify-center lg:grid lg:grid-cols-2 items-center lg:gap-8">
    <div class="flex flex-col gap-6 items-center w-full">
      <h2 class="text-title-2 text-zinc-600 flex gap-2" data-aos="fade-left" data-aos-delay="200">
        <img src="/icons/icon_airplane.svg" alt="" />
        Take-off into fun!
      </h2>
      <form
        class="flex flex-col gap-6 w-full px-6 items-center justify-center"
        ref="formRef"
        id="destinationForm"
        @submit.prevent="handleSubmitForm"
        data-aos="fade-left"
        data-aos-delay="250"
      >
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="language" class="text-zinc-600 font-medium">Language</label>
          <div class="input-box relative">
            <IconLanguage />
            <select
              v-model="formData.language"
              id="language"
              class="bg-transparent w-full outline-none"
            >
              <option value="">Select a language</option>
              <option v-for="language in languages" :key="language" :value="language.title">
                <p>{{ language.title }}</p>
              </option>
            </select>
            <p
              v-if="v$.language.$errors.length"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              Language is required.
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="country" class="text-zinc-600 font-medium">Country</label>
          <div class="input-box relative">
            <IconCountry />
            <select
              v-model="formData.country"
              id="country"
              class="bg-transparent w-full outline-none"
            >
              <option value="">Select your destination country</option>
              <option v-for="country in countries" :key="country" :value="country.country">
                <p>{{ country.country }}</p>
              </option>
            </select>
            <p
              v-if="v$.country.$errors.length"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              Country is required.
            </p>
          </div>
        </div>

        <div class="flex flex-col w-full max-w-[20rem]">
          <label for="city" class="text-zinc-600 font-medium">City</label>
          <div class="input-box relative">
            <IconInputCity />
            <select v-model="formData.city" id="city" class="bg-transparent w-full outline-none">
              <option value="">Select your destination city</option>
              <option v-for="item in cities" :key="item" :value="item">
                <p>{{ item }}</p>
              </option>
            </select>
            <p
              v-for="error in v$.city.$errors"
              :key="error.$uid"
              class="text-red-700 absolute left-0 -bottom-[1.5rem] text-sm font-medium"
            >
              City is required.
            </p>
          </div>
        </div>

        <ButtonDestination />
      </form>
    </div>
    <div>
      <img
        src="/images/woman-with-her-back-turned-holding-a-map.png"
        class="object-cover img-container h-screen hidden absolute lg:overflow-hidden lg:right-0 lg:w-1/2 lg:block"
        alt=""
      />
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, watch, onMounted, ref, nextTick } from 'vue'
import { useCountriesStore } from '@/stores/countries.js'
import { storeToRefs } from 'pinia'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useRouter } from 'vue-router'

import ButtonDestination from '@/components/ButtonDestination.vue'
import IconLanguage from '@/components/IconLanguage.vue'
import IconCountry from '@/components/IconCountry.vue'
import IconInputCity from '@/components/IconInputCity.vue'

const router = useRouter()

const { getCountries } = useCountriesStore()
const { countries } = storeToRefs(useCountriesStore())

const languages = reactive([
  {
    id: 1,
    title: ' English'
  },
  {
    id: 2,
    title: 'French'
  },
  {
    id: 3,
    title: 'Spanish'
  },
  {
    id: 4,
    title: 'Russian'
  },
  {
    id: 5,
    title: 'Italian'
  },
  {
    id: 6,
    title: 'Korean'
  },
  {
    id: 7,
    title: 'Chinese'
  },
  {
    id: 8,
    title: 'Japanese'
  }
])

const cities = ref(['Select a country first'])

function showRelatedCities() {
  const filteredCities = countries.value.find((country) => country.country === formData.country)
  cities.value = filteredCities?.cities
}

// Form validation
const formData = reactive({
  language: '',
  country: '',
  city: ''
})

const rules = computed(() => {
  return {
    language: { required },
    country: { required },
    city: { required }
  }
})

const v$ = useVuelidate(rules, formData)

const handleSubmitForm = async () => {
  const result = await v$.value.$validate()

  if (result) {
    router.push({ name: 'success' })
  } else {
    console.log("oops, it didn't work :(")
  }
}

watch(formData, async () => {
  await nextTick()
  showRelatedCities()
})

onMounted(async () => {
  await getCountries()
})
</script>

<style scoped>
body {
  overflow: hidden;
}
.input-box:focus-within {
  outline: 2px solid rgb(255, 198, 50);
}

.input-box:focus-within svg {
  color: rgb(255, 198, 50);
}

.img-container {
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
}
</style>
