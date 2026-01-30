import { ArrowUpRight, ShieldAlert, ShieldCheck, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export interface StockData {
  ticker: string;
  name: string;
  price: string;
  change: string;
  description: string;
  risk: 'Low' | 'Medium' | 'High';
}

interface StockCardProps {
  data: StockData;
}

export function StockCard({ data }: StockCardProps) {
  const router = useRouter();

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-500 border-green-500/30 bg-green-500/10';
      case 'Medium': return 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10';
      case 'High': return 'text-red-500 border-red-500/30 bg-red-500/10';
      default: return 'text-slate-500';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low': return <ShieldCheck className="w-4 h-4" />;
      case 'Medium': return <Shield className="w-4 h-4" />;
      case 'High': return <ShieldAlert className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div 
      onClick={() => router.push(`/ai-chat?context=${data.ticker}`)}
      className="group relativebg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-[#BFFF00] hover:shadow-[0_0_30px_-10px_rgba(191,255,0,0.15)] transition-all duration-300 cursor-pointer overflow-hidden bg-black"
    >
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex justify-between items-start mb-4">
            <div>
                <h3 className="text-2xl font-bold text-white font-serif tracking-tight">{data.ticker}</h3>
                <span className="text-slate-500 text-sm">{data.name}</span>
            </div>
            <div className={cn("flex items-center gap-1 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider", getRiskColor(data.risk))}>
                {getRiskIcon(data.risk)}
                <span>{data.risk} Risk</span>
            </div>
        </div>

        <div className="mb-6">
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-mono text-white">{data.price}</span>
                <span className={cn("text-sm font-mono", data.change.startsWith('+') ? "text-[#BFFF00]" : "text-red-500")}>
                    {data.change}
                </span>
            </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {data.description}
        </p>

        <div className="flex items-center text-[#BFFF00] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            <span>Ask AI Agent about {data.ticker}</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
        </div>
    </div>
  );
}
