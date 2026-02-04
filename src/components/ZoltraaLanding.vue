<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
    <AppHeader @toggle-theme="handleThemeToggle" />

    <main class="flex-1">
      <div v-if="isHome">
        <HeroSection />
        <CategoryPills />
        <HowItWorksSection />
        <FinalCTA />
      </div>
      <div v-else-if="isPrivacy">
        <PrivacyPolicy @navigateBack="() => push('/')" />
      </div>
      <div v-else-if="isTerms">
        <TermsOfService @navigateBack="() => push('/')" />
      </div>
    </main>

    <AppFooter @navigate="(path) => push(path)" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import AppHeader from './AppHeader.vue'
import HeroSection from './HeroSection.vue'
import CategoryPills from './CategoryPills.vue'
import HowItWorksSection from './HowItWorksSection.vue'
import FinalCTA from './FinalCTA.vue'
import AppFooter from './AppFooter.vue'
import PrivacyPolicy from './PrivacyPolicy.vue'
import TermsOfService from './TermsOfService.vue'

import { useRouter } from '../router.js'
const { route, push } = useRouter()
const isHome = computed(() => route.value === '/')
const isPrivacy = computed(() => route.value === '/privacy')
const isTerms = computed(() => route.value === '/terms')

const isDarkMode = ref(false)
const handleThemeToggle = () => {
  isDarkMode.value = !isDarkMode.value
}

watch(
  isDarkMode,
  (newVal) => {
    const body = document.body
    if (newVal) {
      body.classList.add('dark')
      body.classList.remove('light')
    } else {
      body.classList.add('light')
      body.classList.remove('dark')
    }
  },
  { immediate: true },
)

onMounted(() => {
  const body = document.body
  const initialClassIsDark = body.classList.contains('dark')
  if (initialClassIsDark !== isDarkMode.value) {
    isDarkMode.value = initialClassIsDark
  }
})
</script>

<style>
:root {
  --primary: #2b7cee;
  --background-light: #f6f7f8;
  --background-dark: #101822;
}

.vibrant-gradient {
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
