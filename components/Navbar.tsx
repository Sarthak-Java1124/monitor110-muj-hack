'use client';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Pricing', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-50 max-w-[1920px] mx-auto left-0 right-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Circle className="w-5 h-5 text-monee-green fill-monee-green group-hover:drop-shadow-[0_0_8px_rgba(193,255,114,0.8)] transition-all" />
        <span className="text-white font-bold text-xl tracking-wide font-sans">Monitor110</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-monee-green after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Placeholder (Optional) */}
      <div className="md:hidden text-white">
        Menu
      </div>
    </motion.nav>
  );
}
