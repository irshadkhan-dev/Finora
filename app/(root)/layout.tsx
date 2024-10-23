import { AppSidebar } from "@/components/app-sidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger size={"lg"} className="-ml-1 max-sm:hidden" />
      <main className="min-h-screen w-full">{children}</main>
    </SidebarProvider>
  );
}
