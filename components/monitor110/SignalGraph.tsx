'use client';

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Activity, BarChart2, Zap } from 'lucide-react';

const data = [
  { time: '09:00', price: 64200 },
  { time: '09:30', price: 64350 },
  { time: '10:00', price: 64100 },
  { time: '10:30', price: 64400 },
  { time: '11:00', price: 64800 },
  { time: '11:30', price: 64750 },
  { time: '12:00', price: 65100 },
  { time: '12:30', price: 64900 },
  { time: '13:00', price: 65200 },
  { time: '13:30', price: 65500 },
  { time: '14:00', price: 65300 },
  { time: '14:30', price: 65800 },
];

export function SignalGraph() {
  return (
    <div className="h-full border border-[#BFFF00]/20 bg-black flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="p-3 border-b border-[#BFFF00]/20 flex justify-between items-center bg-[#BFFF00]/5">
            <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[#BFFF00]" />
                <span className="text-[#BFFF00] font-bold text-xs tracking-wider">BTC/USD PERPETUAL</span>
            </div>
            <div className="flex gap-4 text-[10px] font-mono text-slate-400">
                <span className="text-[#BFFF00]">O: 64,200</span>
                <span>H: 65,800</span>
                <span>L: 64,100</span>
                <span>C: 65,800</span>
            </div>
        </div>

        {/* Chart Area */}
        <div className="flex-1 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#BFFF00" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#BFFF00" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#333" strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                        dataKey="time" 
                        stroke="#666" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                    />
                    <YAxis 
                        stroke="#666" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false} 
                        domain={['auto', 'auto']}
                        orientation="right"
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #BFFF00', color: '#fff', fontSize: '12px' }}
                        itemStyle={{ color: '#BFFF00' }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#BFFF00" 
                        strokeWidth={2} 
                        fillOpacity={1} 
                        fill="url(#colorPrice)" 
                        isAnimationActive={true}
                    />
                </AreaChart>
            </ResponsiveContainer>

            {/* Overlay Elements */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
                 <Badge color="text-red-400">RSI: 72</Badge>
                 <Badge color="text-[#BFFF00]">MACD: BULLISH</Badge>
            </div>
        </div>
    </div>
  );
}

function Badge({ children, color }: { children: string; color: string }) {
    return (
        <div className={`px-3 py-1 border ${color} rounded-full text-[10px] font-mono bg-opacity-10 bg-current`}>
            {children}
        </div>
    )
}
