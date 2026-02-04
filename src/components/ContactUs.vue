<template>
  <section
    class="w-full py-12 md:py-16 lg:py-20 px-6 lg:px-40 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
  >
    <div class="max-w-[1200px] mx-auto">
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        <div class="grid md:grid-cols-2 min-h-[500px]">
          <!-- Left Side - Contact Info -->
          <div class="p-8 md:p-12 bg-slate-50 dark:bg-slate-900 flex flex-col">
            <button
              @click="$emit('navigateBack', '/')"
              class="mb-8 flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </button>

            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

            <div class="space-y-4 flex-1">
              <div
                class="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div
                  class="size-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-primary"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                </div>
                <span class="font-medium text-slate-700 dark:text-slate-300">+234 705 293 6789</span>
              </div>

              <div
                class="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div class="size-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span class="font-medium text-slate-700 dark:text-slate-300">admin@zoltraa.com</span>
              </div>

              <div
                class="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div
                  class="size-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span class="font-medium text-slate-700 dark:text-slate-300"
                  >775 Rolling Green Rd.</span
                >
              </div>
            </div>
          </div>

          <!-- Right Side - Contact Form -->
          <div class="p-8 md:p-12">
            <div
              v-if="showSuccess"
              class="h-full flex flex-col items-center justify-center text-center"
            >
              <div
                class="size-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-green-600 dark:text-green-400"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h2>
              <p class="text-slate-600 dark:text-slate-400 mb-6">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
              <button
                @click="resetForm"
                class="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Send Another Message
              </button>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >Email Address</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="youremail@email.com"
                  class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >Issue Type</label
                >
                <select
                  v-model="form.issueType"
                  required
                  class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>Select an issue type</option>
                  <option value="account">Account Issues</option>
                  <option value="data-deletion">Data Deletion Request</option>
                  <option value="billing">Billing Support</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback/Suggestions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >Description</label
                >
                <textarea
                  v-model="form.description"
                  required
                  rows="5"
                  placeholder="Please describe your issue in detail..."
                  class="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-slate-800 dark:bg-slate-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
                <svg
                  v-if="!isSubmitting"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="22" x2="11" y1="2" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <svg
                  v-else
                  class="animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

defineEmits(['navigateBack'])

const isSubmitting = ref(false)
const showSuccess = ref(false)

const form = reactive({
  email: '',
  issueType: '',
  description: '',
})

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate API call with 2 second delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  isSubmitting.value = false
  showSuccess.value = true
}

const resetForm = () => {
  form.email = ''
  form.issueType = ''
  form.description = ''
  showSuccess.value = false
}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
