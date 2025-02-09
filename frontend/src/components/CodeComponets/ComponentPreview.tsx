import { extractHTMLFromJSX } from "@/utils";
import { componentBreakpointsData } from "@/utils/data/ComponentBreakpointsData";
import { ComponentBreakpointsType } from "@/utils/Types";
import { Divider } from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import ComponetBreakpoints from "./ComponetBreakpoints";
import ComponetPreviewIframe from "./ComponetPreviewIframe";
import CopyButton from "../ui/CopyButton";

export default function ComponentPreview({
  code,
  componentTitle,
}: {
  code: string;
  componentTitle: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [componentBreakpoint, setComponetBreakpoint] =
    useState<ComponentBreakpointsType>({ name: "full", width: "100%" });

  console.log(componentBreakpoint);
  useEffect(() => {
    const htmlCode = extractHTMLFromJSX(code);
    if (iframeRef.current) {
      const iframeDocument =
        iframeRef?.current?.contentDocument ||
        iframeRef?.current?.contentWindow?.document;

      if (iframeDocument && iframeDocument.body) {
        // ✅ Ensure iframeDocument and body exist
        // Inject Tailwind CSS dynamically
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/globals.css"; // Ensure this file exists
        iframeDocument.head.appendChild(link);

        // Inject component HTML safely
        iframeDocument.body.innerHTML = `<div class="p-4 w-full flex  justify-center">${htmlCode}</div>`;
      }
    }
  }, [code]);
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
        <div>
          <CopyButton value={code} />
        </div>
      </div>
      <Divider />
      <div className="p-4">
        <ComponetPreviewIframe
          code={code}
          componentTitle={componentTitle}
          iframeRef={iframeRef}
          previewWidth={componentBreakpoint.width}
        />
      </div>
    </div>
  );
}
