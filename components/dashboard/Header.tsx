'use client';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
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
          <span className="text-monee-green font-semibold">+$205.99</span> 
          from James • 2 mins ago
        </p>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-monee-green hover:brightness-110 text-black px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_-5px_#BFFF00]">
          Move Money <ArrowUpRight className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 border border-white/10 hover:border-monee-green/50 hover:bg-monee-green/10 text-white hover:text-monee-green px-6 py-3 rounded-xl font-medium transition-all">
          Request <ArrowDownLeft className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 border border-white/10 hover:border-monee-green/50 hover:bg-monee-green/10 text-white hover:text-monee-green px-6 py-3 rounded-xl font-medium transition-all">
          Transfer <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
