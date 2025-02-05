"use client";
import React, { Fragment, use } from "react";
import { AppNavbar } from "../components/ui/AppNavbar";
import { Footer } from "../components/ui/Footer";
import { useTheme } from "next-themes";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const {theme} = useTheme();
  return (
    <Fragment>
      <main className={`${theme} text-foreground bg-background`}>
        <AppNavbar />
        <div className="max-w-screen-xl h-auto mx-auto px-6 mb-7">
          {children}
        </div>
        <Footer />
      </main>
    </Fragment>
  );
};
