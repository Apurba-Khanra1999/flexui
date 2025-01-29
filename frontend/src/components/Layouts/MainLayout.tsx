import React, { Fragment } from "react";
import { AppNavbar } from "../AppNavbar";
import { Footer } from "../Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <AppNavbar />
      <div className="max-w-screen-xl h-auto mx-auto px-6 mb-7">{children}</div>
      <Footer />
    </Fragment>
  );
};
