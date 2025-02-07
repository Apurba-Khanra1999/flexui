import { ModalContext } from "@/utils/Context/ModalContext";
import { useContext, useEffect } from "react";
import { AppModal } from "../AppModal";
import { AuthForm } from "./AuthForm";
import { AccountContext } from "@/utils/Context/AccountContext";

export const AuthModal = () => {
  const { isOpen, onClose, onOpen } = useContext(ModalContext);
  const {accountData} = useContext(AccountContext)
  useEffect(() => {
    // Open the modal after 20 seconds
    if(accountData?.username) return
    const timer = setTimeout(() => {
      onOpen();
    }, 5000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

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
