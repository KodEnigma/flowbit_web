import type { Metadata } from 'next';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Zoltraa — Smart Expense Tracking',
  description:
    'Track your spending with bank statement analysis that never stores your files. Your financial data stays in-memory and is deleted after processing.',
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}


