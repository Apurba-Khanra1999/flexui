import { SampleAlert } from "@/components/SampleUI/SampleAlert";
import { SampleAvatar } from "@/components/SampleUI/SampleAvatar";
import { SampleBadge } from "@/components/SampleUI/SampleBadge";
import SampleButton from "@/components/SampleUI/SampleButton";
import { SampleCard } from "@/components/SampleUI/SampleCard";
import { SampleLoading } from "@/components/SampleUI/SampleLoading";
import { SampleSelect } from "@/components/SampleUI/SampleSelect";
import { SampleSwap } from "@/components/SampleUI/SampleSwap";
import React from "react";

export default function SampleUI() {
  return (
    <div className="my-24">
      <div className="flex flex-col gap-6 xl:flex-row xl:gap-0 items-start justify-between px-6 xl:px-16 py-8 rounded-md bg-neutral-100 dark:bg-neutral-900">
        <div className="flex flex-col gap-7">
          <SampleAlert />
          <SampleLoading />
          <SampleAvatar />
          <SampleBadge />
        </div>
        <div className="flex flex-col gap-7  md:max-w-96">
          <SampleCard />
        </div>
        <div className="flex flex-col gap-7">
          <SampleButton />
          <SampleSelect />
          <SampleSwap />
          <SampleBadge />
        </div>
      </div>
    </div>
  );
}
