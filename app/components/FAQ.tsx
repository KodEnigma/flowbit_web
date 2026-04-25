"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What banks and statements does Zoltraa support?',
    a: "Zoltraa currently supports PDF statements from GTBank, Access Bank, Kuda, OPay, Moniepoint, PalmPay, and more. We're constantly adding new banks — reach out if yours isn't listed yet.",
  },
  {
    q: 'Is my financial data safe with Zoltraa?',
    a: 'Yes. Your uploaded statements are processed securely and never shared with third parties. We use encryption in transit and at rest to keep your data private.',
  },
  {
    q: 'What can the AI assistant (Zolt) actually do?',
    a: 'Zolt can search your transactions by description or amount, compare your spending across periods, surface insights about your habits, and answer natural language questions about your finances.',
  },
  {
    q: 'Do I need to manually categorize my transactions?',
    a: 'No. Zoltraa automatically normalizes and categorizes your transactions using our AI pipeline, even for tricky bank descriptions with references and amounts baked in.',
  },
  {
    q: "What's the difference between the Free and Pro plans?",
    a: 'The Free plan gives you core transaction insights and basic AI chat. Pro unlocks unlimited history, advanced period comparisons, priority AI responses, and richer spending analytics.',
  },
];

type FAQItemProps = {
  q: string;
  a: string;
  isOpen: boolean;
  isFirst: boolean;
  index: number;
  hasEntered: boolean;
  onToggle: () => void;
};

const ToggleIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <AnimatePresence>
      {!open && (
        <motion.line
          x1="7" y1="0" x2="7" y2="14"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.15 }}
        />
      )}
    </AnimatePresence>
    <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" />
  </motion.svg>
);

const FAQItem = ({ q, a, isOpen, isFirst, index, hasEntered, onToggle }: FAQItemProps) => (
  <motion.div
    style={{ borderBottom: '1px dashed #E5E5E5', borderTop: isFirst ? 'none' : undefined }}
    initial={{ opacity: 0, y: 16 }}
    animate={hasEntered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.2 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.button
      className="flex items-start justify-between w-full py-[20px] text-left bg-transparent border-none cursor-pointer"
      onClick={onToggle}
      aria-expanded={isOpen}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.15 }}
    >
      <motion.span
        className="text-[15px] font-medium"
        animate={{ color: isOpen ? '#1A1A1A' : '#3A3A3A' }}
        transition={{ duration: 0.2 }}
      >
        {q}
      </motion.span>
      <motion.span
        className="flex items-center justify-center w-[20px] h-[20px] flex-shrink-0 text-[#1A1A1A] ml-4"
        animate={{ rotate: isOpen ? 0 : 0 }}
      >
        <ToggleIcon open={isOpen} />
      </motion.span>
    </motion.button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25 } }}
          style={{ overflow: 'hidden' }}
        >
          <motion.p
            className="text-[14px]/[20px] text-[#767676] pb-[20px] max-w-[480px]"
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            exit={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {a}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section ref={sectionRef} className="py-16 px-8 bg-white max-w-[810px] mx-auto" id="faq">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Heading */}
        <div className="md:flex-shrink-0">
          <motion.p
            className="text-[#BABABA] text-[12px] font-medium tracking-wide mb-[4px]"
            initial={{ opacity: 0, y: 10 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.0 }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.p>
          <motion.h2
            className="text-[28px]/[36px] md:text-[36px]/[44px] font-semibold text-[#1A1A1A]"
            initial={{ opacity: 0, y: 14 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            A few things you<br /> might ask
          </motion.h2>
        </div>

        <div className="hidden md:block flex-grow" />

        {/* FAQ list */}
        <div className="flex flex-col w-full md:w-[500px]">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isFirst={i === 0}
              index={i}
              hasEntered={hasEntered}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
