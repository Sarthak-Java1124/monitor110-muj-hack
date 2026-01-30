import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
  onSubmit: () => void;
}

export function SearchBar({ query, setQuery, onSubmit }: SearchBarProps) {
  return (
    <div className="relative group w-full max-w-2xl mx-auto mt-8">
        {/* Radial Flare Background */}
        <div className="absolute inset-0 bg-[#BFFF00]/10 blur-[40px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />

        <div className="relative flex items-center w-full h-16 bg-[#0a0a0a] border border-[#BFFF00]/30 rounded-2xl px-6 transition-all duration-300 group-hover:border-[#BFFF00] group-hover:shadow-[0_0_30px_-10px_rgba(191,255,0,0.3)]">
            <Search className="w-5 h-5 text-[#BFFF00]/70 mr-4" />
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
                placeholder="Query market trends, whale movements, or asset data..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/30 font-sans text-lg h-full"
            />
        </div>
    </div>
  );
}
