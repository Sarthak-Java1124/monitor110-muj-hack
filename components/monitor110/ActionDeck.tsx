'use client';
import { HudContainer, HudHeader } from "./Shared";
import { AlertTriangle } from "lucide-react";

export function ActionDeck() {
  return (
    <HudContainer className="h-full flex flex-col gap-4 p-4 !border-none !bg-transparent !overflow-visible">
        
        {/* AI Insight Card */}
        <div className="bg-[#1a1a1a] border border-yellow-500/30 p-4 rounded-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-20">
                <AlertTriangle className="w-12 h-12 text-yellow-500" />
             </div>
             <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500 font-bold font-mono text-xs">BEARISH STRUCTURE</span>
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed font-mono">
                    Whale outflows exceeding retail buy pressure by 3.2x. Hedges recommended.
                 </p>
             </div>
        </div>

        {/* Execution Panel */}
        <div className="flex-1 bg-white p-1 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col">
             <div className="flex-1 bg-[#e5e5e5] p-4 relative" style={{ backgroundImage: 'radial-gradient(#999 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                 <div className="absolute top-0 left-0 w-full h-2 bg-[linear-gradient(45deg,transparent_5px,#fff_5px)] bg-[length:10px_10px]" />
                 
                 <h3 className="text-black font-mono font-bold text-sm mb-4 border-b border-black/10 pb-2">ONE-CLICK EXECUTION</h3>
                 
                 <div className="space-y-2">
                    <button className="w-full py-3 bg-[#2a2a2a] text-white font-mono text-xs hover:bg-black transition-colors flex justify-between px-4">
                        <span>OPEN SHORT 1x</span>
                        <span className="text-red-400">HEDGE</span>
                    </button>
                    <button className="w-full py-3 bg-[#2a2a2a] text-white font-mono text-xs hover:bg-black transition-colors flex justify-between px-4">
                        <span>SWAP TO STABLES</span>
                        <span className="text-blue-400">SAFETY</span>
                    </button>
                 </div>

                 <div className="mt-8 pt-4 border-t border-dashed border-black/20">
                     <button className="w-full py-4 bg-black text-white font-bold font-mono hover:scale-[1.02] transition-transform shadow-xl">
                        CONFIRM EXECUTION
                     </button>
                 </div>
             </div>
             
             {/* Receipt jagged edge */}
             <div className="h-3 w-full bg-[#e5e5e5]" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }} />
        </div>
    </HudContainer>
  );
}
