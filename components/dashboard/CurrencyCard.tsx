'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftRight } from 'lucide-react';

export function CurrencyCard() {
  return (
    <Card className="col-span-12 md:col-span-3 lg:col-span-3 bg-[#14141A] border-white/5 relative overflow-hidden group self-start">
      <CardContent className="p-3 flex flex-col gap-4">
         <div className="flex justify-between items-start mb-2 align-middle">
            <h3 className="text-[#94A3B8] text-xs font-medium">Currency Converter</h3>
            <div className="p-1.5 bg-white/5 rounded-full text-white/50 group-hover:text-white transition-colors">
               <ArrowLeftRight className="w-3 h-3" />
            </div>
         </div>
         
         <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] overflow-hidden">
                       🇺🇸
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">$853,698</div>
                        <div className="text-slate-500 text-[10px]">USD Dollar</div>
                    </div>
                </div>
            </div>
             <div className="w-full h-px bg-white/5" />
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] overflow-hidden">
                       🇯🇵
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">154,578</div>
                        <div className="text-slate-500 text-[10px]">Japanese Yen</div>
                    </div>
                </div>
            </div>
         </div>
      </CardContent>
    </Card>
  );
}
