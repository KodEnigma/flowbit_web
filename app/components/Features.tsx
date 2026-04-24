'use client';

import { useEffect, useRef } from 'react';

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

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('feature-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .feature-item {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .feature-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="mt-[100px] bg-white py-16 px-4 md:px-8" id="solution">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0 max-w-[810px] mx-auto">

          {/* Sticky text column — top on mobile, side on desktop */}
          <div className="sticky top-0 z-10 bg-white py-4 w-full md:py-0 md:w-auto md:sticky md:top-[100px] md:self-start">
            <p className="text-[#BABABA] mb-[4px] text-[12px] font-medium">OUR SOLUTION</p>
            <h2 className="text-[36px]/[44px] font-semibold mb-[10px] text-[#1A1A1A]">
              So... what does <br /> Zoltraa actually do?
            </h2>
            <p className="text-[#767676] text-[14px]/[20px]">A simple look at what Zoltraa offers you.</p>
          </div>

          <div className="flex flex-col gap-12 w-full md:w-[420px]">
            {features.map((f, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="feature-item"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="border border-[#0000000D] rounded-[12px] h-[232px] w-full bg-[#FBFBFB]">
                  <img src={f.gif} alt="Solution Gif" className="w-full h-full object-contain" />
                </div>
                <div className="mt-4" />
                <h3 className="font-medium text-[16px]/[24px] mb-[4px] text-[#4797F6]">{f.title}</h3>
                <p className="text-[14px]/[20px] text-[#767676]">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Features;
