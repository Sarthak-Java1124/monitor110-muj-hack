'use client';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NeonButton({ children, onClick, className = '' }: NeonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(191, 255, 0, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-monee-green text-black font-bold py-3 px-8 rounded-full shadow-[0_0_10px_rgba(193,255,114,0.3)] transition-all cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
