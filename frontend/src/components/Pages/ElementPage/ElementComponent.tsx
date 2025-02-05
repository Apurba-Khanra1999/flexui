import MDXComponent from "@/components/MDXComponent";
import React from "react";

export default function ElementComponent({
  data,
}: {
  data: Record<string, any>;
}) {
  return (
    <div>
      <h1>{data?.ui}</h1>
      <div>
        <MDXComponent mdxText={data?.docs} />
      </div>
    </div>
  );
}
