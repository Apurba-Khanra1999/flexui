import MDXComponent from "@/components/MDXComponent";

export default function ElementComponent({
  data,
}: {
  data: Record<string, string>;
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
