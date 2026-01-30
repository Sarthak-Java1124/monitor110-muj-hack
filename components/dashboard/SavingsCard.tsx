'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, ShoppingBag, GraduationCap, AlertCircle, Plus } from 'lucide-react';

const categories = [
    { icon: Plane, label: 'Travel', color: 'bg-blue-500/20 text-blue-400' },
    { icon: ShoppingBag, label: 'Shop', color: 'bg-pink-500/20 text-pink-400' },
    { icon: GraduationCap, label: 'Edu', color: 'bg-yellow-500/20 text-yellow-400' },
    { icon: AlertCircle, label: 'Emerg', color: 'bg-red-500/20 text-red-400' },
];

export function SavingsCard() {
  return (
    <Card className="col-span-12 md:col-span-3 lg:col-span-4 bg-[#14141A] border-white/5">
       <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-white text-lg">Savings Wallet</CardTitle>
            <button className="text-[#7C3AED] hover:text-white transition-colors">
                <Plus className="w-5 h-5" />
            </button>
       </CardHeader>
       <CardContent>
            <div className="mb-6">
                <span className="text-3xl font-bold text-white tracking-tight">853,698.00</span>
                <span className="text-[#94A3B8] text-sm ml-2">Total Savings</span>
            </div>
            
            <div className="flex justify-between gap-2">
                {categories.map((cat) => (
                    <div key={cat.label} className="flex flex-col items-center gap-2">
                         <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cat.color} hover:scale-110 transition-transform cursor-pointer`}>
                            <cat.icon className="w-5 h-5" />
                         </div>
                         <span className="text-[#94A3B8] text-xs leading-none">{cat.label}</span>
                    </div>
                ))}
            </div>
       </CardContent>
    </Card>
  );
}
