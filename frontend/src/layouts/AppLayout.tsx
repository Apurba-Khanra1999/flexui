import AccountProvider from "@/utils/Context/AccountContext";
import React from "react";
import { MainLayout } from "./MainLayout";
import { ProvidersLayout } from "./ProvidersLayout";
import ModalContextProvider from "@/utils/Context/ModalContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
