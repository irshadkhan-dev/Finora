"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: any;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
          <Image
            src={activeTeam.logo}
            alt="brand logo"
            className="size-8"
            width={20}
            height={20}
          />
        </div>
        <div className="grid flex-1 text-left text-3xl leading-tight">
          <span className="truncate font-semibold">{activeTeam.name}</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenu>
  );
}
