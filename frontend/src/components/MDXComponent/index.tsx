import { MDXRemote, MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import remarkGfm from "remark-gfm";
import ErrorComponent from "../ui/ErrorComponent";
import { Loader } from "../ui/Loader";
import { CustomComponets } from "./CustomComponets";

export default async function MDXComponent({ mdxText }: { mdxText: string }) {
  const options: MDXRemoteOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      // rehypePlugins: [rehypeHighlight],
    },
    parseFrontmatter: true,
  };
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <MDXRemote
          source={mdxText}
          options={options}
          onError={ErrorComponent}
          components={CustomComponets}
        />
      </Suspense>
    </div>
  );
}
