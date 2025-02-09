import * as babel from "@babel/parser";
import prettier from 'prettier';
import babelParser from "@babel/parser";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
const tsParser = require("prettier/parser-typescript");

export const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").trim(); // Remove all HTML tags
};


// Prettify code using Prettier
export const formatCode = async (code: string, language: string) => {
  const formattedCode = await prettier.format(code, {
    parser: language === "jsx" ? "babel" : "typescript",
    plugins: [tsParser],
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": false,
    "semi": true,
    "experimentalTernaries": false,
    "singleQuote": false,
    "jsxSingleQuote": true,
    "quoteProps": "as-needed",
    "trailingComma": "all",
    "singleAttributePerLine": false,
    "htmlWhitespaceSensitivity": "css",
    "vueIndentScriptAndStyle": true,
    "proseWrap": "always",
    "insertPragma": false,
    "requirePragma": false,
    "tabWidth": 3,
    "useTabs": true,
    "embeddedLanguageFormatting": "auto",
    "printWidth": 30

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



