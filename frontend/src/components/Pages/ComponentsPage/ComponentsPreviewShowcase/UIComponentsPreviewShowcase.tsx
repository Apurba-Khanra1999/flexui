import ComponentPreview from "@/components/CodeComponets/ComponentPreview";
import { Loader } from "@/components/ui/Loader";
import useGetComponentsByCategory from "@/utils/hooks/useGetComponentsByCategory";
import { Chip } from "@heroui/react";
import Link from "next/link";

export const UIComponentsPreviewShowcase = ({
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
        <h1 className="font-bold text-3xl">UI Components.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, minima.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {data && data?.length > 0 ? (
          data?.map(
            (
              item: {
                uiName: string;
                uniqueSlug: string;
                codes: { code: string }[];
              },
              i: number
            ) => (
              <>
                <ComponentPreview
                  key={i}
                  code={item?.codes[0]?.code}
                  componentTitle={item?.uiName}
                />
                <Link href={`/components/${item?.uniqueSlug}`}>
                  <Chip>{"</> View Code"}</Chip>
                </Link>
              </>
            )
          )
        ) : (
          <h2 className="font-bold text-lg">Components Empty.</h2>
        )}
      </div>
    </div>
  );
};
