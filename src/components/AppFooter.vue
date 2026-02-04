<template>
  <footer class="px-6 lg:px-40 py-12 border-t border-slate-200 dark:border-slate-800">
    <div
      class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <div class="flex items-center gap-3">
        <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <span class="material-symbols-outlined text-sm font-bold">account_balance_wallet</span>
        </div>
        <h2 class="text-lg font-extrabold tracking-tight">Zoltraa</h2>
      </div>
      <div class="flex gap-8 text-sm font-semibold text-slate-500">
        <a class="hover:text-primary transition-colors" href="#">Twitter</a>
        <a class="hover:text-primary transition-colors" href="#">LinkedIn</a>
        <a
          class="hover:text-primary transition-colors"
          href="/privacy"
          @click.prevent="$emit('navigate', '/privacy')"
          >Privacy</a
        >
        <a
          class="hover:text-primary transition-colors"
          href="/terms"
          @click.prevent="$emit('navigate', '/terms')"
          >Terms</a
        >
      </div>
      <p class="text-xs text-slate-400">© 2026 Zoltraa Technologies. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Emit navigation events to parent (e.g., to show Privacy Policy)
defineEmits(['navigate'])
</script>

<style scoped>
/* No unique styles needed, relying on Tailwind and base.css */
</style>
