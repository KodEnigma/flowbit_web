<template>
  <section class="px-6 lg:px-40 py-12">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-black">Privacy Policy</h1>
      </div>

      <p class="text-sm text-slate-600 mb-6">Effective date: February 4, 2026</p>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">1. Introduction</h2>
        <p class="text-slate-700">
          This Privacy Policy explains how Zoltraa Technologies ("Zoltraa", "we", "us", or "our")
          collects, uses, and discloses information about you when you access or use our services,
          including the Zoltraa web app (the “Service”).
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">2. Data We Collect</h2>
        <p class="text-slate-700">We may collect the following categories of information:</p>
        <ul class="list-disc pl-6 text-slate-700">
          <li>Account and profile information you provide (name, email, contact details).</li>
          <li>
            Bank connection data and transactional metadata that are necessary to provide the
            service. We do not store your actual bank credentials; instead we use secure token-based
            connections via trusted banking partners.
          </li>
          <li>
            Usage data, device information, and logs (IP address, browser type, operating system,
            page views, timestamps).
          </li>
          <li>
            Location data, where permitted by you, to enhance security and provide contextual
            features.
          </li>
          <li>
            Cookies and similar tracking technologies as further described in our Cookies Policy.
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">3. How We Use Your Data</h2>
        <p class="text-slate-700">
          We use your information to provide, maintain, and improve the Service, including:
        </p>
        <ul class="list-disc pl-6 text-slate-700">
          <li>To authenticate and verify you when you access your accounts.</li>
          <li>To aggregate and categorize transaction data for reporting and insights.</li>
          <li>To customize your experience and deliver personalized features.</li>
          <li>To communicate with you, including updates, security alerts, and support.</li>
          <li>
            To analyze usage patterns and improve the security and performance of the Service.
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">4. Data Sharing and Disclosure</h2>
        <p class="text-slate-700">We may share information with:</p>
        <ul class="list-disc pl-6 text-slate-700">
          <li>
            Service providers and contractors who perform services on our behalf (hosting,
            analytics, security, payment processing). These parties are bound by contractual
            obligations to protect your information.
          </li>
          <li>
            Banking partners and regulated entities as required by law or to provide the service.
          </li>
          <li>
            In connection with a business transaction, such as a merger, acquisition or sale of
            assets, subject to appropriate confidentiality obligations.
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">5. Data Retention and Security</h2>
        <p class="text-slate-700">
          We retain information for as long as necessary to provide the Service and fulfill the
          purposes described in this policy, subject to legal obligations. We implement reasonable
          security measures to protect information from unauthorized access, disclosure, alteration,
          and destruction.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">6. Your Rights</h2>
        <p class="text-slate-700">
          You may have rights to access, rectify, delete, or restrict processing of your personal
          data. You may also have the right to data portability and to object to certain processing
          activities. To exercise these rights, please contact us using the details below.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">7. Cookies and Tracking</h2>
        <p class="text-slate-700">
          We use cookies and similar technologies to collect information about your use of the
          Service. For more details, please see our Cookies Policy.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">8. International Transfers</h2>
        <p class="text-slate-700">
          Your information may be transferred to and processed in jurisdictions outside your country
          of residence, including during storage and processing by our service providers. We take
          steps to ensure adequate safeguards for such transfers.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">9. Changes to This Policy</h2>
        <p class="text-slate-700">
          We may update this Privacy Policy from time to time. We will notify you of material
          changes by posting the new policy on this page and updating the effective date.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-2">10. Contact Us</h2>
        <p class="text-slate-700">
          If you have questions about this Privacy Policy or how we handle your information, contact
          us at privacy@zoltraa.example.
        </p>
      </section>
    </div>
  </section>
</template>

<script setup>
defineEmits(['navigateBack'])
</script>

<style scoped>
/* Reuse existing button styles for consistency */
.glow-button {
  box-shadow: 0 0 15px rgba(43, 124, 238, 0.4);
  transition: all 0.3s ease;
}
.glow-button:hover {
  box-shadow: 0 0 25px rgba(43, 124, 238, 0.6);
  transform: translateY(-1px);
}
</style>
