"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useParams } from "next/navigation";

export function ComponentsSidebar({
  data,
}: {
  data: Record<string, unknown>[];
}) {
  // console.log(data);
  const pathname = useParams();
  return (
    <Sidebar>
      <SidebarContent className="mt-16">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.map((item) => (
                <SidebarMenuItem key={item?.id as string}>
                  <Link href={`/components/${item?.uniqueSlug as string}`}>
                    <SidebarMenuButton
                      className={`hover:bg-slate-200 dark:hover:bg-slate-600 ${item?.uniqueSlug === pathname?.component ? "bg-slate-200 dark:bg-slate-600" : ""}`}
                    >
                      <span>{item?.uiName as string}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
