import { AuthModalType } from "@/utils/Types";
import { AppModal } from "../AppModal";
import { AuthForm } from "./AuthForm";
import { useContext } from "react";
import { ModalContext } from "@/utils/Context/ModalContext";

export const AuthModal = () => {
  const { isOpen, onClose } = useContext(ModalContext);
  return (
    <AppModal
      headerTitle="Please Login To Continue."
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
    >
      <div className="my-6">
        <AuthForm />
      </div>
    </AppModal>
  );
};
