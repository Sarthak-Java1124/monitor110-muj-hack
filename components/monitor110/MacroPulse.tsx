'use client';

import { Activity, Globe, Wifi } from 'lucide-react';

export function MacroPulse() {
  return (
    <div className="w-full h-12 border-b border-[#BFFF00]/20 bg-black flex items-center overflow-hidden relative z-50">
        {/* Static Label */}
        <div className="h-full px-4 flex items-center gap-2 bg-[#BFFF00]/10 border-r border-[#BFFF00]/20 z-10 shrink-0">
            <Globe className="w-4 h-4 text-[#BFFF00] animate-pulse" />
            <span className="text-[#BFFF00] font-bold text-xs tracking-wider">GLOBAL_NET</span>
        </div>

        {/* Scrolling Ticker */}
        <div className="flex whitespace-nowrap animate-scroll-left hover:pause">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-4">
                    <TickerItem symbol="BTC/USD" value="64,230.50" change="+2.4%" isPositive={true} />
                    <TickerItem symbol="ETH/USD" value="3,450.20" change="+1.8%" isPositive={true} />
                    <TickerItem symbol="EUR/USD" value="1.0845" change="-0.2%" isPositive={false} />
                    <TickerItem symbol="NDX" value="18,100.00" change="+0.5%" isPositive={true} />
                    <TickerItem symbol="VIX" value="13.45" change="-5.2%" isPositive={false} />
                    <TickerItem symbol="GOLD" value="2,350.10" change="+0.1%" isPositive={true} />
                    <TickerItem symbol="US10Y" value="4.45%" change="+1.2%" isPositive={true} />
                    <TickerItem symbol="SOL/USD" value="145.20" change="-0.5%" isPositive={false} />
                </div>
            ))}
        </div>
        
        {/* Right Status */}
        <div className="absolute right-0 h-full px-4 flex items-center gap-4 bg-black border-l border-[#BFFF00]/20 z-10">
             <div className="flex items-center gap-2">
                <Wifi className="w-3 h-3 text-[#BFFF00]" />
                <span className="text-[#BFFF00] text-[10px]">REALTIME</span>
             </div>
             <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-[#BFFF00]" />
                <span className="text-[#BFFF00] text-[10px]">98ms</span>
             </div>
        </div>
    </div>
  );
}

function TickerItem({ symbol, value, change, isPositive }: { symbol: string, value: string, change: string, isPositive: boolean }) {
    return (
        <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-white font-bold">{symbol}</span>
            <span className="text-slate-400">{value}</span>
            <span className={isPositive ? "text-[#BFFF00]" : "text-red-500"}>
                {change}
            </span>
        </div>
    )
}
