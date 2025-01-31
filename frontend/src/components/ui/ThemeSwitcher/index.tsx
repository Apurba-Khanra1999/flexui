"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme(); // Ensure 'theme' is also extracted
  const [isDark, setIsDark] = React.useState(theme === "dark");

  useEffect(() => {
    if (isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isDark, setTheme]); // ✅ Added 'setTheme' to dependency array

  return (
    <div>
      <Switch
        isSelected={isDark}
        onValueChange={setIsDark}
        color="success"
        endContent={<BiMoon />}
        size="lg"
        startContent={<BiSun />}
      />
    </div>
  );
};
