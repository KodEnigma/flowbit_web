<template>
  <header class="sticky top-0 z-50 px-6 lg:px-40 py-4 glass-card border-b border-solid border-white/20">
    <div class="max-w-[1200px] mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
          <span class="material-symbols-outlined font-bold">account_balance_wallet</span>
        </div>
        <h2 class="text-xl font-extrabold tracking-tight">Flowbit</h2>
      </div>
      <nav class="hidden md:flex items-center gap-10">
        <a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Features</a>
        <a class="text-sm font-semibold hover:text-primary transition-colors" href="#">How it Works</a>
        <a class="text-sm font-semibold hover:text-primary transition-colors" href="#">Pricing</a>
      </nav>
      <div class="flex items-center gap-3">
        <button class="hidden sm:block px-5 py-2 text-sm font-bold bg-slate-200/50 dark:bg-slate-800 rounded-xl hover:bg-slate-200 transition-all">Log In</button>
        <button class="glow-button px-6 py-2 text-sm font-bold bg-primary text-white rounded-xl" @click="$emit('toggleTheme')">Get Started</button>
      </div>
    </div>
  </header>
</template>

<script setup>
// Define emit to communicate theme toggle request up to the parent (FlowbitLanding)
defineEmits(['toggleTheme'])
</script>

<style scoped>
/* Scoped styles required for custom classes if they aren't globally defined, 
   but we rely on Tailwind/global styles. Replicating necessary custom CSS here for safety. */
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}

.glow-button {
    box-shadow: 0 0 15px rgba(43, 124, 238, 0.4);
    transition: all 0.3s ease;
}

.glow-button:hover {
    box-shadow: 0 0 25px rgba(43, 124, 238, 0.6);
    transform: translateY(-1px);
}
</style>