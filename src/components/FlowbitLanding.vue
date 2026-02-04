<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
    <AppHeader @toggle-theme="handleThemeToggle" />

    <main class="flex-1">
      <HeroSection />

      <CategoryPills />

      <HowItWorksSection />

      <FinalCTA />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import AppHeader from './AppHeader.vue';
import HeroSection from './HeroSection.vue';
import CategoryPills from './CategoryPills.vue';
import HowItWorksSection from './HowItWorksSection.vue';
import FinalCTA from './FinalCTA.vue';
import AppFooter from './AppFooter.vue';

const isDarkMode = ref(false);
const handleThemeToggle = () => {
    // isDarkMode.value = !isDarkMode.value;
};

watch(isDarkMode, (newVal) => {
    const body = document.body;
    if (newVal) {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }
}, { immediate: true });

onMounted(() => {
    const body = document.body;
    const initialClassIsDark = body.classList.contains('dark');
    if (initialClassIsDark !== isDarkMode.value) {
        isDarkMode.value = initialClassIsDark;
    }
});
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
