'use client';

import { ArrowUp, ArrowDown } from 'lucide-react';

const asks = [
    { price: '65,850.50', size: '0.45', total: '0.45' },
    { price: '65,845.00', size: '1.20', total: '1.65' },
    { price: '65,840.50', size: '0.15', total: '1.80' },
    { price: '65,835.00', size: '0.88', total: '2.68' },
    { price: '65,830.50', size: '2.50', total: '5.18' },
];

const bids = [
    { price: '65,825.00', size: '0.50', total: '0.50' },
    { price: '65,820.50', size: '1.10', total: '1.60' },
    { price: '65,815.00', size: '3.40', total: '5.00' },
    { price: '65,810.00', size: '0.25', total: '5.25' },
    { price: '65,805.50', size: '0.10', total: '5.35' },
];

export function IntelligencePanel() {
  return (
    <div className="h-full flex flex-col gap-4">
        
        {/* Order Book Panel */}
        <div className="bg-[#141414] border border-[#BFFF00]/20 rounded-3xl p-0 overflow-hidden flex-1 flex flex-col">
            <div className="p-4 border-b border-white/5 bg-[#1a1a1a] flex justify-between items-center">
                <span className="text-white font-bold text-sm">Order Book</span>
                <span className="text-slate-500 text-xs font-mono">Spread: 5.50</span>
            </div>

            {/* Header */}
            <div className="grid grid-cols-3 px-4 py-2 text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                <span>Price</span>
                <span className="text-right">Size</span>
                <span className="text-right">Total</span>
            </div>

            {/* Asks (Sells) - Red */}
            <div className="flex-1 overflow-auto px-1 space-y-[1px]">
                {[...asks].reverse().map((ask, i) => (
                    <OrderRow key={i} data={ask} type="ask" />
                ))}
            </div>

            {/* Current Price */}
            <div className="py-2 border-y border-white/5 bg-white/5 text-center">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-xl font-bold text-[#BFFF00]">$65,828.00</span>
                    <ArrowUp className="w-4 h-4 text-[#BFFF00]" />
                </div>
            </div>

            {/* Bids (Buys) - Green */}
            <div className="flex-1 overflow-auto px-1 space-y-[1px]">
                {bids.map((bid, i) => (
                    <OrderRow key={i} data={bid} type="bid" />
                ))}
            </div>
        </div>

        {/* Quick Trade Deck */}
        <div className="grid grid-cols-2 gap-2 h-auto">
            <button className="w-full py-4 rounded-xl border border-[#BFFF00] bg-[#141414] text-[#BFFF00] font-bold text-sm hover:bg-[#BFFF00]/10 transition-colors uppercase tracking-wider flex flex-col items-center justify-center gap-1 group">
                <span>Sell MKT</span>
                <span className="text-[10px] text-white opacity-50 group-hover:opacity-100">@ 65,825.00</span>
            </button>
            <button className="w-full py-4 rounded-xl bg-[#BFFF00] text-black font-bold text-sm hover:bg-[#a6de00] shadow-[0_0_20px_-5px_#BFFF00] transition-colors uppercase tracking-wider flex flex-col items-center justify-center gap-1">
                <span>Buy MKT</span>
                <span className="text-[10px] text-black/60">@ 65,830.50</span>
            </button>
        </div>
    </div>
  );
}

function OrderRow({ data, type }: { data: any, type: 'ask' | 'bid' }) {
    return (
        <div className="grid grid-cols-3 px-3 py-1 text-xs font-mono hover:bg-white/5 cursor-pointer relative group">
            <div className={`absolute top-0 bottom-0 ${type === 'ask' ? 'right-0 bg-red-500/10' : 'right-0 bg-[#BFFF00]/10'}`} style={{ width: `${Math.random() * 60}%` }} />
            
            <span className={`relative z-10 ${type === 'ask' ? 'text-red-400' : 'text-[#BFFF00]'}`}>{data.price}</span>
            <span className="relative z-10 text-right text-slate-300">{data.size}</span>
            <span className="relative z-10 text-right text-slate-500">{data.total}</span>
        </div>
    )
}
