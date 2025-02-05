"use client";
import { Card, CardHeader } from "@heroui/react";

type Props = {
  error: Error | string;
};

export default function ErrorComponent({ error }: Props) {
  return (
    <Card>
      <CardHeader>
        <h2>Error</h2>
      </CardHeader>
      <div id="mdx-error">
        <pre className="text-error">
          <code>{typeof error === "string" ? error : error.message}</code>
        </pre>
      </div>
    </Card>
  );
}
