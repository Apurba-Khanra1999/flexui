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
    (codeItem) => codeItem?.language === "tailwind"
  )?.code;
  return (
    <Tabs aria-label="Tabs variants" variant="underlined" size="sm">
      <Tab title={<p className="text-sm font-medium capitalize">Preview</p>}>
        <ComponentPreview code={jsxCode as string} componentTitle="Preview" />
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
          <div>
            <CodeBlock
              children={codeItem?.code}
              className={`language-${codeItem?.language}`}
            />
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
