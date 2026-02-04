<template>
  <section class="px-6 lg:px-40 py-16 lg:py-24 vibrant-gradient dark:bg-none">
    <div class="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="flex flex-col gap-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
          <span class="material-symbols-outlined text-sm">auto_awesome</span>
          AI-Powered Finance
        </div>
        <h1 class="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
          All your bank accounts. <span class="text-primary">One vibrant view.</span>
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
          Stop chasing bank alerts. Flowbit aggregates your Nigerian accounts into a single, beautiful dashboard with AI that categorizes every Kobo automatically.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="glow-button flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-white transition-all">
            Start Organizing for Free
          </button>
          <div class="flex items-center gap-4 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl">
            <div class="flex -space-x-2">
              <div class="size-8 rounded-full bg-teal-400 border-2 border-white dark:border-slate-900"></div>
              <div class="size-8 rounded-full bg-blue-400 border-2 border-white dark:border-slate-900"></div>
              <div class="size-8 rounded-full bg-indigo-400 border-2 border-white dark:border-slate-900"></div>
            </div>
            <span class="text-xs font-bold text-slate-500">Joined by 10k+ Nigerians</span>
          </div>
        </div>
      </div>
      <!-- Floating Glass Dashboard -->
      <DashboardMockup />
    </div>
  </section>
</template>

<script setup>
import DashboardMockup from './DashboardMockup.vue';

// Define global styles needed that are not covered by Tailwind or base.css
</script>

<style scoped>
.glow-button {
    box-shadow: 0 0 15px rgba(43, 124, 238, 0.4);
    transition: all 0.3s ease;
}

.glow-button:hover {
    box-shadow: 0 0 25px rgba(43, 124, 238, 0.6);
    transform: translateY(-1px);
}

.vibrant-gradient {
    background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
}
</style>