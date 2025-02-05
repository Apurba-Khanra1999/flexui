"use client";
import { Button } from "@heroui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Intro = () => {
  return (
    <div className="text-center lg:text-left">
      <div className="flex flex-col space-y-4 space-y-reverse">
        <h1 className="order-last text-lg  font-semibold">
          Free Open Source Tailwind CSS Components
        </h1>
        <h2 className="text-6xl font-bold xl:text-9xl">
          FlexUI.
        </h2>
      </div>
      <div className="mx-auto lg:mx-0 mt-6 max-w-xl space-y-6">
        <p className="text-base/relaxed text-pretty lg:max-w-80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          debitis nemo laboriosam minima omnis! Earum architecto quis quae
          eveniet adipisci tenetur saepe quo.
        </p>
        <div>
          <Button
            color="primary"
            variant="shadow"
            endContent={<FaLongArrowAltRight />}
          >
            Get Stated
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <div className="not-prose mx-auto max-w-lg text-center">
          <div
            data-ea-publisher="hyperuidev"
            data-ea-type="image"
            data-ea-style="stickybox"
            className="bordered horizontal [&amp;_.ea-callout]:mb-0! [&amp;_.ea-content]:mx-0! [&amp;_.ea-content]:mt-0! [&amp;_.ea-stickybox-hide]:hidden"
          ></div>
        </div>
      </div>
    </div>
  );
};
