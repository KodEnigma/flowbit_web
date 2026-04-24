"use client";

import { useState } from 'react';

const faqs = [
  {
    q: 'What banks and statements does Zoltraa support?',
    a: 'Zoltraa currently supports PDF statements from GTBank, Access Bank, Kuda, OPay, Moniepoint, PalmPay, and more. We\'re constantly adding new banks — reach out if yours isn\'t listed yet.',
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

type FAQItem = {
  q: string;
  a: string;
};

type FAQItemProps = {
  q: string;
  a: string;
  isOpen: boolean;
  isFirst: boolean;
  onToggle: () => void;
};

const ToggleIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {!open && <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />}
    <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const FAQItem = ({ q, a, isOpen, isFirst, onToggle }: FAQItemProps) => (
  <div
    style={{
      borderBottom: '1px dashed #E5E5E5',
      borderTop: isFirst ? 'none' : undefined,
    }}
  >
    <button
      className="flex items-center justify-between w-full py-[20px] text-left bg-transparent border-none cursor-pointer"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="text-[15px] font-medium text-[#1A1A1A]">{q}</span>
      <span className="flex items-center justify-center w-[20px] h-[20px] flex-shrink-0 text-[#1A1A1A]">
        <ToggleIcon open={isOpen} />
      </span>
    </button>
    <div
      style={{
        overflow: 'hidden',
        maxHeight: isOpen ? '200px' : '0',
        transition: 'max-height 0.3s ease',
      }}
    >
      <p className="text-[14px]/[20px] text-[#767676] pb-[20px] max-w-[480px]">{a}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-8 bg-white max-w-[810px] mx-auto" id="faq">
      <div className="flex gap-12">
        <div className="flex-shrink-0">
          <p className="text-[#BABABA] text-[12px] font-medium tracking-wide mb-[4px]">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-[36px]/[44px] font-semibold text-[#1A1A1A]">
            A few things you<br/> might ask
          </h2>
        </div>

        <div className="flex-grow"></div>

        <div className="flex flex-col w-[500px]">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isFirst={i === 0}
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
