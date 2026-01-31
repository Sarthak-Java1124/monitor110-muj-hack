'use client';

import { ArrowUpRight, ArrowDownRight, Activity, Layers } from 'lucide-react';

export function PortfolioHeader() {
  return (
    <div className="w-full bg-black border-b border-[#BFFF00]/20 p-6 flex flex-col md:flex-row justify-between items-end gap-6">
        {/* Left: Ticker & Market Stats */}
        <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
                <h1 className="text-white font-bold text-xl tracking-tight">OREA / UHD</h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#BFFF00] text-black border border-[#BFFF00]">PERPETUAL</span>
            </div>
            
            <div className="flex flex-wrap gap-8 md:gap-16">
                <KPIMetric label="24h Volume" value="$1.24B" />
                <KPIMetric label="24h High" value="$68,950.00" indicator="up" />
                <KPIMetric label="24h Low" value="$62,120.00" indicator="down" />
                <KPIMetric 
                    label="Funding / 8h" 
                    value="0.0100%" 
                    highlight={true} 
                />
            </div>
        </div>

        {/* Right: Market Status */}
        <div className="flex gap-4 shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#BFFF00]/5 border border-[#BFFF00]/20 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#BFFF00] animate-pulse" />
                <span className="text-[#BFFF00] text-xs font-bold tracking-wider">MARKET OPEN</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-lg">
                <Activity className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-xs font-mono">98ms</span>
            </div>
        </div>
    </div>
  );
}

function KPIMetric({ label, value, highlight, indicator }: { label: string, value: string, highlight?: boolean, indicator?: 'up' | 'down' }) {
    return (
        <div className="flex flex-col gap-1">
             <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">{label}</span>
             <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${indicator === 'down' ? 'text-white' : 'text-white'}`}>
                    {value}
                </span>
                {indicator === 'up' && (
                    <div className="w-5 h-5 rounded-full bg-[#BFFF00]/20 flex items-center justify-center">
                        <ArrowUpRight className="w-3 h-3 text-[#BFFF00]" />
                    </div>
                )}
                {indicator === 'down' && (
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                        <ArrowDownRight className="w-3 h-3 text-red-500" />
                    </div>
                )}
             </div>
        </div>
    )
}
