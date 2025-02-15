"use client";
import { Chip, Divider } from "@heroui/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function WhyChooseUs() {
  const wcuData = [
    { numbers: "40+", title: "UI Components", actionText: "View All" },
    { numbers: "8K+", title: "GitHub Start", actionText: "Visit GitHub" },
    { numbers: "5M+", title: "Global Downloads", actionText: "Download Now" },
    { numbers: "10+", title: "Components Pages", actionText: "See Pages" },
  ];
  return (
    <div className="text-center">
      <div>
        <Chip size="lg" color="primary">
          Why Choose Us.
        </Chip>
      </div>
      <div className="mx-auto my-8 max-w-2xl">
        <h3 className="text-5xl font-bold">
          A set of beautifully-designed, accessible, and customizable
        </h3>
      </div>
      <div className="bg-neutral-100 mt-14 py-5 rounded-xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:px-28">
          {wcuData.map((item, index) => (
            <>
              {/* <Divider  /> */}
              <div key={index} className="flex flex-col items-center gap-6">
                <div>
                  <h4 className="text-7xl font-black">{item.numbers}</h4>
                </div>
                <div>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-primary">
                    {item.actionText}
                  </p>
                  <FaLongArrowAltRight />
                </div>
              </div>
              {/* {index - 1 == wcuData.length && <Divider />} */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
