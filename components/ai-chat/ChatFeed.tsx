import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

interface ChatFeedProps {
    messages: Message[];
}

export function ChatFeed({ messages }: ChatFeedProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-hide">
        {messages.map((msg) => (
            <div 
                key={msg.id} 
                className={cn(
                    "flex gap-4 max-w-3xl mx-auto",
                    msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                )}
            >
                {/* Avatar */}
                <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border",
                    msg.role === 'user' 
                        ? "bg-[#1a1a1a] border-white/10 text-white" 
                        : "bg-[#0f2e0f] border-[#BFFF00]/30 text-[#BFFF00]"
                )}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed max-w-[80%]",
                    msg.role === 'user' 
                        ? "bg-[#1a1a1a] text-white rounded-tr-none border border-white/5" 
                        : "bg-transparent text-slate-300 rounded-tl-none border border-[#BFFF00]/10"
                )}>
                    {msg.content}
                </div>
            </div>
        ))}
    </div>
  );
}
