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
    { title: "Home", url: "/", icon: Home },
    { title: "My Banks", url: "/my-bank", icon: CircleDollarSign },
    { title: "Transaction History", url: "/transaction-history", icon: Sheet },
    { title: "Payment Transfer", url: "/payment-transfer", icon: Wallet },
  ],
};

export function AppSidebar({ user }: RightSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-white">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <NavMain items={data.items} user={user} />
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
