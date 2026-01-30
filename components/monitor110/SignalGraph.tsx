'use client';
import { HudContainer, HudHeader } from "./Shared";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { time: '10:00', price: 42000, hype: 20 },
    { time: '10:10', price: 42100, hype: 25 },
    { time: '10:20', price: 42050, hype: 30 },
    { time: '10:30', price: 42200, hype: 85 }, // Divergence
    { time: '10:40', price: 41900, hype: 70 },
    { time: '10:50', price: 42300, hype: 60 },
    { time: '11:00', price: 42500, hype: 50 },
];

export function SignalGraph() {
  return (
    <HudContainer className="h-full flex flex-col">
        <HudHeader title="SIGNAL_DIVERGENCE" code="BTC-USD" />
        
        <div className="flex-1 relative p-4">
             {/* Annotation */}
             <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
                <div className="border border-purple-500 bg-purple-900/20 text-purple-300 text-xs px-2 py-1 rounded animate-pulse">
                    ⚡ DIVERGENCE DETECTED
                </div>
                <div className="w-px h-8 bg-purple-500 mx-auto" />
             </div>

             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorHype" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    
                    {/* Price Line (Cold Data) */}
                    <Area type="step" dataKey="price" stroke="#ffffff" strokeWidth={1} fill="transparent" />
                    
                    {/* Hype Line (Hot Data) */}
                    <Area type="monotone" dataKey="hype" stroke="#A855F7" strokeWidth={3} fill="url(#colorHype)" yAxisId="right" />
                    <YAxis yAxisId="right" hide />
                </AreaChart>
             </ResponsiveContainer>
        </div>

        {/* Narrative Cloud */}
        <div className="h-16 border-t border-[#00FFF0]/20 flex items-center gap-3 px-4 overflow-x-auto">
             <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mr-2">Narratives:</span>
             <Badge color="border-blue-500 text-blue-400">STABLECOINS</Badge>
             <Badge color="border-green-500 text-green-400">ETF_APPROVAL</Badge>
             <Badge color="border-purple-500 text-purple-400">HACK_ALERT</Badge>
             <Badge color="border-red-500 text-red-400">SOL_CONGESTION</Badge>
        </div>
    </HudContainer>
  );
}

function Badge({ children, color }: { children: string; color: string }) {
    return (
        <div className={`px-3 py-1 border ${color} rounded-full text-[10px] font-mono bg-opacity-10 bg-current`}>
            {children}
        </div>
    )
}
