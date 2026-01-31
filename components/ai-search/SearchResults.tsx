import { StockCard, StockData } from "./StockCard";

import { MARKET_SIGNALS } from "@/lib/data";

const getRiskLevel = (score: number) => {
  if (score >= 0.85) return 'Low';
  if (score >= 0.75) return 'Medium';
  return 'High';
};

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  // Filter signals based on query (ticker, name, or description)
  const filteredSignals = MARKET_SIGNALS.filter(signal => {
      const q = query.toLowerCase();
      return (
          signal.asset_symbol.toLowerCase().includes(q) ||
          signal.asset_name.toLowerCase().includes(q) ||
          signal.description.toLowerCase().includes(q) ||
          signal.category.toLowerCase().includes(q) ||
          signal.topic.toLowerCase().includes(q)
      );
  });

  // If no results, maybe show trending/top signals? 
  // For now, let's just show top 4 if no query matches (or if query is generic like "Stock")
  const displaySignals = filteredSignals.length > 0 ? filteredSignals : MARKET_SIGNALS.slice(0, 4);

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-xl font-light">
                Analysis Results for <span className="text-[#BFFF00] font-serif italic">"{query || 'Global'}"</span>
            </h2>
            <span className="text-slate-600 text-xs uppercase tracking-widest font-mono">
                {displaySignals.length} Matches Found
            </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {displaySignals.map((signal) => (
                <StockCard 
                    key={signal.id} 
                    data={{
                        ticker: signal.asset_symbol,
                        name: signal.asset_name,
                        price: `$${signal.price_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                        change: `${signal.trend_24h > 0 ? '+' : ''}${signal.trend_24h}%`,
                        description: signal.description,
                        risk: getRiskLevel(signal.confidence_score) as 'Low' | 'Medium' | 'High'
                    }} 
                />
            ))}
        </div>
    </div>
  );
}
