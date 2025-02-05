import { Button } from "@heroui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export const GoogleButton = ({
  title,
  onPress,
  size,
}: {
  title: string;
  onPress?: () => void;
  size?: "sm" | "md" | "lg" | undefined;
}) => {
  return (
    <Button
      size={size}
      fullWidth
      variant="bordered"
      startContent={<FcGoogle size={24} />}
      onPress={onPress}
    >
      {title}
    </Button>
  );
};
