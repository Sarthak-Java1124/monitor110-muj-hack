'use client';
import { Card } from "@/components/ui/card";
import { Sparkles, Nfc } from 'lucide-react';

import { useRouter } from 'next/navigation';

export function AIPromoCard() {
  const router = useRouter();

  return (
    <Card className="col-span-12 md:col-span-4 lg:col-span-4 bg-gradient-to-br from-[#14141A] to-[#1E1E2E] border-[#BFFF00]/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#BFFF00]/10 blur-[50px] rounded-full group-hover:bg-[#BFFF00]/20 transition-all" />
        
        <div className="p-6 flex flex-col justify-between h-full relative z-10">
            <div>
                 <div className="w-10 h-10 rounded-full bg-[#BFFF00]/10 flex items-center justify-center mb-4 border border-[#BFFF00]/20">
                    <Sparkles className="w-5 h-5 text-[#BFFF00]" />
                 </div>
                 <h3 className="text-white font-bold text-xl mb-2">Invest Smarter</h3>
                 <p className="text-slate-400 text-sm mb-6">
                    Let our AI-Robo Advisor manage your portfolio for optimal growth.
                 </p>
            </div>
            <button 
                onClick={() => router.push('/ai-search')}
                className="bg-[#BFFF00] hover:bg-[#a6de00] text-black py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_-5px_#BFFF00] transition-all w-full"
            >
                Try AI Advisor Now
            </button>
        </div>
    </Card>
  );
}

export function GlassCreditCard() {
    return (
        <div className="col-span-12 md:col-span-4 lg:col-span-5 h-[220px] relative group perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-2xl transition-transform hover:rotate-y-2 hover:scale-[1.02] duration-500">
                <div className="flex justify-between items-start">
                    <span className="text-white font-bold tracking-wider text-lg">Nuance</span>
                    <Nfc className="w-8 h-8 text-white/70" />
                </div>
                
                <div>
                     <div className="text-white/80 font-mono text-xl tracking-[4px] mb-4 drop-shadow-md">
                        •••• •••• •••• 4291
                     </div>
                     <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                            <span className="text-xs text-white/50 uppercase tracking-wider mb-1">Card Holder</span>
                            <span className="text-white font-medium tracking-wide">JAMES KOLE</span>
                        </div>
                        <div className="flex flex-col items-end">
                             <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-red-500/80" />
                                <div className="w-6 h-6 rounded-full bg-yellow-500/80" />
                             </div>
                        </div>
                     </div>
                </div>
             </div>
        </div>
    )
}
