const Footer = () => {
  return (
    <footer className="py-16 px-8 bg-white border-t mt-16">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold">Zoltraa</span>
        </div>
        <div className="flex gap-16">
            <div><h4 className="font-bold mb-4">Company</h4><p className="text-sm">X (Twitter)</p><p className="text-sm">Linkedin</p><p className="text-sm">Email</p></div>
            <div><h4 className="font-bold mb-4">Discover more</h4><p className="text-sm">Privacy</p><p className="text-sm">Terms</p></div>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-8">© 2026 Zoltraa Technologies. All right reserved</p>
    </footer>
  );
};

export default Footer;
