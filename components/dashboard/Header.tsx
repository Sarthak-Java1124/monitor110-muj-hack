'use client';
import { MoveRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          $1025.254,00
        </h1>
        <p className="text-[#94A3B8] text-sm flex items-center gap-2">
          Last transaction: You have earned 
          <span className="text-green-400 font-semibold">+$205.99</span> 
          from James • 2 mins ago
        </p>
      </div>

      <div className="flex gap-4">
        {[
            { label: 'Move Money', icon: MoveRight },
            { label: 'Request', icon: ArrowDownLeft },
            { label: 'Transfer', icon: ArrowUpRight }
        ].map((action, i) => (
            <motion.button
                key={action.label}
                whileHover={{ scale: 1.05, backgroundColor: "#6D28D9" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-lg shadow-purple-900/20"
            >
                {action.label}
                <action.icon className="w-4 h-4" />
            </motion.button>
        ))}
      </div>
    </div>
  );
}
