import { extractHTMLFromJSX } from "@/utils";
import { ComponetPreviewType } from "@/utils/Types";
import { useEffect, useRef } from "react";

export default function ComponentPreview({
  // showPreview,
  code,
  componentTitle,
  previewWidth = "100%",
  previewHeight = "h-auto",
  // refIframe,
  previewDark,
}: ComponetPreviewType) {
  const iframeTheme = previewDark ? "bg-gray-950" : "bg-white";
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
    <div className="rounded-md">
      <iframe
        className={`w-full rounded-lg overflow-hidden lg:transition-all ${iframeTheme} ${previewHeight}`}
        loading="lazy"
        // srcDoc={htmlCode as string}
        style={{ maxWidth: previewWidth }}
        title={`${componentTitle} Component`}
        ref={iframeRef}
      ></iframe>
    </div>
  );
}
