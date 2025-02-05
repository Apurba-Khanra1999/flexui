import remarkGfm from "remark-gfm";
import {
  MDXComponents,
  MDXRemote,
  type MDXRemoteOptions,
} from "next-mdx-remote-client/rsc";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/night-owl.css";
import { GET_ELEMENT_DETAILS } from "@/utils/AxiosUtils/api";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ErrorComponent from "@/components/ui/ErrorComponent";
import request from "@/utils/AxiosUtils";
import MDXComponent from "@/components/MDXComponent";
import CodePreviewComponet from "@/components/CodeComponets/CodePreviewComponet";

interface FrontMatter {
  title: string;
}

interface ElementData {
  mdxSource: string;
}

// async function getElementData(element: string): Promise<ElementData> {
//   const data = await request({"url":`${GET_ELEMENT_DETAILS}/${element}`,"method":"GET"});

//   const mdxSource = data?.docs;

//   // // Serialize MDX content
//   // const mdxSource = await serialize(data?.docs, {
//   //   mdxOptions: {
//   //     remarkPlugins: [remarkGfm],
//   //     rehypePlugins: [rehypeHighlight],
//   //   },
//   //   scope: data.frontMatter || {},
//   // });

//   // console.log(mdxSource);
//   return {mdxSource}
// }

export default async function ElementPage({ element }: { element: string }) {
  const data = await request({
    url: `${GET_ELEMENT_DETAILS}/${element}`,
    method: "GET",
  });

  return (
    <div>
      <div>
        <h1 className="font-bold text-4xl">{data?.uiName}</h1>
        <p className="text-md font-semibold my-2">{data?.uiSubtitle}</p>
      </div>
      <div>
        <CodePreviewComponet codeList={data?.codes} />
      </div>

      <div>
        <MDXComponent mdxText={data?.docs} />
      </div>
    </div>
  );
}
