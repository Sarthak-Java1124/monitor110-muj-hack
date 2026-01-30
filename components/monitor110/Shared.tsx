'use client';

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HudContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative border border-[#00FFF0]/20 bg-[#050505] overflow-hidden", className)}>
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00FFF0] z-20" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00FFF0] z-20" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00FFF0] z-20" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00FFF0] z-20" />
        
        {/* Scanlines Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10 opacity-20" />
        
        <div className="relative z-10 w-full h-full">
            {children}
        </div>
    </div>
  );
}

export function HudHeader({ title, code }: { title: string; code?: string }) {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#00FFF0]/20 bg-[#00FFF0]/5">
            <span className="font-mono text-xs text-[#00FFF0] font-bold tracking-widest uppercase">{title}</span>
            {code && <span className="font-mono text-[10px] text-[#00FFF0]/50">{code}</span>}
        </div>
    )
}
