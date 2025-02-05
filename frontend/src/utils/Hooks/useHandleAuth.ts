import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import request from "../AxiosUtils";
import { SIGN_IN, SIGN_UP } from "../AxiosUtils/api";
import { AuthFormType, UserAccountType } from "../Types";
import { profile } from "console";
import { Dispatch, SetStateAction, useContext } from "react";
import { AccountContext } from "../Context/AccountContext";
import { ModalContext } from "../Context/ModalContext";


export const AuthHandle = (responseData: Record<string, any>, setAccountData: Dispatch<SetStateAction<UserAccountType>>) => {
  const userObj = {
    username: responseData?.user?.username,
    email: responseData?.user?.email,
    id: responseData?.user?.id,
    profilePic: responseData?.user?.profilePic,
  }
  setAccountData(userObj);
  localStorage.setItem("account", JSON.stringify(userObj));
};
const useHandleAuth = () => {
  const { setAccountData } = useContext(AccountContext);
  const { onClose } = useContext(ModalContext)

  return useMutation(
    {
      mutationFn: async (data: AuthFormType) => {

        return request({
          url: data?.username ? SIGN_UP : SIGN_IN,
          method: "POST",
          data: data
        }).then((response) => {
          onClose();
          AuthHandle(response, setAccountData)
        });
      },
    });
};

export default useHandleAuth;