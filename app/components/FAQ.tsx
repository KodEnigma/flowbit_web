const FAQ = () => {
  const faqs = Array(8).fill('Placeholder Header text here');
  return (
    <section className="py-16 px-8 max-w-4xl mx-auto" id="faq">
      <h2 className="text-3xl font-bold mb-8">A few things you might ask</h2>
      <div className="space-y-4">
        {faqs.map((q, i) => (
          <div key={i} className="border-b py-4 flex justify-between items-center">
            <span className="font-medium">{q}</span>
            <span className="text-2xl text-gray-400">+</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
