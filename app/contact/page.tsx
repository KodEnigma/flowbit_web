import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrackedLink } from './TrackedLink';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach Zoltraa support for account issues, billing questions, bug reports, and privacy inquiries.',
};

const channels: {
  label: string;
  value: string;
  href?: string;
  description: string;
}[] = [
  {
    label: 'Email',
    value: 'admin@zoltraa.com',
    href: 'mailto:admin@zoltraa.com',
    description: 'Account questions, billing, and general support.',
  },
  {
    label: 'Privacy matters',
    value: 'privacy@zoltraa.com',
    href: 'mailto:privacy@zoltraa.com?subject=Privacy%20Inquiry',
    description: 'Data removal requests and policy concerns.',
  },
  {
    label: 'Phone',
    value: '+234 705 293 6789',
    href: 'tel:+2347052936789',
    description: 'Weekdays, 9am–5pm WAT.',
  },
  {
    label: 'Mail',
    value: '775 Rolling Green Rd.',
    description: 'Formal correspondence only.',
  },
];

const topics = [
  { label: 'Account issue', to: 'admin@zoltraa.com?subject=Account%20Issue' },
  { label: 'Billing', to: 'admin@zoltraa.com?subject=Billing' },
  { label: 'Bug report', to: 'admin@zoltraa.com?subject=Bug%20Report' },
  { label: 'Feature request', to: 'admin@zoltraa.com?subject=Feature%20Request' },
  { label: 'Data and privacy', to: 'privacy@zoltraa.com?subject=Privacy%20Inquiry' },
] as const;

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <p className="text-[#BABABA] text-[12px] font-medium tracking-wide mb-[4px]">
          SUPPORT
        </p>
        <h1 className="text-[28px]/[36px] md:text-[36px]/[44px] font-semibold text-[#1A1A1A] mb-2">
          We&rsquo;re here to help
        </h1>
        <p className="text-[#A3A3A3] text-[14px]/[20px] mb-12 max-w-[540px]">
          Questions about your account, your data, or the product? Reach us directly
          and we&rsquo;ll respond within one business day.
        </p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="flex-1 space-y-8">
            {channels.map((c) => (
              <div key={c.label}>
                <p className="text-[11px] font-medium text-[#BABABA] tracking-wide mb-1 uppercase">
                  {c.label}
                </p>
                {c.href ? (
                  <TrackedLink
                    href={c.href}
                    label={c.label}
                    className="text-[14px] font-medium text-[#4797F6] hover:text-[#3578D4] transition-colors"
                  >
                    {c.value}
                  </TrackedLink>
                ) : (
                  <p className="text-[14px] text-[#555555]">{c.value}</p>
                )}
                {c.description && (
                  <p className="text-[13px] text-[#767676] mt-0.5">{c.description}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <h2 className="text-[14px] font-semibold text-[#1A1A1A] mb-4">
              Choose your topic
            </h2>
            <div className="space-y-3">
              {topics.map((t) => (
                <TrackedLink
                  key={t.label}
                  href={`mailto:${t.to}`}
                  label={t.label}
                  className="flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4797F6] shrink-0" />
                  <span className="text-[14px] text-[#555555] group-hover:text-[#1A1A1A] transition-colors">
                    {t.label}
                  </span>
                </TrackedLink>
              ))}
            </div>
            <p className="mt-8 text-[13px] text-[#767676] leading-[1.6]">
              We aim to respond within{' '}
              <strong className="text-[#1A1A1A] font-medium">one business day</strong>.
              For urgent issues, include{' '}
              <strong className="text-[#1A1A1A] font-medium">Urgent</strong> in your
              subject line.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
