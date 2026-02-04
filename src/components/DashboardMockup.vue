<template>
  <div class="relative @container">
    <div class="glass-card rounded-3xl p-6 lg:p-8 flex flex-col gap-6 relative z-10 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-slate-500 text-xs font-bold uppercase">Total Balance</p>
          <h3 class="text-3xl font-black">₦4,250,000.00</h3>
        </div>
        <div class="size-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
          <span class="material-symbols-outlined">visibility</span>
        </div>
      </div>
      <!-- Monthly Spending Chart Component -->
      <div class="bg-white/40 dark:bg-slate-800/40 p-4 rounded-2xl border border-white/50">
        <div class="flex justify-between items-end h-32 gap-2">
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t-lg relative group" style="height: 45%;">
            <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t-lg relative group" style="height: 75%;">
            <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
          </div>
          <div class="w-full bg-primary rounded-t-lg shadow-lg shadow-primary/30" style="height: 100%;"></div>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t-lg relative group" style="height: 60%;">
            <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t-lg relative group" style="height: 85%;">
            <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
          </div>
        </div>
        <div class="flex justify-between mt-2 text-[10px] font-bold text-slate-400">
          <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span>
        </div>
      </div>
      <!-- Transaction Feed -->
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl">
          <div class="flex items-center gap-3">
            <div class="size-10 rounded-lg bg-orange-100 flex items-center justify-center text-lg">🍔</div>
            <div>
              <p class="text-sm font-bold">The Place Restaurant</p>
              <p class="text-[10px] text-slate-500">Today, 2:45 PM</p>
            </div>
          </div>
          <p class="text-sm font-black text-red-500">-₦12,500</p>
        </div>
        <div class="flex items-center justify-between p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl">
          <div class="flex items-center gap-3">
            <div class="size-10 rounded-lg bg-blue-100 flex items-center justify-center text-lg">🚗</div>
            <div>
              <p class="text-sm font-bold">Uber Trip</p>
              <p class="text-[10px] text-slate-500">Yesterday</p>
            </div>
          </div>
          <p class="text-sm font-black text-red-500">-₦4,200</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic required for this static mock-up component
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}
.dark .glass-card {
    background: rgba(16, 24, 34, 0.7);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}
</style>