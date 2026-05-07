"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

const steps = [
  {
    title: 'Connect Your Accounts',
    desc: 'Securely link your bank accounts in seconds and bring all your financial data into one place.',
    video: './how_it_work_1.mp4',
  },
  {
    title: 'We Analyze Your Transactions',
    desc: 'Zoltraa automatically categorizes and processes your transactions to surface meaningful patterns.',
    video: './how_it_work_2.mp4',
  },
  {
    title: 'Get Insights & Ask Questions',
    desc: 'View clear summaries of your finances or ask questions to get instant answers about your spending.',
    video: './how_it_work_3.mp4',
  },
];

const SCROLL_PER_STEP = 300;
const TOTAL_SCROLL = SCROLL_PER_STEP * steps.length;

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const sentinelTopRef = useRef<HTMLDivElement>(null);
  const sentinelBottomRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSticky = useRef(false);
  const scrollAccum = useRef(0);
  const lastScrollY = useRef(0);

  const mouseX = useSpring(0, { stiffness: 80, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const applyScroll = useCallback((delta: number) => {
    scrollAccum.current = Math.max(0, Math.min(TOTAL_SCROLL, scrollAccum.current + delta));
    const raw = scrollAccum.current / SCROLL_PER_STEP;
    const newActive = Math.min(steps.length - 1, Math.floor(raw));
    const newProgress = (raw - newActive) * 100;
    setActive(newActive);
    setProgress(newProgress);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasEntered(true); },
      { threshold: 0.15 }
    );
    if (sentinelTopRef.current) observer.observe(sentinelTopRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sentinelTopRef.current || !sentinelBottomRef.current) return;
      const topRect = sentinelTopRef.current.getBoundingClientRect();
      const bottomRect = sentinelBottomRef.current.getBoundingClientRect();
      const wasSticky = isSticky.current;
      isSticky.current = topRect.top <= 0 && bottomRect.top > window.innerHeight;
      if (isSticky.current) {
        applyScroll(window.scrollY - lastScrollY.current);
      } else if (!isSticky.current && wasSticky && bottomRect.top <= window.innerHeight) {
        scrollAccum.current = TOTAL_SCROLL;
        setActive(steps.length - 1);
        setProgress(100);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [applyScroll]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleStepSelect = (i: number) => {
    setActive(i);
    scrollAccum.current = i * SCROLL_PER_STEP;
    setProgress(0);
  };

  return (
    <div ref={sectionRef} style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)` }} className="relative">
      <div ref={sentinelTopRef} className="absolute top-0 left-0 w-full h-px" />

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          animate={{
            background: [
              'radial-gradient(600px circle at 80% 50%, rgba(71,151,246,0.06) 0%, transparent 70%)',
              'radial-gradient(600px circle at 75% 45%, rgba(71,151,246,0.09) 0%, transparent 70%)',
              'radial-gradient(600px circle at 85% 55%, rgba(71,151,246,0.06) 0%, transparent 70%)',
            ][active],
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        <section className="w-full relative z-10 px-6 md:px-8 py-8 md:py-16" id="how">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16 max-w-[810px] mx-auto">

            <div className="flex flex-col w-full md:w-[340px] items-start">
              <motion.p
                className="text-[#BABABA] mb-[4px] text-[12px] font-medium tracking-wide"
                initial={{ opacity: 0, y: 12 }}
                animate={hasEntered ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                HOW IT WORKS
              </motion.p>
              <motion.h2
                className="text-[28px]/[36px] md:text-[36px]/[44px] font-semibold mb-[6px] md:mb-[10px] text-[#1A1A1A]"
                initial={{ opacity: 0, y: 16 }}
                animate={hasEntered ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                Okay, but how does<br /> Zoltraa work?
              </motion.h2>
              <motion.p
                className="text-[#767676] text-[14px]/[20px]"
                initial={{ opacity: 0, y: 12 }}
                animate={hasEntered ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.16 }}
              >
                How Zoltraa works, at a glance.
              </motion.p>

              {/* ── Mobile: horizontal progress dots ── */}
              <div className="flex md:hidden items-center gap-2 mt-4 w-full">
                {steps.map((_, i) => {
                  const isActive = i === active;
                  const isDone = i < active;
                  const fill = isDone ? 100 : isActive ? progress : 0;
                  return (
                    <button
                      key={i}
                      onClick={() => handleStepSelect(i)}
                      className="relative flex-1 h-[3px] rounded-full bg-[#E5E5E5] overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-[#4797F6] rounded-full"
                        animate={{ width: `${fill}%` }}
                        transition={{ duration: 0.12, ease: 'linear' }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* ── Desktop: vertical step list ── */}
              <div className="hidden md:flex flex-col w-full items-start mt-4">
                {steps.map((step, i) => {
                  const isActive = i === active;
                  const isDone = i < active;
                  const barFill = isDone ? 100 : isActive ? progress : 0;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => handleStepSelect(i)}
                      className="flex flex-row items-stretch gap-4 text-left py-5 w-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasEntered ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.22 + i * 0.1 }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex flex-col items-center w-[3px] shrink-0 rounded-full overflow-hidden self-stretch bg-[#E5E5E5]">
                        <motion.div
                          className="w-full rounded-full bg-[#4797F6]"
                          animate={{ height: `${barFill}%` }}
                          transition={{ duration: 0.12, ease: 'linear' }}
                        />
                      </div>
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0.35 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className={`text-[16px]/[24px] mb-1 transition-all duration-300 ${isActive ? 'font-semibold text-[#1A1A1A]' : 'font-medium text-[#1A1A1A]'}`}>
                          {step.title}
                        </h3>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              key={`desc-${i}`}
                              className="text-[14px]/[20px] text-[#767676]"
                              initial={{ opacity: 0, height: 0, y: -6 }}
                              animate={{ opacity: 1, height: 'auto', y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -4 }}
                              transition={{ duration: 0.28, ease: 'easeOut' }}
                            >
                              {step.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* ── Video card ── */}
            <div className="w-full md:w-[420px] flex flex-col gap-3">
              <motion.div
                className="w-full md:w-[420px] h-[240px] md:h-[484px] bg-[#FBFBFB] border border-[#0000000D] rounded-[12px] p-3 md:p-4 overflow-hidden relative cursor-default"
                style={{ rotateX, rotateY, transformPerspective: 900 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={hasEntered ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[12px] z-10"
                  style={{
                    background: useTransform(
                      [mouseX, mouseY],
                      ([x, y]: number[]) =>
                        `radial-gradient(320px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.18) 0%, transparent 70%)`
                    ),
                  }}
                />
                <AnimatePresence mode="wait">
                  <motion.video
                    key={steps[active].video}
                    src={steps[active].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full rounded-[8px]"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </AnimatePresence>
              </motion.div>

              {/* ── Mobile: active step title + desc below video ── */}
              <div className="flex md:hidden flex-col px-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <p className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                      {steps[active].title}
                    </p>
                    <p className="text-[13px]/[19px] text-[#767676]">
                      {steps[active].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div ref={sentinelBottomRef} className="absolute bottom-0 left-0 w-full h-px" />
    </div>
  );
};

export default HowItWorks;
