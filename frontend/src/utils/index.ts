import * as babel from "@babel/parser";
import prettier from 'prettier';

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").trim(); // Remove all HTML tags
};


// Prettify code using Prettier
export const formatCode = async (code: string, language: string) => {
  console.log('formatCode', code, language);
  const formattedCode = await prettier.format(code, {
    parser: language === 'mdx' ? 'mdx' : 'babel', // Use MDX parser for MDX content or Babel for JS/React
    // plugins: [prettierMdxPlugin], // Ensure Prettier supports MDX formatting
  });
  return formattedCode;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const isJSXCode = (code: string) => {
  try {
    babel.parse(code, {
      sourceType: "module",
      plugins: ["jsx"],
    });
    return true; // Parsing succeeded, it's JSX/TSX
  } catch (error) {
    return false; // Parsing failed, not JSX/TSX
  }
};

export const extractHTMLFromJSX = (code: string) => {
  if (isJSXCode(code)) {

    const jsxHtmlRegex = /<([a-zA-Z][^\s/>]*)[^>]*>(.*?)<\/\1>/gs;

    let matches = [];
    let match;

    while ((match = jsxHtmlRegex.exec(code)) !== null) {
      matches.push(match[0]);
    }

    return matches
  } else {
    return code
  }
};



