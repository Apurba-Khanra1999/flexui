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
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { ThemeSwitcher } from "../ThemeSwitcher";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Elements", href: "/elements" },
  { name: "About", href: "/about" },
];

export const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { accountData } = useContext(AccountContext);
  const { onOpen } = useContext(ModalContext);
  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/">
          <NavbarBrand className="gap-2 sm:text-xl font-bold">
            <BsStack />
            <p className="font-bold text-inherit">FlexUI.</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={pathname === item.href}>
            <Link href={item.href} color="foreground">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
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
        <div className="hidden sm:block">
          <ThemeSwitcher />
        </div>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link
              className={`w-full text-base font-medium ${pathname === item.href ? "text-primary" : "text-base"}`}
              href={item.href}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
