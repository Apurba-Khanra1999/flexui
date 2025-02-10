import { Spinner } from "@heroui/react";
import React from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full max-h-svh">
      <Spinner />
    </div>
  );
};
