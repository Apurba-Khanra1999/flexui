"use client";
import { AccountContext } from "@/utils/Context/AccountContext";
import useLogout from "@/utils/Hooks/useLogout";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React, { useContext } from "react";

export default function ProfileDropdown() {
  const { accountData } = useContext(AccountContext);
  const { logout } = useLogout();
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          //   color="secondary"
          name={accountData.username}
          size="sm"
          src={
            accountData.profilePic ||
            "https://www.flaticon.com/free-icons/profile-image"
          }
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{accountData.email}</p>
        </DropdownItem>
        <DropdownItem key="id">{accountData.id}</DropdownItem>
        <DropdownItem key="username">{accountData.username}</DropdownItem>
        <DropdownItem key="logout" color="danger">
          <Button onPress={logout} color="danger">
            Log Out
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
