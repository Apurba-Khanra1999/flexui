import React from "react";
import { ProvidersLayout } from "./ProvidersLayout";
import { MainLayout } from "./MainLayout";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProvidersLayout>
      <MainLayout>{children}</MainLayout>
    </ProvidersLayout>
  );
};
