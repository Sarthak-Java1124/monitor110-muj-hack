'use client';

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const data = [
  { time: '1', price: 27500, benchmark: 26000 },
  { time: '2', price: 27800, benchmark: 26200 },
  { time: '3', price: 27600, benchmark: 26100 },
  { time: '4', price: 28200, benchmark: 26400 },
  { time: '5', price: 28900, benchmark: 26800 },
  { time: '6', price: 29500, benchmark: 27000 },
  { time: '7', price: 29200, benchmark: 27100 },
  { time: '8', price: 30089, benchmark: 27500, active: true }, // Peak
  { time: '9', price: 29800, benchmark: 27600 },
  { time: '10', price: 29900, benchmark: 27800 },
];

export function OriginChart() {
  const [activeTab, setActiveTab] = useState('1M');

  return (
    <div className="h-full bg-[#141414] border border-[#BFFF00]/20 rounded-3xl p-6 flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#BFFF00]/10 rounded-xl flex items-center justify-center border border-[#BFFF00]/20">
                    <span className="text-[#BFFF00] font-bold text-lg">O</span>
                </div>
                <div>
                     <h2 className="text-white font-bold text-lg">Origin Game EA Inc.</h2>
                     <span className="text-slate-400 text-sm font-mono">OREA</span>
                </div>
            </div>

            <div className="flex flex-col items-end">
                 <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-white">$28,089.00</span>
                    <div className="px-3 py-1 bg-[#BFFF00]/20 rounded-full border border-[#BFFF00]/20 flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3 text-[#BFFF00]" />
                        <span className="text-[#BFFF00] text-xs font-bold">+26%</span>
                    </div>
                 </div>
            </div>
        </div>

        {/* Timeframe Toggles */}
        <div className="flex gap-2 mb-6">
            {['1D', '1W', '1M', '1Y', 'MAX'].map((time) => (
                <button 
                    key={time}
                    onClick={() => setActiveTab(time)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        activeTab === time 
                        ? 'bg-[#BFFF00] text-black shadow-[0_0_15px_-5px_#BFFF00]' 
                        : 'bg-black text-slate-500 hover:text-white border border-white/5'
                    }`}
                >
                    {time}
                </button>
            ))}
        </div>

        {/* Chart */}
        <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#BFFF00" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#BFFF00" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#222" strokeDasharray="3 3" vertical={false} />
                    <XAxis hide />
                    <YAxis hide domain={['auto', 'auto']} />
                    <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={{ stroke: '#BFFF00', strokeWidth: 1, strokeDasharray: '4 4' }} 
                    />
                    
                    {/* Benchmark Line (White) */}
                    <Area 
                        type="monotone" 
                        dataKey="benchmark" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth={1} 
                        fill="transparent" 
                        isAnimationActive={false}
                    />

                    {/* Primary Line (Green) */}
                    <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#BFFF00" 
                        strokeWidth={4} 
                        fillOpacity={1} 
                        fill="url(#colorPrice)" 
                        isAnimationActive={true}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}

function CustomTooltip({ active, payload }: any) {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#141414] border border-[#BFFF00] p-4 rounded-xl shadow-[0_0_30px_-10px_#BFFF00]">
            <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BFFF00] animate-pulse" />
                    <span className="text-[#BFFF00] font-bold text-lg">$30,089.00</span>
                    <span className="text-[#BFFF00] text-sm">(+21%)</span>
                 </div>
                 <span className="text-slate-400 text-xs font-mono">13 Nov, 08:20:40PM</span>
            </div>
        </div>
      );
    }
  
    return null;
}
