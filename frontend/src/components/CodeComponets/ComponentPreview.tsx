import { componentBreakpointsData } from "@/utils/data/ComponentBreakpointsData";
import { useIframeRenderer } from "@/utils/hooks/useIframeRenderer";
import { ComponentBreakpointsType } from "@/utils/Types";
import { Chip, Divider } from "@heroui/react";
import { useState } from "react";
import CopyButton from "../ui/CopyButton";
import ComponentPreviewIframe from "./ComponentPreviewIframe";
import ComponetBreakpoints from "./ComponetBreakpoints";
import Link from "next/link";

export default function ComponentPreview({
  code,
  componentTitle,
  uniqueSlug,
  showVisit = false,
}: {
  code: string;
  componentTitle: string;
  uniqueSlug?: string;
  showVisit?: boolean;
}) {
  const [componentBreakpoint, setComponetBreakpoint] =
    useState<ComponentBreakpointsType>({ name: "full", width: "100%" });
  const iframeRef = useIframeRenderer(code);
  return (
    <div
      className="border border-slate-700 rounded-md"
      style={{ maxWidth: componentBreakpoint.width }}
    >
      <div className="flex items-center justify-between px-4 py-2 ">
        <div className="flex gap-2">
          {componentBreakpointsData.map((item, index) => (
            <ComponetBreakpoints
              key={index}
              title={item.name}
              icon={item.icon}
              width={item.width}
              componentBreakpoint={componentBreakpoint}
              setComponetBreakpoint={setComponetBreakpoint}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {showVisit && (
            <Link href={`/components/${uniqueSlug}`}>
              <Chip size="sm">{"</> View Code"}</Chip>
            </Link>
          )}
          <CopyButton value={code} />
        </div>
      </div>
      <Divider />
      <div className="p-4">
        <ComponentPreviewIframe
          componentTitle={componentTitle}
          iframeRef={iframeRef}
          previewWidth={componentBreakpoint.width}
          previewHeight="h-[400px] xl:h-[400px]"
        />
      </div>
    </div>
  );
}
