import React from "react";
import { ComponentWithCodeItem } from "./ComponentWithCodeItem";

export const ComponentWithPreviewShowcase = ({
  data,
}: {
  data: Record<string, string>[];
}) => {
  return (
    <div className="p-4">
      {/* Masonry Grid */}
      <div className="pb-6">
        <h1 className="font-bold text-3xl">All Components</h1>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, minima.</p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 2xl:columns-4 gap-4 space-y-4">
        {data.map((item, i) => (
          <ComponentWithCodeItem key={i} previewData={item} />
        ))}
      </div>
    </div>
  );
};
