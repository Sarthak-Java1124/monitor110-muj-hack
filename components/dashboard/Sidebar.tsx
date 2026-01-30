'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Home, Wallet, PieChart, Settings, LogOut, Circle } from 'lucide-react';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Home', href: '/dashboard' },
  { icon: Wallet, label: 'Wallet', href: '/dashboard/wallet' },
  { icon: PieChart, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-white/5 bg-[#0D0D12]">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <Circle className="w-5 h-5 text-[#BFFF00] fill-[#BFFF00]" />
          <span className="text-white font-bold text-xl tracking-wide">Nuance</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton 
                asChild
                className={`w-full justify-start text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all ${
                   pathname === item.href ? 'text-white bg-white/5' : ''
                }`}
              >
                <a href={item.href} className="flex items-center gap-3 py-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors w-full px-2 py-2">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
