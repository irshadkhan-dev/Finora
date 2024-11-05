"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { logoutAccount } from "@/lib/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function NavUser({ user }: RightSidebarProps) {
  const shortUserName = user.firstName.slice(0, 2);
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push("/sign-in");
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
            <AvatarFallback className="rounded-lg">
              {shortUserName}
            </AvatarFallback>
          </Avatar>
          <div className="flex text-left text-sm leading-tight items-center gap-3">
            <div className="flex flex-col">
              <span className="truncate font-semibold">{user.firstName}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>

            <div className="footer_image" onClick={handleLogOut}>
              <Image src="icons/logout.svg" fill alt="jsm" />
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
