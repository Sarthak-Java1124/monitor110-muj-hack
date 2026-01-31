import { PortfolioHeader } from "@/components/monitor110/PortfolioHeader";
import { OriginChart } from "@/components/monitor110/OriginChart";
import { IntelligencePanel } from "@/components/monitor110/IntelligencePanel";

export default function MonitorPage() {
  return (
    <main className="min-h-screen bg-black text-[#BFFF00] font-sans selection:bg-[#BFFF00] selection:text-black flex flex-col">
      {/* SECTION A: Portfolio Header (Top Bar) */}
      <PortfolioHeader />

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-12 p-6 gap-6">
        
        {/* SECTION B: Origin Chart (Main - 66%) */}
        <div className="col-span-12 lg:col-span-8 h-full min-h-[500px]">
            <OriginChart />
        </div>

        {/* SECTION C: Intelligence Panel (Sidebar - 33%) */}
        <div className="col-span-12 lg:col-span-4 h-full min-h-[500px]">
            <IntelligencePanel />
        </div>
      </div>
    </main>
  );
}
