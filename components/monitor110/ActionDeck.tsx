'use client';

import { Zap, ArrowUp, ArrowDown, History } from 'lucide-react';

const orderBook = [
    { price: '65,850.50', size: '0.45', type: 'sell' },
    { price: '65,845.00', size: '1.20', type: 'sell' },
    { price: '65,840.50', size: '0.15', type: 'sell' },
    { price: '65,835.00', size: '0.88', type: 'sell' },
    { price: '65,830.50', size: '2.50', type: 'buy' },
    { price: '65,825.00', size: '0.50', type: 'buy' },
    { price: '65,820.50', size: '1.10', type: 'buy' },
    { price: '65,815.00', size: '3.40', type: 'buy' },
    { price: '65,810.00', size: '0.25', type: 'buy' },
    { price: '65,805.50', size: '0.10', type: 'buy' },
];

export function ActionDeck() {
  return (
    <div className="h-full border border-[#BFFF00]/20 bg-black flex flex-col relative group">
        {/* Header */}
        <div className="p-2 border-b border-[#BFFF00]/20 flex justify-between items-center bg-[#BFFF00]/5">
            <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#BFFF00]" />
                <span className="text-[#BFFF00] font-bold text-xs tracking-wider">DEPTH_MARKET</span>
            </div>
        </div>

        {/* Order Book */}
        <div className="flex-1 overflow-auto p-2 font-mono text-[11px] scrollbar-hide">
             <div className="flex justify-between text-slate-500 mb-2 px-2 uppercase text-[9px]">
                 <span>Price (USD)</span>
                 <span>Size (BTC)</span>
             </div>
             
             <div className="space-y-0.5">
                 {orderBook.map((order, i) => (
                    <div key={i} className="flex justify-between items-center px-2 py-0.5 hover:bg-white/5 cursor-pointer relative overflow-hidden">
                        
                        {/* Depth Bar Background */}
                        <div 
                            className={`absolute right-0 top-0 bottom-0 opacity-10 ${order.type === 'sell' ? 'bg-red-500' : 'bg-[#BFFF00]'}`}
                            style={{ width: `${Math.random() * 100}%` }}
                        />

                        <span className={`relative z-10 ${order.type === 'sell' ? 'text-red-500' : 'text-[#BFFF00]'}`}>
                            {order.price}
                        </span>
                        <span className="relative z-10 text-white font-medium">
                            {order.size}
                        </span>
                    </div>
                 ))}
             </div>
        </div>

        {/* Action Buttons */}
        <div className="p-3 border-t border-[#BFFF00]/20 grid grid-cols-2 gap-2">
            <button className="bg-[#BFFF00] hover:bg-[#9ecc00] text-black font-bold py-3 text-xs rounded uppercase tracking-wider flex items-center justify-center gap-1 transition-all">
                <ArrowUp className="w-3 h-3" /> Buy
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 text-xs rounded uppercase tracking-wider flex items-center justify-center gap-1 transition-all">
                <ArrowDown className="w-3 h-3" /> Sell
            </button>
        </div>

        <div className="p-2 border-t border-white/5 flex justify-center text-[10px] text-slate-500 hover:text-[#BFFF00] cursor-pointer transition-colors">
            <div className="flex items-center gap-1">
                <History className="w-3 h-3" />
                <span>VIEW HISTORY</span>
            </div>
        </div>
    </div>
  );
}
