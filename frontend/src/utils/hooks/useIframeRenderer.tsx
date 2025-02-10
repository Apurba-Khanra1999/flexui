import { useEffect, useRef } from "react";

export function useIframeRenderer(code: string) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document;

      if (iframeDocument && iframeDocument.body) {
        // Inject Tailwind CSS dynamically
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/globals.css"; // Make sure this file exists
        iframeDocument.head.appendChild(link);

        // Convert JSX to HTML and inject into iframe
        iframeDocument.body.innerHTML = `<div class="p-4 w-full flex justify-center items-center">${code}</div>`;
      }
    }
  }, [code]);

  return iframeRef;
}
