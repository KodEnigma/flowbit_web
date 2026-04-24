const HowItWorks = () => {
  return (
    <section className="py-16 px-8 flex gap-8 items-center" id="how">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Okay, but how does Zoltraa work?</h2>
        <p className="mb-8">How Zoltraa works, at a glance.</p>
        <div className="space-y-4">
          <div className="font-bold border-l-4 border-blue-600 pl-4">Connect Your Accounts</div>
          <div className="text-gray-500 pl-4">We Analyze Your Transactions</div>
          <div className="text-gray-500 pl-4">Get Insights & Ask Questions</div>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-64 h-128 bg-gray-100 rounded-3xl p-4 mx-auto border-8 border-black">📱 Mockup</div>
      </div>
    </section>
  );
};

export default HowItWorks;
