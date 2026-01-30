'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ShoppingBag, GraduationCap, AlertCircle, Plus } from 'lucide-react';

const categories = [
    { icon: Plane, label: 'Travel', color: 'bg-[#BFFF00]/10 text-[#BFFF00]' },
    { icon: ShoppingBag, label: 'Shop', color: 'bg-[#BFFF00]/20 text-[#BFFF00]' },
    { icon: GraduationCap, label: 'Edu', color: 'bg-[#BFFF00]/10 text-[#BFFF00]' },
    { icon: AlertCircle, label: 'Emerg', color: 'bg-red-500/20 text-red-400' },
];

export function SavingsCard() {
  return (
    <Card className="col-span-12 md:col-span-3 lg:col-span-4 bg-[#14141A] border-white/5 self-start">
       <CardHeader className="flex flex-row items-center justify-between pb-2 p-3">
            <CardTitle className="text-white text-xs font-medium">Savings Wallet</CardTitle>
            <button className="text-[#BFFF00] hover:text-white transition-colors">
                <Plus className="w-4 h-4" />
            </button>
       </CardHeader>
       <CardContent className="p-3 pt-0">
            <div className="mb-2">
                <span className="text-xl font-bold text-white tracking-tight">853,698.00</span>
                <span className="text-[#94A3B8] text-[10px] ml-2">Total Savings</span>
            </div>
            
            <div className="flex justify-between gap-2">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col items-center gap-2">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center ${cat.color} hover:scale-110 transition-transform cursor-pointer`}>
                            <cat.icon className="w-4 h-4" />
                         </div>
                         <span className="text-[#94A3B8] text-xs leading-none">{cat.label}</span>
                    </div>
                ))}
            </div>
       </CardContent>
    </Card>
  );
}
