"use client";

import { AuthModal } from "@/components/Auth/AuthModal";
import ProfileDropdown from "@/components/Auth/ProfileDropdown";
import { AccountContext } from "@/utils/Context/AccountContext";
import { ModalContext } from "@/utils/Context/ModalContext";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { BsStack } from "react-icons/bs";

export const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { accountData } = useContext(AccountContext);
  const { onOpen } = useContext(ModalContext);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-2 sm:text-xl font-bold">
          <BsStack />
          <p className="font-bold text-inherit">FlexUI.</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="#">
            Components
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="items-center sm:hidden" justify="center">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="md"
            startContent={<BiSearch size={18} />}
            type="search"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10 hidden sm:block",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<BiSearch size={18} />}
          type="search"
        />
        <div>
          {accountData.username ? (
            <ProfileDropdown />
          ) : (
            <Button size="sm" color="primary" onPress={() => onOpen()}>
              Sign In.
            </Button>
          )}
          <AuthModal />
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
