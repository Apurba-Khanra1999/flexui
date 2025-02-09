import { ComponentsSidebar } from "@/components/ui/ComponentsSidebar";
import request from "@/utils/AxiosUtils";
import { GET_DOCS_LIST } from "@/utils/AxiosUtils/api";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await request({ url: GET_DOCS_LIST, method: "GET" });
  return (
    <div className="flex gap-6">
      <ComponentsSidebar data={data} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
