'use client';
import { HudContainer } from "./Shared";
import { User, Radio } from "lucide-react";

export function MacroPulse() {
  return (
    <HudContainer className="h-16 w-full flex items-center justify-between px-6 border-b-2 border-b-[#00FFF0]/20">
        {/* Left: Fear & Greed */}
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span className="font-mono text-green-500 text-sm font-bold tracking-wider">GREED (80/100)</span>
            </div>
            <div className="h-6 w-px bg-[#00FFF0]/20" />
            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[#00FFF0]/70">
                 <Radio className="w-3 h-3" />
                 <span>Latency: 40ms</span>
                 <span className="opacity-50">|</span>
                 <span>Latest Signal: $SOL Divergence</span>
            </div>
        </div>

        {/* Center: Title */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <h1 className="font-mono text-lg text-white font-bold tracking-[0.3em] opacity-80">MONITOR110</h1>
        </div>

        {/* Right: User & Time */}
        <div className="flex items-center gap-4">
             <span className="font-mono text-xs text-slate-400">UTC 14:02:44</span>
             <div className="w-8 h-8 border border-[#00FFF0]/50 rounded-sm flex items-center justify-center bg-[#00FFF0]/10">
                <User className="w-4 h-4 text-[#00FFF0]" />
             </div>
        </div>
    </HudContainer>
  );
}
