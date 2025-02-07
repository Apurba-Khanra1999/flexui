
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";

import { Dispatch, SetStateAction, useContext } from "react";
import { AccountContext } from "../Context/AccountContext";
import { ModalContext } from "../Context/ModalContext";
import { UserAccountType } from "../Types";
const GoogleAuthHandle = (
    responseData: Omit<TokenResponse, "error" | "error_description" | "error_uri">, setAccountData: Dispatch<SetStateAction<UserAccountType>>

) => {
    fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${responseData?.access_token}`
    )
        .then(async (response) => {
            const userdata = await response.json();
            const userObj = {
                id: userdata?.id,
                username: userdata?.name,
                email: userdata?.email,
                profilePic: userdata?.picture,
            };


            setAccountData(userObj)
            if (typeof window !== "undefined") {
                localStorage.setItem("account", JSON.stringify(userObj));
            }

        })
        .catch((err) => console.log(err));
    // // const ISSERVER = typeof window === "undefined";
};

function useGoogleAuth() {
    const { setAccountData } = useContext(AccountContext)
    const { onClose } = useContext(ModalContext)
    const google_auth = useGoogleLogin({

        onSuccess: (responseData) => {
            onClose()
            GoogleAuthHandle(responseData, setAccountData);
        },
        onError: (error) => console.error("Google Login Failed:", error),
    });

    return { google_auth };
}

export default useGoogleAuth;