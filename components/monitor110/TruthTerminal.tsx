'use client';
import { HudContainer, HudHeader } from "./Shared";
import { Activity } from "lucide-react";

const logs = [
    { time: '2m', amount: '500K', asset: 'USDT', to: 'Binance', type: 'inflow' },
    { time: '5m', amount: '12M', asset: 'ETH', to: 'Unknown', type: 'outflow' },
    { time: '8m', amount: '2.1M', asset: 'SOL', to: 'Coinbase', type: 'inflow' },
    { time: '12m', amount: '450K', asset: 'USDC', to: 'Kraken', type: 'inflow' },
    { time: '15m', amount: '33M', asset: 'BTC', to: 'Cold Wallet', type: 'outflow' },
    { time: '22m', amount: '1.2M', asset: 'XRP', to: 'Binance', type: 'inflow' },
    { time: '30m', amount: '5M', asset: 'ETH', to: 'Unknown', type: 'outflow' },
];

export function TruthTerminal() {
  return (
    <HudContainer className="h-full flex flex-col">
        <HudHeader title="TRUTH_TERMINAL" code="W-LOG-01" />
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-xs scrollbar-hide">
            {logs.map((log, i) => (
                <div key={i} className={`flex items-center justify-between p-2 border-l-2 ${log.type === 'outflow' ? 'border-red-500 bg-red-900/10' : 'border-green-500 bg-green-900/10'}`}>
                     <div className="flex gap-2">
                        <span className="text-slate-500">[{log.time}]</span>
                        <span className="text-white font-bold">{log.amount} {log.asset}</span>
                     </div>
                     <span className="opacity-50 text-[10px]">{log.to}</span>
                </div>
            ))}
        </div>

        <div className="p-4 border-t border-[#00FFF0]/20 bg-red-900/10 mt-auto">
             <div className="flex items-center gap-2 mb-1">
                <Activity className="w-3 h-3 text-red-500" />
                <span className="text-red-500 font-bold text-xs uppercase">Patient Zero Alert</span>
             </div>
             <p className="text-[10px] text-red-300/80 leading-tight">
                SEC Regulation headlines spiking social sentiment volume. High volatility expected in DeFi sector.
             </p>
        </div>
    </HudContainer>
  );
}
