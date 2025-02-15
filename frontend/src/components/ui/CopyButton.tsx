"use client";
import { Button, Tooltip } from "@heroui/react";
import { useClipboard } from "@heroui/use-clipboard";
import { useEffect } from "react";
import { TbCopyCheckFilled, TbCopyPlusFilled } from "react-icons/tb";
import { ToastNotification } from "./NotificationToast";

function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const { copy, copied } = useClipboard();
  useEffect(()=>{
    if(copied){
      ToastNotification("success","Code Copied To Clipboard.")
    }
  },[copy,copied])
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
