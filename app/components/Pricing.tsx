const Pricing = () => {
  return (
    <section className="py-16 px-8 bg-gray-50" id="pricing">
      <h2 className="text-3xl font-bold text-center mb-8">Let's talk Zoltraa pricing</h2>
      <div className="flex justify-center gap-8">
        <div className="p-8 bg-white border rounded-3xl w-80">
          <h3 className="text-lg font-bold">Free</h3>
          <p className="text-sm text-gray-500 mb-6">Best for getting started</p>
          <ul className="space-y-4 text-sm mb-8">
            <li>✓ Upload transaction history</li>
            <li>✓ Smart transaction insights</li>
          </ul>
          <button className="w-full py-3 bg-gray-100 rounded-lg">Start for Free</button>
        </div>
        <div className="p-8 bg-black text-white rounded-3xl w-80">
          <h3 className="text-lg font-bold">Pro</h3>
          <p className="text-sm mb-6">₦1000 <span className='text-gray-400'>/month</span></p>
          <ul className="space-y-4 text-sm mb-8 text-gray-300">
            <li>✓ Includes everything in Basics</li>
            <li>✓ Direct bank account connection</li>
          </ul>
          <button className="w-full py-3 bg-white text-black rounded-lg">Upgrade to Pro</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
