"use client";
import { Button, Tooltip } from "@heroui/react";
import { useClipboard } from "@heroui/use-clipboard";
import { TbCopyCheckFilled, TbCopyPlusFilled } from "react-icons/tb";

function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const { copy, copied } = useClipboard();
  return (
    <Tooltip content={copied ? "Copied!" : "Copy"}>
      <Button
        startContent={
          copied ? (
            <TbCopyCheckFilled size={18} />
          ) : (
            <TbCopyPlusFilled size={18} />
          )
        }
        isIconOnly
        size="sm"
        // color="primary"
        className={className}
        onPress={() => copy(value)}
      />
    </Tooltip>
  );
}

export default CopyButton;
