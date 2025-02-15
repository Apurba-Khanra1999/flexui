import ComponentPreviewIframe from "@/components/CodeComponets/ComponentPreviewIframe";
import { useIframeRenderer } from "@/utils/hooks/useIframeRenderer";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@heroui/react";
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
      <Card
        shadow="sm"
        radius="sm"
        fullWidth
        className="w-full h-full hover:shadow-md"
      >
        <CardHeader className="flex items-center justify-between bg-gray-100 dark:bg-neutral-800">
          <p>{previewData?.uiName as string}</p>
          <Link href={`/components/${previewData?.uniqueSlug}`}>
            <Chip size="sm">{"</> View Code"}</Chip>
          </Link>
        </CardHeader>
        <Divider />
        <CardBody>
          <ComponentPreviewIframe
            iframeRef={iframeRef}
            componentTitle={previewData?.uiName as string}
          />
        </CardBody>
      </Card>
    </div>
  );
};
