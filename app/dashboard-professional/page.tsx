import { MacroPulse } from "@/components/monitor110/MacroPulse";
import { TruthTerminal } from "@/components/monitor110/TruthTerminal";
import { SignalGraph } from "@/components/monitor110/SignalGraph";
import { ActionDeck } from "@/components/monitor110/ActionDeck";

export default function MonitorPage() {
  return (
    <main className="min-h-screen bg-black text-[#00FFF0] font-mono selection:bg-[#00FFF0] selection:text-black overflow-hidden flex flex-col">
      {/* SECTION A: Macro Pulse (Top Bar) */}
      <MacroPulse />

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-12 p-3 gap-3">
        
        {/* SECTION B: Truth Terminal (Left Sidebar - 25%) */}
        <div className="col-span-12 md:col-span-3 h-full">
            <TruthTerminal />
        </div>

        {/* SECTION C: Signal Graph (Center - 50%) */}
        <div className="col-span-12 md:col-span-6 h-full">
            <SignalGraph />
        </div>

        {/* SECTION D: Action Deck (Right Sidebar - 25%) */}
        <div className="col-span-12 md:col-span-3 h-full">
            <ActionDeck />
        </div>
      </div>
    </main>
  );
}
