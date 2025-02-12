import { Spinner } from "@heroui/react";
import React from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Spinner size="lg"/>
    </div>
  );
};
