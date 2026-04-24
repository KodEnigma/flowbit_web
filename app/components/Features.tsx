const Features = () => {
  const features = [
    { title: 'Clear Spending Breakdown', desc: 'Get visual summaries of your income and expenses at a glance. Quickly identify key spending areas and make smarter financial decisions with confidence.' },
    { title: 'Smart Transaction Insights', desc: 'Zoltraa analyzes your transactions and automatically organizes your spending. Spot trends, understand your habits, and see exactly where your money goes over time.' },
    { title: 'Ask Anything About Your Money', desc: 'Interact with your finances using simple questions. Ask things like “How much did I spend this month?” and get instant, easy-to-understand answers.' },
  ];

  return (
    <section className="mt-[100px] bg-white py-16 px-4 md:px-8" id="solution">
      <div className="flex flex-row items-start justify-between">
        {textColum()}

        <div className="flex flex-col gap-8 w-[420px]">
          {features.map((f, i) => (
            <div key={i} className="">
              {cardItem()}
              <div className="mt-4"></div>
              <h3 className="font-medium text-[16px]/[24px] mb-[4px] text-[#4797F6]">{f.title}</h3>
              <p className="text-[14px]/[20px] text-[#767676]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cardItem = () => {
  return (
    <div className="border border-[#0000000D] rounded-[12px] h-[232px] w-[420px] bg-[#FBFBFB]">
    </div>
  );
};

const textColum = () => {
  return (
    <div>
      <p className="text-[#BABABA] mb-[4px] font-[12px] font-medium">OUR SOLUTION</p>

      <h2 className="text-[36px]/[44px] font-semibold mb-[10px] text-[#1A1A1A]">
        So... what does <br /> Zoltraa actually do?
      </h2>

      <p className="text-[#767676] font-[14px]/[20px]">A simple look at what Zoltraa offers you.</p>
    </div>
  );
};

export default Features;
