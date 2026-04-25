"use client";

import { useRouter } from "next/navigation";
import { Container, svgString } from "./Header";

const Footer = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-10 font-mono">
      <Container className="flex items-start justify-between">
        {/* Left — logo + copyright */}
        <div className="flex flex-col gap-2 cursor-pointer" onClick={handleClick}>
          {svgString}
          <p className="text-xs text-gray-400 mt-1">
            © 2026 Zoltraa Technologies. All right reserved
          </p>
        </div>

        {/* Right — link columns */}
        <div className="flex gap-16">
          {/* Company */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-900 mb-1">Company</p>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">X (Twitter)</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Email</a>
          </div>

          {/* Discover more */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-900 mb-1">Discover more</p>
            <a href="/privacy" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Privacy</a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Terms</a>
            <a href="/contact" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
