import { Zap } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-12 text-center space-y-6">
      {/* Floating Logo */}
      <div className="relative group">
         <div className="absolute inset-0 bg-[#BFFF00]/20 blur-[30px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
         <div className="relative w-16 h-16 bg-gradient-to-br from-[#1a1f1a] to-black border border-[#BFFF00]/30 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:border-[#BFFF00] transition-colors duration-500">
            <Zap className="w-8 h-8 text-[#BFFF00] fill-[#BFFF00]" />
         </div>
      </div>

      {/* Greetings */}
      <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
         <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Good to See You, <span className="text-[#BFFF00]">Sarthak!</span>
         </h1>
         <p className="text-slate-400 text-lg font-light">
            How Can I Assist Your Portfolio Today?
         </p>
      </div>
    </div>
  );
}
