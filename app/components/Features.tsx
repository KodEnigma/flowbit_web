const Features = () => {
  const features = [
    { title: 'Clear Spending Breakdown', desc: 'Get visual summaries...' },
    { title: 'Smart Transaction Insights', desc: 'Zoltraa analyzes your transactions...' },
    { title: 'Ask Anything About Your Money', desc: 'Interact with your finances...' },
  ];

  return (
    <section className="py-16 px-8" id="solution">
      <h2 className="text-3xl font-bold mb-4">So... what does Zoltraa actually do?</h2>
      <p className="text-gray-600 mb-8">A simple look at what Zoltraa offers you.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-2xl">
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
