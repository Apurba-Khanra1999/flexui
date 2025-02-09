"use client";
import { formatCode } from "@/utils";
import { CodeBlockProps } from "@/utils/Types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "../ui/CopyButton";
import { useEffect, useState } from "react";

export const CodeBlock = ({ className = "", children }: CodeBlockProps) => {
  const language = className.replace("language-", "") || "javascript";

  const [formattedCode, setFormattedCode] = useState<string>(children);
  // console.log(formattedCode);
  useEffect(() => {
    formatCode(children, language).then((codeString) =>
      setFormattedCode(codeString)
    );
  }, [children, language]);
  return (
    <div className="my-4 relative w-fit">
      <CopyButton value={formattedCode} className="absolute top-2 right-2" />
      <SyntaxHighlighter
        customStyle={{ borderRadius: "8px", padding: "20px" ,fontSize:"0.9rem" }}
        language={language}
        style={dracula}
        wrapLongLines
      >
        {formattedCode}
      </SyntaxHighlighter>
    </div>
  );
};
