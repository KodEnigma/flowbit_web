import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Zoltraa Technologies. Reach out for support, inquiries, or feedback about our expense tracking platform.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-mono">
      <Header />

      <section className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <p className="text-[#BABABA] text-[12px] font-medium tracking-wide mb-[4px]">
          SUPPORT
        </p>
        <h1 className="text-[28px]/[36px] md:text-[36px]/[44px] font-semibold text-[#1A1A1A] mb-2">
          Contact Us
        </h1>
        <p className="text-[#A3A3A3] text-[14px]/[20px] mb-12">
          Have a question or need help? Reach out and we&apos;ll get back to you.
        </p>

        <div className="flex flex-col gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[16px]/[24px] font-semibold text-[#1A1A1A]">
              Get in Touch
            </h2>
            <div className="flex flex-col gap-3 text-[14px]/[22px] text-[#555555]">
              <p>+234 705 293 6789</p>
              <p>admin@zoltraa.com</p>
              <p>775 Rolling Green Rd.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[16px]/[24px] font-semibold text-[#1A1A1A]">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[13px] text-[#888888]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="issue" className="text-[13px] text-[#888888]">
                  Issue Type
                </label>
                <select
                  id="issue"
                  name="issue"
                  required
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] focus:outline-none focus:border-gray-400 transition-colors bg-white"
                >
                  <option value="" disabled>Select an issue type</option>
                  <option value="general">General Inquiry</option>
                  <option value="account">Account Issue</option>
                  <option value="billing">Billing</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="privacy">Privacy Concern</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="description" className="text-[13px] text-[#888888]">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>

              <button
                type="submit"
                className="self-start bg-[#1A1A1A] text-white text-[14px] font-medium px-6 py-2.5 rounded-md hover:bg-black transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
