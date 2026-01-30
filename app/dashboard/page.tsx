
import { DashboardHeader } from "@/components/dashboard/Header";
import { CurrencyCard } from "@/components/dashboard/CurrencyCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { SavingsCard } from "@/components/dashboard/SavingsCard";
import { TransactionsList } from "@/components/dashboard/TransactionsList";
import { AIPromoCard, GlassCreditCard } from "@/components/dashboard/PromoWidgets";

export default function DashboardPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto">
      <DashboardHeader />
      
      <div className="grid grid-cols-12 gap-6 pb-12">
        {/* Row 1: Currency, Credit Card, Savings */}
        <CurrencyCard />
        <GlassCreditCard />
        <SavingsCard />
        
        {/* Row 2: Chart, AI Promo, Transactions */}
        <ActivityChart />
        <AIPromoCard />
        <TransactionsList />
      </div>
    </div>
  );
}
