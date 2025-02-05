"use client";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import React from "react";
import { CodeBlock } from "./CodeBlock";
import ComponentPreview from "./ComponentPreview";

export default function CodePreviewComponet({
  codeList,
}: {
  codeList: Record<string, any>[];
}) {
    const jsxCode = codeList.find((codeItem) => codeItem?.language === "jsx")?.code;
  return (
    <Card className="my-4">
      <CardBody>
        <Tabs aria-label="Tabs variants" variant="underlined">
            <Tab  title={<p className="text-sm font-medium uppercase">Preview</p>} >
                <ComponentPreview code={jsxCode}/>
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
                children={codeItem?.code}
                className={`language-${codeItem?.language}`}
              />
            </Tab>
          ))}
        </Tabs>
      </CardBody>
    </Card>
  );
}
