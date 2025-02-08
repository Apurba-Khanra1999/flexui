"use client";
import { Card, CardBody, CardHeader, Tab, Tabs } from "@heroui/react";
import { useRef } from "react";
import { CodeBlock } from "./CodeBlock";
import ComponentPreview from "./ComponentPreview";

export default function CodePreviewComponet({
  codeList,
  elementTitle,
}: {
  codeList: Record<string, string>[];
  elementTitle: string;
}) {
  const ref = useRef(null);
  const jsxCode = codeList.find(
    (codeItem) => codeItem?.language === "jsx"
  )?.code;
  return (
    <Tabs aria-label="Tabs variants" variant="underlined" size="sm">
      <Tab title={<p className="text-sm font-medium capitalize">Preview</p>}>
        <div className="p-4 border border-slate-700 rounded-md">

            <ComponentPreview
              code={jsxCode as string}
              componentTitle="Preview"
              refIframe={ref}
            />
        </div>
          
      </Tab>
      {codeList?.map((codeItem, index) => (
        <Tab
          key={index}
          title={
            <p className="text-sm font-medium uppercase">
              {codeItem?.language}
            </p>
          }
        >
          <div className="p-4 border border-slate-700 rounded-md">

              <CodeBlock
                code={codeItem?.code}
                className={`language-${codeItem?.language}`}
              />
          </div>
            
        </Tab>
      ))}
    </Tabs>
  );
}
