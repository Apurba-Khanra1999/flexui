import prettier from 'prettier';

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, "").trim(); // Remove all HTML tags
  };


// Prettify code using Prettier
export const formatCode = async(code:string, language:string) => {
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
