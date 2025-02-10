import ComponentPreviewIframe from "@/components/CodeComponets/ComponentPreviewIframe";
import { useIframeRenderer } from "@/utils/hooks/useIframeRenderer";
import { Card, CardBody, CardFooter, Divider } from "@heroui/react";
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
      <Link href={`/components/${previewData?.uniqueSlug}`}>
        <Card isPressable shadow="sm" radius="sm" fullWidth className="w-full">
          <CardBody>
            <ComponentPreviewIframe
              iframeRef={iframeRef}
              componentTitle={previewData?.uiName as string}
            />
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{previewData?.uiName as string}</p>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};
