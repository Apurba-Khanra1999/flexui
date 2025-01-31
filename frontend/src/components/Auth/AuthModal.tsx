import { AuthModalType } from "@/utils/Types";
import { AppModal } from "../AppModal";
import { AuthForm } from "./AuthForm";

export const AuthModal = ({ isOpen, onClose }: AuthModalType) => {
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
