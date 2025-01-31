"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export const ProvidersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};
