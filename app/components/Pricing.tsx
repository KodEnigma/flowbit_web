const features = [
  { desc: '✓  Upload transaction history (PDF)' },
  { desc: '✓  Smart transaction insights' },
  { desc: '✓  Spending breakdown' },
  { desc: '✓  AI chat access' },
];

const Pricing = () => {
  return (
    <section className="py-16 px-8 bg-white max-w-[810px] mx-auto" id="pricing">
      {textColum()}

      <div className="flex justify-start gap-8 mt-[32px]">
        <div className="p-[24px] bg-white border rounded-[12px] w-[392px] h-[536px] flex flex-col">

          <h3 className="text-[#A3A3A3] font-medium text-[14px]">Basic</h3>
          <p className="text-[24px]/[32px] font-semibold text-[#1A1A1A] mb-[12px]">Free</p>
          <p className="text-[14px]/[20px] text-[#A3A3A3] mb-[30px]">
            Get started with Zoltraa at no cost. Upload your transaction history
            and start exploring your financial insights instantly.
          </p>


          <ul className="space-y-[16px] text-[14px]/[20px] mb-8 text-[#000000]">
            {features.map((f, _) => (
              <li>{f.desc}</li>
            ))}
          </ul>

          <div className="flex-grow"></div>

          <button className="w-full py-[10px] bg-[#F5F5F5] rounded-[12px] text-[#7B7B7B] fomt-medium text-[14px]">
            Start for Free
          </button>

          <div className="flex flex-col items-center justify-center mt-[20px]">
            <p className="text-[12px]/[16px] text-[#A3A3A3]">
              Best for getting started
            </p>
          </div>
        </div>
        <div className="p-[24px] bg-white border rounded-[12px] w-[392px] h-[536px] flex flex-col">

          <h3 className="text-[#A3A3A3] font-medium text-[14px]">Basic</h3>
          <p className="text-[24px]/[32px] font-semibold text-[#1A1A1A] mb-[12px]">Free</p>
          <p className="text-[14px]/[20px] text-[#A3A3A3] mb-[30px]">
            Get started with Zoltraa at no cost. Upload your transaction history
            and start exploring your financial insights instantly.
          </p>


          <ul className="space-y-[16px] text-[14px]/[20px] mb-8 text-[#000000]">
            {features.map((f, _) => (
              <li>{f.desc}</li>
            ))}
          </ul>

          <div className="flex-grow"></div>

          <button className="w-full py-[10px] bg-[#F5F5F5] rounded-[12px] text-[#7B7B7B] fomt-medium text-[14px]">
            Start for Free
          </button>

          <div className="flex flex-col items-center justify-center mt-[20px]">
            <p className="text-[12px]/[16px] text-[#A3A3A3]">
              Best for getting started
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const textColum = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-[#BABABA] mb-[4px] font-[12px] font-medium">PRICING</p>

      <h2 className="text-[36px]/[44px] font-semibold mb-[10px] text-[#1A1A1A]">
        Let’s talk <br /> Zoltraa pricing
      </h2>

      <p className="text-[#767676] font-[14px]/[20px]">Show the plan that’s right for you on Zoltraa</p>
    </div>
  );
};

export default Pricing;
