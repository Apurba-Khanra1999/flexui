import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full px-6 py-4 shadow-lg shadow-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-[450px]">
          <h3 className="text-3xl font-bold py-2">FlexUI.</h3>
          <p>
            Free open source Tailwind CSS components for marketing and eCommerce
            websites, as well as application UI.
          </p>
        </div>
        <div className="flex gap-3 mt-3 font-bold">
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
      </div>
    </div>
  );
};
