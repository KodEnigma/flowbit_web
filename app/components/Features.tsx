'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Clear Spending Breakdown',
      desc: 'Get visual summaries of your income and expenses at a glance. Quickly identify key spending areas and make smarter financial decisions with confidence.',
      gif: './solution_1.gif',
    },
    {
      title: 'Smart Transaction Insights',
      desc: 'Zoltraa analyzes your transactions and automatically organizes your spending. Spot trends, understand your habits, and see exactly where your money goes over time.',
      gif: './solution_2.gif',
    },
    {
      title: 'Ask Anything About Your Money',
      desc: 'Interact with your finances using simple questions. Ask things like "How much did I spend this month?" and get instant, easy-to-understand answers.',
      gif: './solution_3.gif',
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const headingInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="mt-[100px] bg-white py-16 px-4 md:px-8" id="solution">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0 max-w-[810px] mx-auto">

        {/* Sticky text column — top on mobile, side on desktop */}
        <div className="sticky z-10 bg-white py-4 w-full md:py-3 md:w-auto md:self-start" style={{ top: 'max(56px, env(safe-area-inset-top))' }}>
          <motion.p
            className="text-[#BABABA] mb-[4px] text-[12px] font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            OUR SOLUTION
          </motion.p>
          <motion.h2
            className="text-[36px]/[44px] font-semibold mb-[10px] text-[#1A1A1A]"
            initial={{ opacity: 0, y: 14 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            So... what does <br /> Zoltraa actually do?
          </motion.h2>
          <motion.p
            className="text-[#767676] text-[14px]/[20px]"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            A simple look at what Zoltraa offers you.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 w-full md:w-[420px]">
          {features.map((f, i) => (
            <FeatureItem key={i} feature={f} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

const FeatureItem = ({ feature, index }: { feature: { title: string; desc: string; gif: string }; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="border border-[#0000000D] rounded-[12px] h-[232px] w-full bg-[#FBFBFB] overflow-hidden"
        whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
        transition={{ duration: 0.25 }}
      >
        <img src={feature.gif} alt="Solution Gif" className="w-full h-full object-contain" />
      </motion.div>
      <div className="mt-4" />
      <motion.h3
        className="font-medium text-[16px]/[24px] mb-[4px] text-[#4797F6]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
      >
        {feature.title}
      </motion.h3>
      <motion.p
        className="text-[14px]/[20px] text-[#767676]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.25 + index * 0.1 }}
      >
        {feature.desc}
      </motion.p>
    </motion.div>
  );
};

export default Features;
