import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-[#0D0D12] text-white selection:bg-[#7C3AED] selection:text-white font-sans">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto p-8 relative">
           {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
