import * as babelParser from "prettier/parser-babel";
import * as flowParser from "prettier/parser-flow";
import * as htmlParser from "prettier/parser-html";
import * as tsParser from "prettier/parser-typescript";
import * as prettierPluginESTree from "prettier/plugins/estree";
import * as prettier from 'prettier/standalone';

import * as  babel from "@babel/parser";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").trim(); // Remove all HTML tags
};


// Prettify code using Prettier
export const formatCode = async (code: string, language: string) => {
  const formattedCode = await prettier.format(code, {
    parser: language === "jsx" ? "babel" : "babel-flow",
    plugins: [tsParser, babelParser.default, htmlParser.default, flowParser.default, prettierPluginESTree.default],

    "semi": true,


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
    console.log(error)
    return false; // Parsing failed, not JSX/TSX
  }
};

export const extractHTMLFromJSX = (code: string) => {
  if (isJSXCode(code)) {

    const jsxHtmlRegex = /<([a-zA-Z][^\s/>]*)[^>]*>(.*?)<\/\1>/gs;

    const matches = [];
    let match;

    while ((match = jsxHtmlRegex.exec(code)) !== null) {
      matches.push(match[0]);
    }

    return matches
  } else {
    return code
  }
};



