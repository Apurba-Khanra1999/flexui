import { SampleAlert } from "@/components/SampleUI/SampleAlert";
import { SampleAvatar } from "@/components/SampleUI/SampleAvatar";
import { SampleBadge } from "@/components/SampleUI/SampleBadge";
import SampleButton from "@/components/SampleUI/SampleButton";
import { SampleCard } from "@/components/SampleUI/SampleCard";
import { SampleLoading } from "@/components/SampleUI/SampleLoading";
import { SampleSelect } from "@/components/SampleUI/SampleSelect";
import { SampleSwap } from "@/components/SampleUI/SampleSwap";
import { SampleTimeline } from "@/components/SampleUI/SampleTimeline";
import React from "react";

export const HeroSampleUI = () => {
  return (
    <div className="max-w-[600px] py-4">
      <div className="flex flex-wrap items-start gap-6">
        <SampleAlert />
        <SampleAvatar />
        <SampleSelect />
        <SampleSwap />
        <SampleBadge />
        <SampleLoading />
        <SampleTimeline />
        <div className="w-56">
          <SampleCard />
        </div>
        <SampleButton />
      </div>
    </div>
  );
};
