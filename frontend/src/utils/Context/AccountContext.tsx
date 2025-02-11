"use client";

import React, { useEffect, useState, createContext } from "react";
import { UserAccountType } from "../Types";

export const AccountContext = createContext<{
  accountData: UserAccountType;
  setAccountData: React.Dispatch<React.SetStateAction<UserAccountType>>;
}>({
  accountData: {
    username: "",
    profilePic: "",
    email: "",
    id: "",
  },
  setAccountData: () => {},
});

const AccountProvider = ({ children }: { children: React.ReactNode }) => {
  const [accountData, setAccountData] = useState<UserAccountType>({
    username: "",
    profilePic: "",
    email: "",
    id: "",
  });

  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      setAccountData(JSON.parse(storedAccount));
    }
  }, []);
  // console.log(accountData);
  return (
    <AccountContext.Provider value={{ accountData, setAccountData }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
