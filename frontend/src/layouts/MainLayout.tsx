"use client";
import { useTheme } from "next-themes";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { AppNavbar } from "../components/ui/AppNavbar";
import { Footer } from "../components/ui/Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <Fragment>
      <main className={`${theme} text-foreground bg-background`}>
        <AppNavbar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="max-w-screen-xl h-auto mx-auto px-6 mb-7">
          {children}
        </div>
        <Footer />
      </main>
    </Fragment>
  );
};
