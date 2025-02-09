import { ComponentsSidebar } from "@/components/ui/ComponentsSidebar";
import {
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import request from "@/utils/AxiosUtils";
import { GET_DOCS_LIST } from "@/utils/AxiosUtils/api";
import React from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await request({url:GET_DOCS_LIST,method:"GET"})
  return (
    <div>
      <SidebarProvider>
        <ComponentsSidebar data={data}/>
        <div>
          <SidebarTrigger />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
