import { cn } from "@/lib/utils";

interface SearchLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function SearchLayout({ children, className }: SearchLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-black flex items-center justify-center p-4", className)}>
      <div 
        className="w-full max-w-4xl relative bg-black border border-[#1a1f1a] rounded-[32px] p-8 md:p-12 overflow-hidden"
        style={{
             boxShadow: '0 0 100px -50px rgba(191, 255, 0, 0.05)'
        }}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BFFF00]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        {children}
      </div>
    </div>
  );
}
