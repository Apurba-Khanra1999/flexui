import { ComponetPreviewType } from "@/utils/Types";
import React from "react";

export default function ComponentPreviewIframe({
  componentTitle,
  previewWidth = "100%",
  previewHeight = "h-auto",
  iframeRef,
}: ComponetPreviewType) {
  return (
    <div className="rounded-md">
      <iframe
        className={`w-full rounded-lg overflow-hidden lg:transition-all  ${previewHeight}`}
        loading="lazy"
        // srcDoc={htmlCode as string}
        style={{ maxWidth: previewWidth }}
        title={`${componentTitle} Component`}
        ref={iframeRef}
      ></iframe>
    </div>
  );
}
