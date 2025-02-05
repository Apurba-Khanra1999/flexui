"use client";


import { useDisclosure } from "@heroui/react";
import React, { createContext } from "react";

export const ModalContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});
function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
