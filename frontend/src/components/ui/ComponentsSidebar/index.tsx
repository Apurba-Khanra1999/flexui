"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Suspense } from "react";
import { Loader } from "../Loader";

export function ComponentsSidebar({
  data,
}: {
  data: Record<string, unknown>[];
}) {
  // console.log(data);
  const pathname = usePathname();
  const path = pathname.split("/").pop();
  console.log(path)
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
                  <SidebarItem
                    key={index}
                    pathname={path}
                    uniqueSlug={item?.uniqueSlug as string}
                    uiName={item?.uiName as string}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </aside>
  );
}

const SidebarItem = ({
  pathname,
  uniqueSlug,
  uiName,
}: {
  pathname: string | undefined;
  uniqueSlug: string;
  uiName: string;
}) => {
  return (
    <Link
      className={`group flex h-8 w-full items-center rounded-lg px-2 font-normal text-foreground underline-offset-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-accent-foreground ${pathname === uniqueSlug && "bg-zinc-300 dark:bg-zinc-800"} `}
      href={
        uniqueSlug === "components"
          ? "/components"
          : `/components/${uniqueSlug}`
      }
    >
      <span>{uiName}</span>
    </Link>
  );
};
