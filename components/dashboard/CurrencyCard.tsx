'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftRight } from 'lucide-react';

export function CurrencyCard() {
  return (
    <Card className="col-span-12 md:col-span-3 lg:col-span-3 bg-[#14141A] border-white/5 relative overflow-hidden group">
      <CardContent className="p-6 flex flex-col justify-between h-full">
         <div className="flex justify-between items-start mb-6 align-middle">
            <h3 className="text-[#94A3B8] text-sm font-medium pt-2">Currency Converter</h3>
            <div className="p-2 bg-white/5 rounded-full text-white/50 group-hover:text-white transition-colors">
               <ArrowLeftRight className="w-4 h-4" />
            </div>
         </div>
         
         <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs overflow-hidden">
                       🇺🇸
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">$853,698</div>
                        <div className="text-slate-500 text-xs">USD Dollar</div>
                    </div>
                </div>
            </div>
             <div className="w-full h-px bg-white/5" />
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs overflow-hidden">
                       🇯🇵
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">154,578</div>
                        <div className="text-slate-500 text-xs">Japanese Yen</div>
                    </div>
                </div>
            </div>
         </div>
      </CardContent>
    </Card>
  );
}
