"use client";

import { AppModalType } from "@/utils/Types";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

export const AppModal = ({
  children,
  headerTitle,
  isOpen,
  onClose,
  backdrop = "transparent",
  size = "md",
  ModalFooterComponent,
}: AppModalType) => {
  return (
    <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="flex items-center justify-center">
          {headerTitle}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {ModalFooterComponent && (
          <ModalFooter>{ModalFooterComponent}</ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
