import { Search, Mic, Plus, ArrowUpRight } from "lucide-react";

const suggestions = [
  "Analyze $BTC Divergence", 
  "Whale Move Summary", 
  "Yield Farm Strategy"
];

interface ChatInputProps {
    input: string;
    setInput: (val: string) => void;
    onSend: () => void;
    isLoading: boolean;
}

export function ChatInput({ input, setInput, onSend, isLoading }: ChatInputProps) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
       {/* Command Center Container */}
       <div className="relative bg-[#0a0a0a] border border-[#BFFF00]/30 rounded-[24px] p-1 overflow-hidden group hover:border-[#BFFF00]/60 transition-colors duration-300">
           
           {/* Top Status Bar */}
           <div className="flex items-center justify-between px-4 py-2 border-b border-[#BFFF00]/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#BFFF00] uppercase tracking-wider font-bold">⚡ Unlock Alpha Insights</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#BFFF00] rounded-full animate-pulse shadow-[0_0_8px_#BFFF00]" />
                    <span className="text-[10px] text-[#BFFF00]/80 uppercase tracking-widest font-mono">Terminal Active</span>
                </div>
           </div>

           {/* Input Area */}
           <div className="flex items-center px-4 py-4 md:py-6 gap-4">
               <button className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                   <Plus className="w-5 h-5" />
               </button>
               
               <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSend()}
                  placeholder="Ask anything about the markets..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder-slate-600 font-medium"
               />

               <div className="flex items-center gap-2">
                   {isLoading ? (
                       <div className="w-8 h-8 flex items-center justify-center">
                           <div className="w-4 h-4 border-2 border-[#BFFF00] border-t-transparent rounded-full animate-spin" />
                       </div>
                   ) : (
                       <>
                           <button className="p-2 rounded-full hover:bg-white/10 text-[#BFFF00] transition-colors">
                               <Mic className="w-5 h-5" />
                           </button>
                           {input.trim() && (
                                <button onClick={onSend} className="p-2 bg-[#BFFF00] rounded-xl text-black hover:scale-105 transition-transform">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                           )}
                       </>
                   )}
               </div>
           </div>
       </div>

       {/* Quick Suggestions */}
       <div className="flex flex-wrap justify-center gap-3">
            {suggestions.map((pill) => (
                <button 
                    key={pill}
                    onClick={() => setInput(pill)} 
                    className="px-4 py-2 rounded-full border border-[#0f2e0f] bg-[#050a05] text-[#BFFF00]/70 text-sm font-medium hover:border-[#BFFF00] hover:text-[#BFFF00] hover:shadow-[0_0_15px_-5px_#BFFF00] transition-all duration-300"
                >
                    {pill}
                </button>
            ))}
       </div>
    </div>
  );
}
