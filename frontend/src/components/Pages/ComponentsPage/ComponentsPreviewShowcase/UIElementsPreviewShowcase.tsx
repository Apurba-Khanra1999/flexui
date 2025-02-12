import React from "react";
import { ComponentWithCodeItem } from "./ComponentWithCodeItem";
import useGetComponentsByCategory from "@/utils/hooks/useGetComponentsByCategory";
import { Loader } from "@/components/ui/Loader";

export const UIElementsPreviewShowcase = ({
  categoryId,
}: {
  categoryId: string | number;
}) => {
  const { data, isLoading } = useGetComponentsByCategory({
    categoryId: categoryId as string,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="p-4">
      {/* Masonry Grid */}
      <div className="pb-6">
        <h1 className="font-bold text-3xl">UI Elements</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, minima.
        </p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 2xl:columns-4 gap-4 space-y-4">
        {data && data?.length > 0 ? (
          data?.map((item: Record<string, string>, i: number) => (
            <ComponentWithCodeItem key={i} previewData={item} />
          ))
        ) : (
          <h2 className="font-bold text-lg">Components Empty.</h2>
        )}
      </div>
    </div>
  );
};
