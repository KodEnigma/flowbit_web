import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Zoltraa',
  description: 'Terms of Service for Zoltraa Technologies.',
};

const sections = [
  {
    title: '1. Introduction',
    body: `These Terms of Service (the "Terms") govern your use of Zoltraa Technologies and its services (the "Service"). By accessing or using the Service you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Service.`,
    note: 'Disclaimer: The information in these Terms is provided for general informational purposes only and does not constitute legal advice. For specific legal guidance, consult a licensed attorney in your jurisdiction.',
  },
  {
    title: '2. Acceptance of Terms',
    body: `By creating an account or using the Service, you accept and agree to these Terms and the policies referenced herein. If you are using the Service on behalf of a company, you represent that you have the authority to bind that entity and its affiliates to these Terms.`,
  },
  {
    title: '3. Changes to Terms',
    body: `We may update these Terms from time to time. We will notify you of changes by posting the new Terms on this page and updating the "Effective Date". You are responsible for reviewing these Terms periodically for changes. Your continued use of the Service after changes are posted constitutes your binding acceptance of the updated Terms.`,
  },
  {
    title: '4. Use of the Service',
    body: `You may use the Service only for lawful purposes and in compliance with these Terms. You agree not to misuse the Service or its features, including attempting to access services or data without authorization, disrupting the service, or using it to distribute malware or spam.`,
  },
  {
    title: '5. Account Registration and Security',
    body: `You must provide accurate information when creating an account and keep your credentials confidential. You are responsible for all activity that occurs under your account. Notify us immediately of any unauthorized use or security breach.`,
  },
  {
    title: '6. Intellectual Property',
    body: `All content and materials on the Service, including software, logos, and text, are owned by Zoltraa or its licensors. You may not use, reproduce, or distribute our IP except as expressly permitted by us or as provided by applicable law.`,
  },
  {
    title: '7. User Content and Conduct',
    body: `If you provide content to the Service, you grant Zoltraa a license to use, reproduce, and display that content in connection with the Service. You are responsible for your content and agree not to post content that is illegal, infringing, or harmful to others.`,
  },
  {
    title: '8. Privacy',
    body: `Our Privacy Policy explains how we collect, use, and disclose information about you. By using the Service, you consent to the privacy practices described there.`,
  },
  {
    title: '9. Third-Party Links and Services',
    body: `The Service may contain links to third-party websites or services. We do not endorse or assume responsibility for their content or practices. Your interactions with any third parties are solely between you and the third party.`,
  },
  {
    title: '10. Disclaimers and Limitation of Liability',
    body: `The Service is provided "as is" without warranty of any kind. We do not guarantee that the Service will be uninterrupted, secure, or error-free. To the maximum extent permitted by law, Zoltraa and its affiliates are not liable for indirect, incidental, special, punitive, or consequential damages arising from your use of the Service.`,
  },
  {
    title: '11. Indemnification',
    body: `You agree to defend, indemnify, and hold harmless Zoltraa and its officers, directors, employees, and affiliates from any claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of the Service or violation of these Terms.`,
  },
  {
    title: '12. Governing Law and Disputes',
    body: `These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of laws principles. Any disputes arising out of or in connection with these Terms shall be resolved in the courts of Nigeria or through binding arbitration in Lagos, Nigeria, under the Arbitration and Conciliation Act, as applicable.`,
  },
  {
    title: '13. Termination',
    body: `We may suspend or terminate your access to the Service at any time for any reason, including violation of these Terms. Upon termination, you must cease all use of the Service and destroy any copies of our materials in your possession.`,
  },
  {
    title: '14. Export Controls',
    body: `You agree to comply with all export and re-export restrictions and will not transfer the Service to any sanctioned country or individual target by applicable law.`,
  },
  {
    title: '15. General Provisions',
    body: `If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect. Our failure to enforce any right or provision will not constitute a waiver of such right or provision.`,
  },
  {
    title: '16. Entire Agreement',
    body: `These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Zoltraa regarding the Service and supersede all prior agreements.`,
  },
  {
    title: '17. Do Not Sell My Personal Data',
    body: `To the extent applicable under local law, this section covers consumer rights related to data privacy. If applicable in your jurisdiction, you may have rights to opt out of the sale of personal data. (Note: this section is a placeholder for regions with such rights and may not apply in all jurisdictions.)`,
  },
  {
    title: '18. Contact Information',
    body: `If you have questions about these Terms, contact us at legal@zoltraa.example.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-mono">
      <Header />

      <section className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <p className="text-[#BABABA] text-[12px] font-medium tracking-wide mb-[4px]">
          LEGAL
        </p>
        <h1 className="text-[28px]/[36px] md:text-[36px]/[44px] font-semibold text-[#1A1A1A] mb-2">
          Terms of Service
        </h1>
        <p className="text-[#A3A3A3] text-[14px]/[20px] mb-12">
          Effective date: February 4, 2026
        </p>

        <div className="flex flex-col gap-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-[16px]/[24px] font-semibold text-[#1A1A1A] mb-2">
                {s.title}
              </h2>
              <p className="text-[14px]/[22px] text-[#555555]">
                {s.body}
              </p>
              {s.note && (
                <p className="text-[13px]/[20px] text-[#888888] mt-2 italic">
                  {s.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
