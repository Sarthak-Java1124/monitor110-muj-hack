'use client';
import { Terminal, ShieldAlert, Eye, Lock, FileCode } from 'lucide-react';

const logs = [
    { id: '0x1A2...', action: 'MEMPOOL_SCAN', status: 'DETECTED', time: '10:42:01', risk: 'HIGH' },
    { id: '0x8B9...', action: 'LIQUIDATION', status: 'EXECUTED', time: '10:42:00', risk: 'MED' },
    { id: '0x4C3...', action: 'WHALE_MOVE', status: 'TRACKING', time: '10:41:58', risk: 'LOW' },
    { id: '0x99D...', action: 'FLASH_LOAN', status: 'PENDING', time: '10:41:55', risk: 'HIGH' },
    { id: '0x22F...', action: 'BRIDGE_TX', status: 'VERIFIED', time: '10:41:52', risk: 'LOW' },
    { id: '0x7E1...', action: 'CONTRACT_DEP', status: 'SUCCESS', time: '10:41:48', risk: 'LOW' },
    { id: '0x33A...', action: 'API_CALL', status: 'BLOCKED', time: '10:41:45', risk: 'MED' },
    { id: '0x55B...', action: 'AUTH_ATTEMPT', status: 'FAILED', time: '10:41:42', risk: 'HIGH' },
    { id: '0x11C...', action: 'DATA_SYNC', status: 'COMPLETE', time: '10:41:40', risk: 'LOW' },
    { id: '0x66D...', action: 'NODE_SYNC', status: 'ERROR', time: '10:41:38', risk: 'MED' },
    { id: '0x88E...', action: 'HEARTBEAT', status: 'OK', time: '10:41:35', risk: 'LOW' },
    { id: '0x99F...', action: 'CACHE_CLR', status: 'DONE', time: '10:41:32', risk: 'LOW' },
    { id: '0xAA1...', action: 'REBALANCE', status: 'CALC', time: '10:41:30', risk: 'LOW' },
    { id: '0xBB2...', action: 'ARBITRAGE', status: 'MISSED', time: '10:41:28', risk: 'MED' },
    { id: '0xCC3...', action: 'GAS_SPIKE', status: 'ALERT', time: '10:41:25', risk: 'HIGH' },
    { id: '0xDD4...', action: 'POOL_JOIN', status: 'SIGNED', time: '10:41:22', risk: 'LOW' },
    { id: '0xEE5...', action: 'TOKEN_SWAP', status: 'CONFIRM', time: '10:41:20', risk: 'LOW' },
    { id: '0xFF6...', action: 'LIMIT_ORD', status: 'FILLED', time: '10:41:18', risk: 'LOW' },
];

export function TruthTerminal() {
  return (
    <div className="h-full border border-[#BFFF00]/20 bg-black flex flex-col overflow-hidden relative group">
        <div className="absolute inset-0 bg-[#BFFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        {/* Header */}
        <div className="p-2 border-b border-[#BFFF00]/20 flex justify-between items-center bg-[#BFFF00]/10">
            <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#BFFF00]" />
                <span className="text-[#BFFF00] font-bold text-xs tracking-wider">TRUTH_TERMINAL_V1</span>
            </div>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#BFFF00] animate-pulse" />
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-2 font-mono text-[10px] scrollbar-hide">
            <div className="flex justify-between text-[#BFFF00]/50 mb-2 px-1 uppercase tracking-wider">
                <span>Hash</span>
                <span>Event</span>
                <span>Stat</span>
            </div>
            <div className="space-y-0.5">
                {logs.map((log, i) => (
                    <div key={i} className="flex justify-between items-center px-1 py-1 hover:bg-[#BFFF00]/10 transition-colors cursor-pointer border-b border-white/5">
                        <span className="text-slate-500 w-16">{log.time}</span>
                        <span className="text-white w-20 truncate">{log.action}</span>
                        <span className={`w-16 text-right font-bold ${
                            log.risk === 'HIGH' ? 'text-red-500' : 
                            log.risk === 'MED' ? 'text-yellow-500' : 'text-[#BFFF00]'
                        }`}>
                            {log.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Stats */}
        <div className="p-2 border-t border-[#BFFF00]/20 flex justify-between text-[9px] text-slate-500 font-mono">
            <span>MEM: 64TB</span>
            <span>UPTIME: 99.99%</span>
        </div>
    </div>
  );
}
