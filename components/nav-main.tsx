"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import PlaidLink from "./PlaidLink";

export function NavMain({
  items,
  user,
}: {
  items: {
    title: string;
    url: string;
    icon?: any;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  user: any;
}) {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item, index) => {
          const isActive =
            pathname === item.url || pathname.startsWith(`${item.url}/`);
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={cn("py-8", {
                  "bg-gradient-to-r from-[#0179FE] to-[#4893FF] text-white hover:text-white":
                    isActive,
                  "flex flex-col items-center": !open,
                })}
              >
                <a href={item.url} className="">
                  <item.icon />

                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <PlaidLink variant="" user={user} />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
