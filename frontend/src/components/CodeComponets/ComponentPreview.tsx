import { extractHTMLFromJSX } from "@/utils";
import { ComponetPreviewType } from "@/utils/Types";

export default function ComponentPreview({
  showPreview,
  code,
  componentTitle,
  previewWidth = "100%",
  previewHeight = "h-[400px] lg:h-[600px]",
  refIframe,
  previewDark,
}: ComponetPreviewType) {
  const iframeTheme = previewDark ? "bg-gray-950" : "bg-white";
  const htmlCode = extractHTMLFromJSX(code);
  console.log(htmlCode);
  return (
    <div
      
      className="rounded-md"
    >
      <iframe
        className={`w-full rounded-md ring-2 ring-gray-900 lg:transition-all ${iframeTheme} ${previewHeight}`}
        loading="lazy"
        srcDoc={htmlCode as string}
        style={{ maxWidth: previewWidth }}
        title={`${componentTitle} Component`}
        ref={refIframe}
      ></iframe>
    </div>
  );
}
