import AccountProvider from "@/utils/Context/AccountContext";
import ModalContextProvider from "@/utils/Context/ModalContext";
import React from "react";
import { MainLayout } from "./MainLayout";
import { ProvidersLayout } from "./ProvidersLayout";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProvidersLayout>
      <ModalContextProvider>
        <AccountProvider>
          <MainLayout>{children}</MainLayout>
        </AccountProvider>
      </ModalContextProvider>
    </ProvidersLayout>
  );
};
