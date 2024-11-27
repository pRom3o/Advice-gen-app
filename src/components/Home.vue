<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import axios from 'axios'
import iconDice from './icons/iconDice.vue'
import patternDividerm from './icons/patternDividerm.vue'
import patternDividerd from './icons/patternDividerd.vue'

const advice = ref('')
const adviceId = ref(0)
const mobile = ref(false)

const getAdvice = async () => {
  try {
    const response = await axios.get('https://api.adviceslip.com/advice')
    advice.value = response.data.slip.advice //stores current advice
    adviceId.value = response.data.slip.id //stores current advice ID
  } catch (error) {
    console.log('Error fetching advice', error)
  }
}

const checkScreenSize = () => {
  // 768px is a common mobile screen size breakpoint
  mobile.value = window.innerWidth <= 768
}

// Check screen size when component is mounted
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize) // Update on window resize
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})

getAdvice()
</script>

<template>
  <div class="font-manrope flex items-center justify-center h-screen w-screen bg-Dark-Blue">
    <div
      class="max-w-96 md:mx-0 mx-6 md:min-h-64 min-h-96 bg-Dark-Grayish-Blue rounded-lg shadow-xl relative flex flex-col items-center justify-between p-4"
    >
      <h1 class="text-Neon-Green text-sm md:p-0 p-6">ADVICE #{{ adviceId }}</h1>
      <div class="flex justify-center">
        <p class="text-gray-100 text-center text-xl font-medium">"{{ advice }}"</p>
      </div>

      <patternDividerm class="mb-14" v-if="mobile" />
      <patternDividerd class="mb-4" v-else />

      <button
        @click="getAdvice"
        class="md:p-4 p-6 bg-Neon-Green rounded-full absolute md:top-[90%] md:left-[44%] top-[89%] left-[40%] active:shadow-[0_0_15px_5px_rgba(82,255,168,0.8)] md:hover:shadow-[0_0_15px_5px_rgba(82,255,168,0.8)] transition-shadow duration-300"
      >
        <iconDice />
      </button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  -webkit-text-stroke: 0.5px;
}
</style>
