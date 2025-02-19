import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full px-6 py-4 border-t bg-base shadow-sm mt-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-[450px]">
          <h3 className="text-3xl font-bold py-2">FlexUI.</h3>
          <p>
            Free open source Tailwind CSS components for marketing and eCommerce
            websites, as well as application UI.
          </p>
        </div>
        <div className="flex mt-3 font-bold items-center justify-between bg-neutral-100 py-4 px-2">
          <div className="flex gap-3">
            <Link href="#">
              <p>Terms of Use</p>
            </Link>
            <Link href="#">
              <p>FAQs</p>
            </Link>
            <Link href="#">
              <p>Acknowledgements</p>
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-3">
              <li>
                <FaFacebookSquare size={24} />
              </li>
              <li>
                <FaLinkedin size={24} />
              </li>
              <li>
                <FaGithubSquare size={24} />
              </li>
              <li>
                <FaInstagramSquare size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
