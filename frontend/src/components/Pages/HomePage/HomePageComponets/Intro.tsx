"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { HiMiniArrowLongRight } from "react-icons/hi2";

export const Intro = () => {
  return (
    <div className="text-center my-12">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-7xl   font-semibold">
          Free Open Source Tailwindcss Components
        </h1>
        {/* <h2 className="text-6xl font-bold xl:text-9xl">FlexUI.</h2> */}
      </div>
      <div className="mx-auto my-9 max-w-4xl">
        <p className="text-lg text-center md:text-3xl text-pretty">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          debitis nemo laboriosam minima omnis.
        </p>
      </div>
      <div>
        <Link href="/components">
          <Button
            color="primary"
            variant="shadow"
            size="lg"
            endContent={<HiMiniArrowLongRight size={22} />}
          >
            Get Stated
          </Button>
        </Link>
      </div>
      <div></div>
    </div>
  );
};
