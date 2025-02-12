import ComponentPreviewIframe from "@/components/CodeComponets/ComponentPreviewIframe";
import { useIframeRenderer } from "@/utils/hooks/useIframeRenderer";
import { Card, CardBody, CardFooter, Chip, Divider } from "@heroui/react";
import Link from "next/link";
import React from "react";

export const ComponentWithCodeItem = ({
  previewData,
}: {
  previewData: Record<string, unknown>;
}) => {
  const codeArray = previewData?.codes as Record<string, string>[];
  const code = codeArray[0]?.code;
  const iframeRef: React.RefObject<HTMLIFrameElement | null> =
    useIframeRenderer(code);
  return (
    <div className="break-inside-avoid">
      <Card isPressable shadow="sm" radius="sm" fullWidth  className="w-full h-full">
        <CardBody>
          <ComponentPreviewIframe
            iframeRef={iframeRef}
            componentTitle={previewData?.uiName as string}
          />
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-between items-center">
          <p>{previewData?.uiName as string}</p>
          <Link href={`/components/${previewData?.uniqueSlug}`}>
            <Chip>{"</> View Code"}</Chip>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
