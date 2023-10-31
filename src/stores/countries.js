import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref([])

  function setCountries(data) {
    countries.value = data
  }

  async function getCountries() {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries')
      const { data } = response

      setCountries(data.data)
    } catch (error) {
      console.log('deu ruim', error)
    }
  }

  return { countries, getCountries }
})
