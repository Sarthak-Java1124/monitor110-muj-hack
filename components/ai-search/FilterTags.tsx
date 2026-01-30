import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tags = [
  "Crypto", "Stocks", "Whale Alerts", "NFT", "Market Cap", 
  "24h Volume", "Staking", "Gas Fees", "AI Tokens", "DeFi",
  "Regulation", "Macro", "Stablecoins"
];

interface FilterTagsProps {
  activeTag: string;
  onTagSelect: (tag: string) => void;
}

export function FilterTags({ activeTag, onTagSelect }: FilterTagsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-8">
      {tags.map((tag, i) => {
        const isActive = activeTag === tag;
        return (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group border",
              isActive 
                ? "bg-[#BFFF00] text-black border-[#BFFF00] shadow-[0_0_15px_rgba(191,255,0,0.4)]" 
                : "bg-[#111] text-gray-400 border-white/5 hover:border-white/20 hover:text-white"
            )}
          >
             {isActive && (
                <div className="absolute inset-0 bg-white/20 blur-sm -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
             )}
             {tag}
          </button>
        );
      })}
    </div>
  );
}
