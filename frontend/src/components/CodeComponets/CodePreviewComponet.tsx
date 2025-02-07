"use client";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import { useRef } from "react";
import { CodeBlock } from "./CodeBlock";
import ComponentPreview from "./ComponentPreview";

export default function CodePreviewComponet({
  codeList,
}: {
  codeList: Record<string, string>[];
}) {
  const ref = useRef(null);
  const jsxCode = codeList.find(
    (codeItem) => codeItem?.language === "jsx"
  )?.code;
  return (
    <Card className="my-4">
      <CardBody>
        <Tabs aria-label="Tabs variants" variant="underlined">
          <Tab title={<p className="text-sm font-medium uppercase">Preview</p>}>
            <ComponentPreview
              code={jsxCode as string}
              componentTitle="Preview"
              refIframe={ref}
            />
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
              <CodeBlock
                code={codeItem?.code}
                className={`language-${codeItem?.language}`}
              />
            </Tab>
          ))}
        </Tabs>
      </CardBody>
    </Card>
  );
}
