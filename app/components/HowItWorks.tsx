"use client";
import { useState } from "react";



const steps = [
  {
    title: 'Connect Your Accounts',
    desc: 'Securely link your bank accounts in seconds and bring all your financial data into one place.',
    video: './how_it_work_1.qt',
  },
  {
    title: 'We Analyze Your Transactions',
    desc: 'Zoltraa automatically categorizes and processes your transactions to surface meaningful patterns.',
    video: './how_it_work_2.qt',
  },
  {
    title: 'Get Insights & Ask Questions',
    desc: 'View clear summaries of your finances or ask questions to get instant answers about your spending.',
    video: './how_it_work_3.qt',
  },
];


const HowItWorks = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="py-16 px-8" id="how">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 max-w-[810px] mx-auto">
        {whatItDoes(active, setActive)}
        <div className="w-full md:w-[420px] h-[484px] bg-[#FBFBFB] border border-[#0000000D] rounded-[12px] p-4 overflow-hidden">
          <video
            key={steps[active].video}
            src={steps[active].video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

const textColum = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-[#BABABA] mb-[4px] font-[12px] font-medium">HOW IT WORKS</p>

      <h2 className="text-[36px]/[44px] font-semibold mb-[10px] text-[#1A1A1A]">
        Okay, but how does<br /> Zoltraa work?
      </h2>

      <p className="text-[#767676] font-[14px]/[20px]">How Zoltraa works, at a glance.</p>
    </div>
  );
};

const whatItDoes = (active: number, setActive: (active: number) => void) => {
  return (
    <div className="flex flex-col w-full md:w-[340px] items-start">
      {textColum()}
      <div className="flex flex-col w-full items-start mt-4">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex flex-row items-stretch gap-4 text-left py-5 w-full transition-all"
            >
              <div className="flex flex-col items-center w-[3px] shrink-0 rounded-full overflow-hidden self-stretch bg-[#E5E5E5]">
                <div
                  className={`w-full rounded-full transition-all duration-700 ${isActive ? 'bg-[#4797F6]' : 'bg-transparent'}`}
                  style={{ height: isActive ? '30%' : '0%' }}
                />
              </div>
              <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-35'}`}>
                <h3 className={`text-[16px]/[24px] mb-1 transition-all duration-300 ${isActive ? 'font-semibold text-[#1A1A1A]' : 'font-medium text-[#1A1A1A]'}`}>
                  {step.title}
                </h3>
                {isActive && (
                  <p className="text-[14px]/[20px] text-[#767676]">{step.desc}</p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
