"use client";

import { SidebarParentItemType } from "@/utils/Types";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { Loader } from "../Loader";
import SidebarItem from "./SidebarItem";
import SidebarParentItem from "./SiderbarParentItem";

export function ComponentsSidebar({ data }: { data: SidebarParentItemType[] }) {
  // console.log(data);
  const pathname = usePathname();
  const path = pathname.split("/").pop();

  return (
    <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-48 shrink-0 border-r md:sticky md:block">
      <Suspense fallback={<Loader />}>
        <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
                Getting Started{" "}
              </h4>
              <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                <SidebarItem
                  uiName="All"
                  uniqueSlug="components"
                  pathname={path}
                />
                {data.map((item, index) => (
                  <SidebarParentItem item={item} pathname={path} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </aside>
  );
}
