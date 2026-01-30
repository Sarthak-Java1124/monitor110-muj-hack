import { cn } from "@/lib/utils";

interface ChatLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function ChatLayout({ children, className }: ChatLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-black relative overflow-hidden flex flex-col", className)}>
      {/* Deep Forest Green Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f2e0f] via-transparent to-transparent opacity-60 pointer-events-none" />
      
      {/* Scanline Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-0 opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-5xl mx-auto w-full px-4 md:px-6">
        {children}
      </div>
    </div>
  );
}
