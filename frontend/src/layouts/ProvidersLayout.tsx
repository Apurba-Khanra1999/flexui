"use client";

import { HeroUIProvider } from "@heroui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export const ProvidersLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient();
  const google_client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <GoogleOAuthProvider clientId={google_client_id as string}>
            {children}
          </GoogleOAuthProvider>
        </NextThemesProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  );
};
