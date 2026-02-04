<template>
  <section class="px-6 lg:px-40 py-20 bg-background-light dark:bg-slate-900/50">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col items-center text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-black">How Flowbit Works</h2>
        <div class="w-20 h-1.5 bg-primary rounded-full mt-4"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Card 1: Connect Banks -->
        <div class="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 group">
          <div class="size-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-4xl">account_balance</span>
          </div>
          <h3 class="text-xl font-bold mb-3">Connect Banks</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Securely link your GTB, Zenith, Kuda, and more in seconds using bank-grade encryption.</p>
        </div>
        <!-- Card 2: AI Analysis -->
        <div class="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 group">
          <div class="size-20 bg-teal-400/10 rounded-2xl flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-4xl">psychology</span>
          </div>
          <h3 class="text-xl font-bold mb-3">AI Analysis</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Our AI scans your transactions and categorizes them automatically. No manual entry required.</p>
        </div>
        <!-- Card 3: Get Insights -->
        <div class="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 group">
          <div class="size-20 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-4xl">insights</span>
          </div>
          <h3 class="text-xl font-bold mb-3">Get Insights</h3>
          <p class="text-slate-500 text-sm leading-relaxed">See where your money goes with vibrant charts and smart spending alerts that keep you on track.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic required for this static section
</script>

<style scoped>
/* Relying on global styles for primary/background colors. */
</style>