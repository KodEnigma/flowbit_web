"use client";
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { openDeviceStore, getDeviceStoreUrl, APP_STORE_URL } from '../lib/storeLinks';
import { trackStoreOpen } from '../lib/analytics';

type Feature = { desc: string };

type PricingCardProps = {
  tier: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  description: string;
  features: Feature[];
  ctaLabel: string;
  ctaNote: string;
  highlighted?: boolean;
  delay?: number;
  hasEntered: boolean;
};

const freeFeatures: Feature[] = [
  { desc: '✓  Upload transaction history (PDF)' },
  { desc: '✓  Smart transaction insights' },
  { desc: '✓  Spending breakdown' },
  { desc: '✓  AI chat access' },
];

const proFeatures: Feature[] = [
  { desc: '✓  Everything in Free' },
  { desc: '✓  Unlimited transaction history' },
  { desc: '✓  Advanced period comparisons' },
  { desc: '✓  Priority AI responses' },
  { desc: '✓  Richer spending analytics' },
];

const PricingCard = ({
  tier,
  price,
  originalPrice,
  badge,
  description,
  features,
  ctaLabel,
  ctaNote,
  highlighted = false,
  delay = 0,
  hasEntered,
}: PricingCardProps) => {
  return (
    <motion.div
      className="flex flex-col flex-1 min-w-[280px] max-w-[392px]"
      initial={{ opacity: 0, y: 32 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div
        className="p-[24px] rounded-[12px] flex flex-col h-full"
        style={{
          border: highlighted ? '1.5px solid #4797F6' : '1px solid #E5E5E5',
          background: highlighted ? '#F6FAFF' : '#FFFFFF',
        }}
      >
        {/* Tier + price */}
        <div className="flex items-center justify-between gap-3 mb-[4px]">
          <h3 className="text-[#A3A3A3] font-medium text-[14px]">{tier}</h3>
          {badge && (
            <span className="shrink-0 rounded-full bg-[#E8F2FF] px-[10px] py-[4px] text-[11px]/[14px] font-semibold text-[#2878D8]">
              {badge}
            </span>
          )}
        </div>
        <div className="mb-[12px] flex flex-wrap items-baseline gap-x-[10px] gap-y-[2px]">
          <p className="text-[24px]/[32px] font-semibold text-[#1A1A1A]">{price}</p>
          {originalPrice && (
            <p className="text-[14px]/[20px] font-medium text-[#A3A3A3] line-through">
              {originalPrice}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-[14px]/[20px] text-[#A3A3A3] mb-[30px]">{description}</p>

        {/* Features */}
        <ul className="space-y-[16px] text-[14px]/[20px] mb-8 text-[#000000]">
          {features.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={hasEntered ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: delay + 0.15 + i * 0.06 }}
            >
              {f.desc}
            </motion.li>
          ))}
        </ul>

        <div className="flex-grow" />

        {/* CTA */}
        <motion.button
          type="button"
          onClick={() => {
            trackStoreOpen(getDeviceStoreUrl() === APP_STORE_URL ? 'apple' : 'android', 'pricing')
            openDeviceStore()
          }}
          className="w-full py-[10px] rounded-[12px] font-medium text-[14px] transition-colors"
          style={
            highlighted
              ? { background: '#4797F6', color: '#FFFFFF' }
              : { background: '#F5F5F5', color: '#7B7B7B' }
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          {ctaLabel}
        </motion.button>

        <div className="flex flex-col items-center justify-center mt-[20px]">
          <p className="text-[12px]/[16px] text-[#A3A3A3]">{ctaNote}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TextColumn = ({ hasEntered }: { hasEntered: boolean }) => (
  <div className="flex flex-col items-start">
    <motion.p
      className="text-[#BABABA] mb-[4px] text-[12px] font-medium tracking-wide"
      initial={{ opacity: 0, y: 10 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.0 }}
    >
      PRICING
    </motion.p>
    <motion.h2
      className="text-[36px]/[44px] font-semibold mb-[10px] text-[#1A1A1A]"
      initial={{ opacity: 0, y: 14 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      Let&apos;s talk <br /> Zoltraa pricing
    </motion.h2>
    <motion.p
      className="text-[#767676] text-[14px]/[20px]"
      initial={{ opacity: 0, y: 10 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.14 }}
    >
      Choose the plan that&apos;s right for you on Zoltraa
    </motion.p>
  </div>
);

const Pricing = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasEntered(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 bg-white max-w-[810px] mx-auto"
      id="pricing"
    >
      <TextColumn hasEntered={hasEntered} />

      <div className="flex flex-wrap justify-start gap-8 mt-[32px]">
        <PricingCard
          tier="Basic"
          price="Free"
          description="Get started with Zoltraa at no cost. Upload your transaction history and start exploring your financial insights instantly."
          features={freeFeatures}
          ctaLabel="Start for Free"
          ctaNote="Best for getting started"
          delay={0.2}
          hasEntered={hasEntered}
        />
        <PricingCard
          tier="Pro"
          price="Free for now"
          originalPrice="₦2,500/mo"
          badge="Beta free"
          description="Use Pro free while we're figuring out the best pricing. It will become a paid plan later, but you can unlock the full Pro experience now."
          features={proFeatures}
          ctaLabel="Try Pro Free"
          ctaNote="Paid plan coming later"
          highlighted
          delay={0.32}
          hasEntered={hasEntered}
        />
      </div>
    </section>
  );
};

export default Pricing;
