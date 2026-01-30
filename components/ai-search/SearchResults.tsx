import { StockCard, StockData } from "./StockCard";

// Mock Data Generator based on query
const getMockResults = (query: string): StockData[] => [
  {
    ticker: "BTC",
    name: "Bitcoin",
    price: "$64,230.50",
    change: "+2.4%",
    description: "The decentralized digital currency is showing strong on-chain accumulation. Whale wallets have increased holdings by 4% in the last 48h.",
    risk: "Medium"
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corp",
    price: "$920.10",
    change: "+1.2%",
    description: "Leading AI hardware manufacturer. Market sentiment is heavily bullish ahead of the upcoming earnings report, though RSI indicates overbought conditions.",
    risk: "Low"
  },
  {
    ticker: "SOL",
    name: "Solana",
    price: "$145.20",
    change: "-0.5%",
    description: "High-performance L1 blockchain. Recent network congestion concerns have dampened short-term price action despite high NFT volume.",
    risk: "High"
  },
  {
    ticker: "MSTR",
    name: "MicroStrategy",
    price: "$1,450.00",
    change: "+5.1%",
    description: "Enterprise analytics and bitcoin accumulation proxy. Correlated leverage on BTC price action with heightened volatility.",
    risk: "High"
  }
];

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const results = getMockResults(query);

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-xl font-light">
                Analysis Results for <span className="text-[#BFFF00] font-serif italic">"{query}"</span>
            </h2>
            <span className="text-slate-600 text-xs uppercase tracking-widest font-mono">
                {results.length} Matches Found
            </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {results.map((stock) => (
                <StockCard key={stock.ticker} data={stock} />
            ))}
        </div>
    </div>
  );
}
