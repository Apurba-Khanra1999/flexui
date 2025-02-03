// pages/element/[element].js
import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { GET_ELEMENT_DETAILS } from "@/utils/AxiosUtils/api";

export default function ElementPage({ mdxSource, frontMatter }:{
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>,
  frontMatter: { title: string }
}) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
}

export async function getServerSideProps({ params }:{
  params: { element: string }
}) {
  const { element } = params;
  
  // Fetch the MDX text from your external API
  const res = await fetch(`http://localhost:3400/api${GET_ELEMENT_DETAILS}/${element}`);
  const data = await res.json();

  // Assume data.docs holds the MDX text and data.frontMatter holds meta info
  const mdxSource = await serialize(data.docs, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data.frontMatter || {},
  });

  return {
    props: {
      mdxSource,
      frontMatter: data.frontMatter || { title: element },
    },
  };
}
