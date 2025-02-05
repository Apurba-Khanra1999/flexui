import { MDXComponents } from 'next-mdx-remote-client/rsc'
import React from 'react'
import { CodeBlock } from '../CodeComponets/CodeBlock'

export const CustomComponets: MDXComponents = {
  code: CodeBlock

}