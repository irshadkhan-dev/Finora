import { AppSidebar } from "@/components/app-sidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getLoggedInUser } from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await getLoggedInUser();

  if (!user) redirect("/signin");
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarTrigger size={"lg"} className="-ml-1 max-sm:hidden" />
      <main className="min-h-screen w-full">{children}</main>
    </SidebarProvider>
  );
}
