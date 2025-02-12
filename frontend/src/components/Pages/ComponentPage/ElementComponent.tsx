import CodePreviewComponet from "@/components/CodeComponets/CodePreviewComponet";
import MDXComponent from "@/components/MDXComponent";

export default function ElementComponent({
  data,
}: {
  data: Record<string, unknown>;
}) {
  return (
    <>
      {data && (
        <div className="my-4">
          <div>
            <h1 className="font-bold text-4xl">{data?.uiName as string}</h1>
            <p className="text-md font-semibold my-2">
              {data?.uiSubtitle as string}
            </p>
          </div>
          <div>
            <CodePreviewComponet
              codeList={data?.codes as Record<string, string>[]}
            />
          </div>

          <div>
            <MDXComponent mdxText={data?.docs as string} />
          </div>
        </div>
      )}
    </>
  );
}
