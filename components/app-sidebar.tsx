"use client";

import * as React from "react";
import { CircleDollarSign, Home, Landmark, Sheet, Wallet } from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "irshadkhan.dev",
    email: "irshadkhan.devop@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Finora",
      logo: "/icons/logo.svg",
      plan: "Enterprise",
    },
  ],
  items: [
    { title: "Home", url: "/dashboard", icon: Home },
    { title: "My Banks", url: "/banks", icon: CircleDollarSign },
    { title: "Transaction History", url: "/history", icon: Sheet },
    { title: "Payment Transfer", url: "/payment-transfer", icon: Wallet },
    { title: "Connect Bank", url: "/bank-connect", icon: Landmark },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-white">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <NavMain items={data.items} />
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
